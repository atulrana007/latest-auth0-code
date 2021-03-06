import React, { useState, useEffect } from "react";
import translate from "../../localization/translate";
import styles from "./style.module.css";
import { ReactComponent as OutlineMail } from "../../svg/mailIcon.svg";
import { ReactComponent as TickIcon } from "../../svg/tickIcon.svg";
import { ReactComponent as PasswordCross } from "../../svg/errorCross.svg";
import { FormattedMessage } from "react-intl";

const PasswordLessFlow = (props) => {
  const {
    onChange,
    LoginError,
    setLoginError,
    LoginForm,
    validateEmail,
    // getOtp,
    hideEmail,
    onSubmit,
    LoginText,
    otpValid,
    locale,
    resendingCode,
    handleClickResendCode,
  } = props;

  return (
    <>
      {!hideEmail && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.LoginInputContainer}>
            {LoginForm.email !== "" ? (
              <div
                className={styles.LoginInputLabel}
                style={{
                  // color: validateEmail(LoginForm.email) ? "#0CA77D" : "red",
                  color:
                    LoginError.isEmailError === true
                      ? "red"
                      : validateEmail(LoginForm.email)
                      ? "#848faa"
                      : "red",
                }}
              >
                {translate("email")}
              </div>
            ) : null}
            <div
              style={{
                flex: 1,
                display: "flex",
                border:
                  LoginError?.isEmailError === true || LoginError?.errorCode
                    ? "1px solid red"
                    : "1px solid #848faa",
                backgroundColor: "#ffff",
                borderRadius: "12px",
              }}
            >
              <OutlineMail
                className={styles.LoginInputLogo}
                style={{
                  color: validateEmail(LoginForm.email) ? "green" : "",
                }}
              />
              <FormattedMessage id="email">
                {(msg) => (
                  <input
                    style={{ color: LoginError.isEmailError ? "red" : "" }}
                    type="email"
                    id="email"
                    name="email"
                    value={LoginForm.email}
                    placeholder={msg}
                    className={styles.LoginInput}
                    onChange={onChange}
                  />
                )}
              </FormattedMessage>
              {LoginError.isEmailError ? (
                <PasswordCross className={styles.cancel} />
              ) : null}
            </div>
          </div>
        </div>
      )}
      {LoginError?.email && (
        <div id="passwordless-invalid-email-error" className={styles.Error}>
          {translate(LoginError?.email)}
        </div>
      )}

      {LoginForm.otpAvailable && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={styles.LoginInputContainer}
            style={{
              border: `1px solid ${
                otpValid && !LoginError?.errorCode ? "#848faa" : "red"
              }`,
            }}
          >
            <div className={styles.InputWrapper}>
              {LoginForm.otp !== "" ? (
                <div
                  className={styles.LoginInputLabel}
                  style={{
                    color:
                      otpValid && !LoginError?.errorCode ? "#848faa" : "red",
                  }}
                >
                  {translate("one_time_passcode")}
                </div>
              ) : null}
              <FormattedMessage id="one_time_passcode">
                {(msg) => (
                  <input
                    type="text"
                    pattern="\d*"
                    id="otp"
                    name="otp"
                    placeholder={msg}
                    className={
                      otpValid && !LoginError?.errorCode
                        ? styles.LoginInputOTP
                        : styles.LoginInputOTPFailure
                    }
                    onChange={onChange}
                    value={LoginForm.otp}
                  />
                )}
              </FormattedMessage>
              {!otpValid || LoginError?.errorCode ? (
                <PasswordCross className={styles.cancel} />
              ) : null}
            </div>
          </div>
          <div
            id="otp-login-resend-code-link"
            className={styles.LoginOtpResendContainer}
            onClick={handleClickResendCode}
            data-nav-element-click="Resend OTP | Failure"
          >
            <div
              className={`${styles.LoginResendBtn} ${
                resendingCode === "sending" ? styles.LoginResendingBtn : ""
              }`}
            >
              {resendingCode === "" ? (
                translate("ResendCode")
              ) : resendingCode === "sending" ? (
                translate("Resending_code")
              ) : (
                <>
                  <span className={styles.LoginOtpCodeSent}>
                    {translate("Code_sent")}
                  </span>{" "}
                  {translate("ResendCode")}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <button
        id="otp-login-continue-button"
        className={styles.RequestOtp}
        onClick={(e) => onSubmit(e)}
        disabled={
          !validateEmail(LoginForm.email) ||
          LoginForm.isSubmitting ||
          !otpValid ||
          (LoginForm.otpAvailable && !LoginForm.otp)
        }
        style={{
          backgroundColor:
            !validateEmail(LoginForm.email) ||
            LoginForm.isSubmitting ||
            !otpValid ||
            (LoginForm.otpAvailable && !LoginForm.otp)
              ? "#C1C7D2"
              : "",
          cursor: LoginForm.isSubmitting ? "progress" : "pointer",
        }}
        // data-nav-element-click="otp-button-clicked"
      >
        {translate("continue")}
      </button>

      {LoginForm.otpAvailable && (
        <div className={styles.LoginOptMessageContainer}>
          <div className={styles.LoginOtpMessage}>
            <div>
              {translate(
                "If_you_didnt_receive_a_passcode_check_your_spam_folder"
              )}
            </div>
          </div>
          <div className={styles.ContactSupport}>
            <div>{translate("Need_help")}</div>
            <div
              style={{
                margin: "0 5px",
                color: "#1671ee",
                cursor: "pointer",
              }}
            >
              <a
                id="otp-login-contact-support-link"
                target="_blank"
                href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
                data-nav-element-click="Contact Us"
              >
                {translate("Contact_support")}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordLessFlow;
