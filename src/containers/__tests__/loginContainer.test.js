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

describe("login container testing", () => {
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
})