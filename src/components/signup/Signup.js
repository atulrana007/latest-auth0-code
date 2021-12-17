import React, { useState, useContext } from "react";
import styles from "./style.module.css";
import { ReactComponent as OutlineMail } from "../../svg/mailIcon.svg";
import { ReactComponent as LockOutline } from "../../svg/lockIcon.svg";
import { ReactComponent as FillEye } from "../../svg/eyeIcon.svg";
import { ReactComponent as PasswordTick } from "../../svg/passwordPolicyTick.svg";
import { ReactComponent as PasswordCross } from "../../svg/passwordPolicyCross.svg";
import { DisplayRules } from "../../utils/displayRules";
import { ReactComponent as TickIcon } from "../../svg/tickIcon.svg";
import translate from "../../localization/translate";
import { FormattedMessage } from "react-intl";
import { CommonDataContext } from "../../providers/CommonDataContext";
import { validate } from "password-sheriff/lib/rules/length";

const Signup = (props) => {
  const {
    onSubmit,
    SignupForm,
    onChange,
    passwordRules,
    PasswordPolicyState,
    onClick,
    isValid,
    SignupError,
    handleForgotPasswordClick,
    handleOptinsCheckBoxes,
    optinFields,
    validateEmail,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [displayRules, setDisplayRules] = useState(false);
  const { locale, affId } = useContext(CommonDataContext);
  const PRIVACY_NOTICE_LINK = affId
    ? `https://www.mcafee.com/legal?culture=${locale.toUpperCase()}&affid=${affId}#privacytop`
    : `https://www.mcafee.com/legal?culture=${locale.toUpperCase()}#privacytop`;

  const { getKeys, displayableRule } = DisplayRules(
    passwordRules,
    PasswordPolicyState
  );

  const values = {
    a_contact_support: (chunks) => (
      <a
        style={{ color: "rgb(66, 88, 255)" }}
        className={styles.external_link}
        target="_blank"
        href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
      >
        {chunks}
      </a>
    ),
    a_McAfee_License: (chunks) => (
      <a
        style={{ color: "rgb(66, 88, 255)" }}
        className={styles.external_link}
        target="_blank"
        href={`https://www.mcafee.com/legal?culture=${locale.toUpperCase()}#eula`}
      >
        {chunks}
      </a>
    ),
    a_reset_pass: (chunks) => (
      <button
        id="signup-page-forgot-password-button"
        type="button"
        className={styles.forgotPassword}
        onClick={handleForgotPasswordClick}
        data-navelement="Forgot Password"
      >
        {chunks}
      </button>
    ),
    a_privacy_notice: (chunks) => (
      <a
        style={{ color: "rgb(66, 88, 255)" }}
        className={styles.external_link}
        target="_blank"
        href={PRIVACY_NOTICE_LINK}
      >
        {chunks}
      </a>
    ),
  };
  console.log("block", optinFields);
  return (
    <div className={styles.formWrapper}>
      <form className={styles.InputWrapper}>
        <>
          {SignupForm.email !== "" ? (
            <div
              className={styles.InputLabel}
              style={{
                color: `${
                  SignupError.isEmailError ? "red" : "rgb(175, 174, 174)"
                }`,
              }}
            >
              {translate("email")}
            </div>
          ) : null}
          <div
            className={styles.InputAndLogoSignup}
            style={{
              border: `1px solid ${
                SignupError.isEmailError ? "red" : "RGB(212, 213, 219)"
              }`,
            }}
          >
            <OutlineMail className={styles.emailSVG} />
            <FormattedMessage id="email">
              {(msg) => (
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={SignupForm.email}
                  placeholder={msg}
                  className={styles.Input}
                  onChange={onChange}
                />
              )}
            </FormattedMessage>
          </div>
          {SignupError.email && (
            <div className={styles.Error}>{translate(SignupError.email)}</div>
          )}
          <div>
            {SignupForm.password !== "" ? (
              <div
                className={styles.InputLabelPass}
                style={{
                  color: isValid ? "#0CA77D" : "rgb(175, 174, 174)",
                }}
              >
                {translate("password")}
              </div>
            ) : null}
            <div
              className={styles.InputAndLogoSignup}
              // style={{
              //   border:
              //     LoginError?.isEmailError === true
              //       ? "2px solid red"
              //       : LoginError?.isEmailError === false
              //       ? "2px solid green"
              //       : "",
              // }}
              style={{
                border: `1px solid ${
                  isValid ? "#0CA77D" : "RGB(212, 213, 219)"
                }`,
              }}
            >
              <LockOutline className={styles.lockSVG} />
              <FormattedMessage id="password">
                {(msg) => (
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={SignupForm.password}
                    placeholder={msg}
                    className={styles.Input}
                    onChange={onChange}
                    onFocus={() => {
                      onClick();
                      setDisplayRules(true);
                    }}
                    onBlur={() => setDisplayRules(false)}
                  />
                )}
              </FormattedMessage>
              <FillEye
                style={{
                  marginTop: "0.3rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true);
                }}
                data-nav-element-click="show-password"
              />
              {isValid ? (
                <TickIcon
                  style={{
                    marginTop: "0.5rem",
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className={styles.Passwordrulescontainer}>
            {displayRules ? (
              <>
                <div className={styles.Passwordrules}>
                  {displayableRule.map((item, index) => {
                    return (
                      <div className={styles.Rule} key={index}>
                        {" "}
                        <div className={styles.checkbox}>
                          {PasswordPolicyState[getKeys[index]] ? (
                            <PasswordTick className={styles.tick} />
                          ) : (
                            <PasswordCross className={styles.cancel} />
                          )}
                        </div>
                        <div className={styles.Ruletext}>
                          {translate(item, "", {
                            leastcount:
                              passwordRules?.password_complexity_options
                                ?.min_length,
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
          <div>
            {SignupForm.confirmPassword !== "" ? (
              <div
                className={styles.InputLabelCPass}
                style={{
                  color:
                    SignupForm.password === SignupForm.confirmPassword &&
                    SignupForm.confirmPassword !== ""
                      ? "#0CA77D"
                      : "rgb(175, 174, 174)",
                }}
              >
                {translate("confirm_password")}
              </div>
            ) : null}
            <div
              className={styles.InputAndLogoSignup}
              // style={{
              //   border:
              //     LoginError?.isEmailError === true
              //       ? "2px solid red"
              //       : LoginError?.isEmailError === false
              //       ? "2px solid green"
              //       : "",
              // }}
              style={{
                border: `1px solid ${
                  SignupForm.password === SignupForm.confirmPassword &&
                  SignupForm.confirmPassword !== ""
                    ? "#0CA77D"
                    : "RGB(212, 213, 219)"
                }`,
              }}
            >
              <LockOutline className={styles.lockSVG} />
              <FormattedMessage id="confirm_password">
                {(msg) => (
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={SignupForm.confirmPassword}
                    placeholder={msg}
                    className={styles.Input}
                    onChange={onChange}
                    onBlur={() => setDisplayRules(false)}
                  />
                )}
              </FormattedMessage>
              <FillEye
                style={{
                  cursor: "pointer",
                  marginTop: "0.3rem",
                }}
                onClick={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true);
                }}
                data-nav-element-click="show-password"
              />
              {SignupForm.password === SignupForm.confirmPassword &&
              SignupForm.confirmPassword !== "" ? (
                <TickIcon />
              ) : null}
            </div>
          </div>
          {optinFields && (
            <div className={styles.optinFieldsWrapper}>
              {optinFields.VirusThreats &&
                optinFields.VirusThreats.display === "true" && (
                  <div className={styles.optinField}>
                    <input
                      className={styles.optinFieldInput}
                      type="checkbox"
                      id="VirusThreats"
                      name="VirusThreats"
                      value="VirusThreats"
                      onChange={(e) => {
                        handleOptinsCheckBoxes(e.target.name);
                      }}
                      checked={
                        optinFields.VirusThreats.checked === "true"
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="VirusThreats">
                      {translate("optin_VirusThreats")}
                    </label>
                  </div>
                )}
              {optinFields.SpecialPromo &&
                optinFields.SpecialPromo.display === "true" && (
                  <div className={styles.optinField}>
                    <input
                      className={styles.optinFieldInput}
                      type="checkbox"
                      id="SpecialPromo"
                      name="SpecialPromo"
                      value="SpecialPromo"
                      onChange={(e) => {
                        handleOptinsCheckBoxes(e.target.name);
                      }}
                      checked={
                        optinFields.SpecialPromo.checked === "true"
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="SpecialPromo">
                      {translate("optin_SpecialPromo")}
                    </label>
                  </div>
                )}
              {optinFields.PartnerPromo &&
                optinFields.PartnerPromo.display === "true" && (
                  <div className={styles.optinField}>
                    <input
                      className={styles.optinFieldInput}
                      type="checkbox"
                      id="PartnerPromo"
                      name="PartnerPromo"
                      value="PartnerPromo"
                      onChange={(e) => {
                        handleOptinsCheckBoxes(e.target.name);
                      }}
                      checked={
                        optinFields.PartnerPromo.checked === "true"
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="PartnerPromo">
                      {translate("optin_PartnerPromo")}
                    </label>
                  </div>
                )}
            </div>
          )}

          <div className={styles.PolicyLink}>
            <FormattedMessage
              id="By_clicking_Create_my_Account_you_accept_McAfee_License_Agreement_and_Privacy_Notice"
              defaultMessage="By clicking <b>Create my account</b> you accept <a_McAfee_License>McAfee’s License Agreement</a_McAfee_License> and <a_privacy_notice>Privacy Notice</a_privacy_notice>"
              values={{
                ...values,

                b: (chunks) => <strong>{chunks}</strong>,
              }}
            >
              {(chunks) => <p>{chunks}</p>}
            </FormattedMessage>
          </div>
          <button
            id="create-my-account-button"
            className={
              SignupForm.email !== "" &&
              validateEmail(SignupForm.email) &&
              SignupForm.password !== "" &&
              SignupForm.confirmPassword !== "" &&
              SignupForm.password === SignupForm.confirmPassword &&
              isValid &&
              !SignupForm.isSubmitting
                ? styles.SubmitButtonActive
                : styles.SubmitButton
            }
            onClick={onSubmit}
            data-nav-element-click="Create My Account | Submit"
          >
            {translate("Create_my_Account")}
          </button>
        </>
      </form>
    </div>
  );
};

export default Signup;
