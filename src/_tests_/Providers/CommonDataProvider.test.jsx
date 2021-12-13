import React, { useContext, useState } from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import { act } from "react-dom/test-utils";
import {
  CommonDataContext,
  CommonDataProvider,
} from "../../providers/CommonDataContext";

beforeAll(() => {
  console.log = () => {};
});

const ChildComponent = () => {
  const {
    connections,
    LoginText,
    setLoginText,
    LoginForm,
    setLoginForm,
    SignupText,
    setSignupText,
    SignupForm,
    setSignupForm,
    passwordResetConfig,
    locale,
    customization,
    isAffiliateLogo,
    LoginError,
    setLoginError,
    setIsAffiliateLogo,
    setCustomizationData,
  } = useContext(CommonDataContext);
  return (
    <div>
      <p>Child Component</p>
    </div>
  );
};
const setUp = (props) => {
  const { pageConfig, appLocale } = props;
  render(
    <CommonDataProvider
      config={pageConfig}
      passwordResetConfig={{}}
      email="test-email@gmail.com"
      locale={appLocale}
    >
      <ChildComponent />
    </CommonDataProvider>
  );
};

describe("<CommonDataProvider/> success cases", () => {
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
  it("should check if CommonDataProvider provider wraps child component correctly", () => {
    setUp();
  });
});
