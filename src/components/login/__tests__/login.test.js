import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { CommonDataProvider } from "../../../providers/CommonDataContext";
import { AppProvider } from "../../../providers/AppContext";
import LanguageProvider from "../../../localization/languageProvider";
import { AccountProvider } from "../../../providers/AccountContext";
import { TrackingProvider } from "../../../providers/TrackingProvider";
import { SettingProvider } from "../../../providers/SettingProvider";

import axios from "axios";
import LoginUI from "../loginUi";
import LoginContainer from "../../../containers/loginContainer";

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
                  <LoginContainer {...props}>
                    <LoginUI />
                  </LoginContainer>
                </AccountProvider>
              </LanguageProvider>
            </AppProvider>
          </CommonDataProvider>
        </SettingProvider>
      </TrackingProvider>
    </Router>
  );
};

describe("<LogIn/>", () => {
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

  test("should check if the login component is rendered properly", () => {
    setUp(props);
    screen.debug();
    const loginScreenText = screen.getByText("Sign into your McAfee account");
    expect(loginScreenText).toBeInTheDocument();
  });

  test("should check if the login component sub-heading is rendered properly", () => {
    setUp(props);
    const loginScreenText = screen.getByText(
      "Choose your sign in method to continue"
    );
    expect(loginScreenText).toBeInTheDocument();
  });

  test("should check if Signup page link is rendered properly", () => {
    setUp(props);
    const loginScreenText = screen.getByText("Create one now");
    expect(loginScreenText).toBeInTheDocument();
  });

  test("should check if the login form email field is rendered properly", () => {
    setUp(props);
    const loginScreenText = screen.getByPlaceholderText("Email");
    expect(loginScreenText).toBeInTheDocument();
  });

  test("should check if the login form password field is rendered properly", () => {
    setUp(props);
    const loginScreenText = screen.getByPlaceholderText("Password");
    expect(loginScreenText).toBeInTheDocument();
  });

  test("should check if the login form submit button is rendered properly", async () => {
    setUp(props);
    const loginScreenText = screen.getByText("Sign in");
    expect(loginScreenText).toBeInTheDocument();
  });
});

describe("LOGIN Form testing", () => {
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

  test("should check if Password field value is updated", () => {
    setUp(props);
    const emailInput = screen.getByPlaceholderText("Password");
    fireEvent.change(emailInput, {
      target: { value: "Mcafee123" },
    });
    expect(screen.getByDisplayValue("Mcafee123")).toBeInTheDocument();
  });
});
