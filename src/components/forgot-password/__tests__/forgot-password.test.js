import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { CommonDataProvider } from "../../../providers/CommonDataContext";
import { AppProvider } from "../../../providers/AppContext";
import LanguageProvider from "../../../localization/languageProvider";
import { AccountProvider } from "../../../providers/AccountContext";
import { TrackingProvider } from "../../../providers/TrackingProvider";
import { SettingProvider } from "../../../providers/SettingProvider";

import axios from "axios";
import ForgotPasswordUI from "../ForgotPasswordUI";
import ForgotPasswordContainer from "../../../containers/ForgotPasswordContainer";

beforeAll(() => {
  console.log = () => { };
});

jest.mock("axios");

const setUp = (props) => {
  render(
    <Router>
      <TrackingProvider config={props.pageConfig}>
        <SettingProvider>
          <CommonDataProvider config={props.pageConfig}>
            <AppProvider>
              <LanguageProvider locale={props.locale.current}>
                <AccountProvider
                  config={props.pageConfig}
                  locale={props.locale.current}
                >
                  <ForgotPasswordContainer {...props}>
                    <ForgotPasswordUI />
                  </ForgotPasswordContainer>
                </AccountProvider>
              </LanguageProvider>
            </AppProvider>
          </CommonDataProvider>
        </SettingProvider>
      </TrackingProvider>
    </Router>
  );
};

describe("Forgot Password testing", () => {
  const props = {
    locale: { current: "en-us" },
    pageConfig: {
      auth0Domain: "test-auth0Domain",
      clientID: "test-clientID",
      callbackURL: "test-callbackURL",
      auth0Tenant: "test-auth0Tenant",
      extraParams: {
        response_type: "test-response_type",
        scope: "test-scope",
        state: "test-state",
        nonce: "test-nonce",
        _csrf: "test-_csrf",
        audience: "test-audience",
      },
    },
  };

  test("should check if the forgot-password component is rendered properly", () => {
    setUp(props);
    const screenText = screen.getByText("Reset password");
    expect(screenText).toBeInTheDocument();
  });

  test("should check if the forgot-password component sub-heading is rendered properly", () => {
    setUp(props);
    const screenText = screen.getByText(
      "Enter the email you used to create your McAfee account and we’ll send you a link to reset your password."
    );
    expect(screenText).toBeInTheDocument();
  });

  test("should check if Sign in page link is rendered properly", () => {
    setUp(props);
    const screenText = screen.getByText("Go back to sign in");
    expect(screenText).toBeInTheDocument();
  });

  test("should check if the forgot-password email field is rendered properly", () => {
    setUp(props);
    const screenText = screen.getByPlaceholderText("Email");
    expect(screenText).toBeInTheDocument();
  });

  test("should check if the forgot-password form submit button is rendered properly", async () => {
    setUp(props);
    const screenText = screen.getByText("Email me");
    expect(screenText).toBeInTheDocument();
  });
});

describe("Forgot-password Form testing", () => {
    const props = {
      locale: { current: "en-us" },
      pageConfig: {
        auth0Domain: "test-auth0Domain",
        clientID: "test-clientID",
        callbackURL: "test-callbackURL",
        auth0Tenant: "test-auth0Tenant",
        extraParams: {
          response_type: "test-response_type",
          scope: "test-scope",
          state: "test-state",
          nonce: "test-nonce",
          _csrf: "test-_csrf",
          audience: "test-audience",
        },
      },
    };
  
    test("should check if email field value is updated", () => {
      setUp(props);
      const emailInput = screen.getByPlaceholderText("Email");
      fireEvent.change(emailInput, {
        target: { value: "test-email@dispostable.com" },
      });
      expect(
        screen.getByDisplayValue("test-email@dispostable.com")
      ).toBeInTheDocument();
    });
});
  