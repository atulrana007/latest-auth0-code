import React from "react";
import styles from "./style.module.css";
import translate from "../../localization/translate";
import PasswordFlow from "./password.js";
import PasswordLessFlow from "./passwordless";
// import { CommonDataContext } from "../../providers/CommonDataContext";

const Login = (props) => {
  const {
    onChange,
    switchLogin,
    onSubmit,
    LoginError,
    setLoginError,
    LoginForm,
    hideEmail,
    onToggle,
    validateEmail,
    getOtp,
    LoginText,
    otpValid,
    setOtpValid,
    trackClickEvent,
    handleForgotPasswordClick,
    blockScreenState,
    locale,
    resendingCode,
    handleClickResendCode,
  } = props;

  return (
    <div className={styles.LoginWrapperContainer}>
      <form className={styles.LoginInputWrapper}>
        {switchLogin === "login-with-password" && (
          <PasswordFlow
            onChange={onChange}
            LoginError={LoginError}
            setLoginError={setLoginError}
            LoginForm={LoginForm}
            validateEmail={validateEmail}
            onSubmit={onSubmit}
            trackClickEvent={trackClickEvent}
            LoginText={LoginText}
            handleForgotPasswordClick={handleForgotPasswordClick}
            blockScreenState={blockScreenState}
            locale={locale}
          />
        )}

        {switchLogin === "login-with-otp" && (
          <PasswordLessFlow
            onChange={onChange}
            LoginError={LoginError}
            setLoginError={setLoginError}
            LoginForm={LoginForm}
            validateEmail={validateEmail}
            getOtp={getOtp}
            hideEmail={hideEmail}
            onSubmit={onSubmit}
            trackClickEvent={trackClickEvent}
            LoginText={LoginText}
            otpValid={otpValid}
            setOtpValid={setOtpValid}
            blockScreenState={blockScreenState}
            locale={locale}
            onToggle={onToggle}
            resendingCode={resendingCode}
            handleClickResendCode={handleClickResendCode}
          />
        )}
      </form>

      <div className={styles.SwitchContainer}>
        <div className={styles.Switch}>
          <div className={styles.Horizontaldashedline}></div>
          <div className={styles.ordiv}>{translate("or")}</div>
          <div className={styles.Horizontaldashedline}></div>
        </div>

        {switchLogin === "login-with-password" && (
          <>
            <button
              id = "sign-in-with-onetime-passcode-button"
              className={styles.SwitchBtn}
              onClick={onToggle}
              data-navelement="Signin With OTP"
            >
              {translate("Sign_in_with_a_onetime_passcode")}
            </button>
            <div className={styles.otpinfo}>
              {translate("we_will_send_otp")}
            </div>
          </>
        )}
        {switchLogin === "login-with-otp" && (
          <button
            id= "sign-in-with-password-button"
            className={styles.SwitchBtn}
            onClick={onToggle}
            data-navelement="Signin With Password"
          >
            {translate("signIn_with_password")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
