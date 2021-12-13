import React, { useContext, useState } from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  AccountContext,
  AccountProvider,
} from "../../providers/AccountContext";
import auth0 from "auth0-js";

jest.mock("auth0-js");

beforeAll(() => {
  console.log = () => {};
});

const ChildComponent = () => {
  const {
    webAuth,
    otpStart,
    otpLogin,
    loginWithPassword,
    SignupWithPassword,
    sendForgotPasswordLink,
  } = useContext(AccountContext);
  const [response, setResponse] = useState({
    signupResponse: "",
    loginWithPasswordResponse: "",
    otpStartResponse: "",
    otpLoginResponse: "",
    sendEmailForgotPasswordLinkResponse: "",
  });

  return (
    <div>
      <div className="signup-testing-div">
        <div
          onClick={async () => {
            const data = await SignupWithPassword(
              "dummyEmail",
              "dummyPassword",
              {}
            );
            setResponse({ ...response, signupResponse: data });
          }}
        >
          Testing SignupWithPassword Button
        </div>
        {response.signupResponse ? <div>{response.signupResponse}</div> : null}
      </div>
      <div className="otp-start-testing-div">
        <div
          onClick={async () => {
            const data = await otpStart("dummyEmail");
            setResponse({ ...response, otpStartResponse: data });
          }}
        >
          Testing OtpStart Button
        </div>
        {response.otpStartResponse ? (
          <div>{response.otpStartResponse}</div>
        ) : null}
      </div>
      <div className="otp-Login-testing-div">
        <div
          onClick={async () => {
            const data = await otpLogin("dummyEmail", 1234);
            setResponse({ ...response, otpLoginResponse: data });
          }}
        >
          Testing OtpLogin Button
        </div>
        {response.otpLoginResponse ? (
          <div>{response.otpLoginResponse}</div>
        ) : null}
      </div>
      <div className="password-Login-testing-div">
        <div
          onClick={async () => {
            const data = await loginWithPassword("dummyEmail", "dummyPassword");
            setResponse({ ...response, loginWithPasswordResponse: data });
          }}
        >
          Testing PasswordLogin Button
        </div>
        {response.loginWithPasswordResponse ? (
          <div>{response.loginWithPasswordResponse}</div>
        ) : null}
      </div>
      <div className="Change-password-testing-div">
        <div
          onClick={async () => {
            const data = await sendForgotPasswordLink("dummyEmail");
            setResponse({
              ...response,
              sendEmailForgotPasswordLinkResponse: data,
            });
          }}
        >
          Testing ChangePasswordLink Button
        </div>
        {response.sendEmailForgotPasswordLinkResponse ? (
          <div>{response.sendEmailForgotPasswordLinkResponse}</div>
        ) : null}
      </div>
      <p>Child Component</p>
    </div>
  );
};

const setUp = (props) => {
  const { pageConfig, appLocale } = props;
  render(
    <AccountProvider config={pageConfig} locale={appLocale}>
      <ChildComponent />
    </AccountProvider>
  );
};

describe("<AccountProvider/> success cases", () => {
  const prop = {
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
  it("should check if the account provider renders correctly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
  it("should check if the SignupWithPassword function working properly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const clickButton = screen.getByText("Testing SignupWithPassword Button");
    fireEvent.click(clickButton);
    await waitFor(() =>
      expect(screen.getByText("Sign up Success")).toBeInTheDocument()
    );
  });
  it("should check if the OtpStart function working properly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const clickButton = screen.getByText("Testing OtpStart Button");
    fireEvent.click(clickButton);
    await waitFor(() =>
      expect(screen.getByText("Otp start Success")).toBeInTheDocument()
    );
  });
  it("should check if the OtpLogin function working properly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const clickButton = screen.getByText("Testing OtpLogin Button");
    fireEvent.click(clickButton);
    await waitFor(() =>
      expect(screen.getByText("Otp login Success")).toBeInTheDocument()
    );
  });
  it("should check if the loginWithPassword function working properly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const clickButton = screen.getByText("Testing PasswordLogin Button");
    fireEvent.click(clickButton);
    await waitFor(() =>
      expect(screen.getByText("Password login Success")).toBeInTheDocument()
    );
  });
  it("should check if the sendForgotPasswordLink function working properly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const clickButton = screen.getByText("Testing ChangePasswordLink Button");
    fireEvent.click(clickButton);
    await waitFor(() =>
      expect(screen.getByText("Change password Link Send")).toBeInTheDocument()
    );
  });
  it("should check if the sendForgotPasswordLink function working properly", async () => {
    setUp({ pageConfig: prop.pageConfig, appLocale: "en-us" });
    const clickButton = screen.getByText("Testing ChangePasswordLink Button");
    fireEvent.click(clickButton);
    await waitFor(() =>
      expect(screen.getByText("Change password Link Send")).toBeInTheDocument()
    );
  });
});
