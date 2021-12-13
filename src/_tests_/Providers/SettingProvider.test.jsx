import React, { useContext, useState } from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import {
  SettingContext,
  SettingProvider,
} from "../../providers/SettingProvider";
import { act } from "react-dom/test-utils";

beforeAll(() => {
  console.log = () => {};
});

jest.mock("axios");

const ChildComponent = () => {
  const { setting, localizedContent, optinFields, settingFinal } =
    useContext(SettingContext);
  console.log("------>", localizedContent?.Welcome_back_to);
  return (
    <div>
      {localizedContent ? <p>{localizedContent?.Welcome_back_to}</p> : null}
      <p>Child Component</p>
    </div>
  );
};

const setUp = (props) => {
  const { affId, appLocale } = props;
  render(
    <SettingProvider locale={appLocale} affiliateId={affId}>
      <ChildComponent />
    </SettingProvider>
  );
};

describe("<SettingProvider/>", () => {
  const response = {
    data: {
      error: {
        forgotPassword: {
          "forgotPassword.too_many_requests":
            "You've reached the maximum number of password change attempts. Wait a few minutes and try again.",
        },
        login: {
          "login.invalid_user_password":
            "We couldn’t sign you with this email and password. Try again, <a_reset_pass>reset your password</a_reset_pass>, or <a_signin_otp>sign in with a one-time passcode.<a_signin_otp>",
        },
        passwordless: {
          "passwordless.bad.email":
            "Sorry, we couldn’t find an account for this email address.",
        },
        signUp: {
          "signUp.export_restriction":
            "We can’t create an account for <b>{email}</b> because your email is from a country subject to US export restrictions, or your company is on a list of prohibited organizations, either by the US or foreign government agency.",
        },
      },
      Welcome_back_to: "Welcome back to McAfee!",
    },
  };
  it("should check if setting provider wraps child component correctly", () => {
    setUp({ affId: 105, appLocale: "en-us" });
    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
  it("should check if localization content is returned correctly correctly", async () => {
    axios.get.mockImplementation(() => Promise.resolve(response));
    await act(async () => setUp({ affId: 105, appLocale: "en-us" }));
    const childComponent = screen.getByText("Welcome back to McAfee!");
    await waitFor(() => expect(childComponent).toBeInTheDocument());
  });
});
