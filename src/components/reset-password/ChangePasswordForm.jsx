import React, { useState } from "react";
import { DisplayRules } from "../../utils/displayRules";
import { ReactComponent as LockOutline } from "../../svg/lockIcon.svg";
import { ReactComponent as FillEye } from "../../svg/eyeIcon.svg";
import { ReactComponent as PasswordTick } from "../../svg/passwordPolicyTick.svg";
import { ReactComponent as PasswordCross } from "../../svg/passwordPolicyCross.svg";
import { ReactComponent as TickIcon } from "../../svg/tickIcon.svg";
import translate from "../../localization/translate";
import { FormattedMessage } from "react-intl";
import styles from "./style.module.css";

function ChangePasswordForm(props) {
  const {
    onChange,
    ResetPasswordForm,
    onClick,
    isValid,
    ResetPasswordError,
    handleResetPassword,
    passwordRules,
    PasswordPolicyState,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [displayRules, setDisplayRules] = useState(false);

  const { getKeys, displayableRule } = DisplayRules(
    passwordRules,
    PasswordPolicyState
  );
  return (
    <div className={styles.ForgotPasswordRightWrapper}>
      <div className={styles.flexGrow}>
        <form className={styles.InputWrapper} style={{ height: "100%" }}>
          <>
            <div>
              {ResetPasswordForm.password !== "" ? (
                <div
                  className={styles.ResetPasswordHeader}
                  style={{
                    color: isValid ? "#0CA77D" : "rgb(175, 174, 174)",
                  }}
                >
                  {translate("password")}
                </div>
              ) : null}
              <div
                className={styles.ResetPasswordBtnWrapper}
                style={{
                  border: `1px solid ${
                    isValid ? "#0CA77D" : "RGB(212, 213, 219)"
                  }`,
                  marginBottom: `${displayRules ? "0rem" : "1.25rem"}`,
                }}
              >
                <LockOutline
                  style={{
                    height: "1.4rem",
                    width: "1.4rem",
                    color: "rgb(175, 174, 174)",
                  }}
                />
                <FormattedMessage id="password">
                  {(msg) => (
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={ResetPasswordForm.password}
                      placeholder={msg}
                      className={styles.ResetPasswordInput}
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
                    height: "1.5rem",
                    width: "1.5rem",
                    cursor: "pointer",
                    padding: "1px",
                  }}
                  onClick={() => {
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true);
                  }}
                  data-nav-element-click="show-password"
                />
                {isValid && (
                  <TickIcon
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      padding: "1px",
                      // marginTop: "0.5rem",
                    }}
                  />
                )}
              </div>
            </div>

            {displayRules && (
              <div
                className={styles.Passwordrulescontainer}
                style={{ marginBottom: "1.5rem" }}
              >
                <div className={styles.Passwordrules}>
                  {displayableRule.map((item, index) => {
                    return (
                      <div className={styles.Rule} key={index}>
                        <div className={styles.checkbox}>
                          {PasswordPolicyState[getKeys[index]] ? (
                            <PasswordTick className={styles.tick} />
                          ) : (
                            <PasswordCross className={styles.cancel} />
                          )}
                        </div>
                        <div className={styles.Ruletext}>
                          {translate(item, "", {
                            leastcount: 8,
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div>
              {ResetPasswordForm.confirmPassword !== "" ? (
                <div
                  className={styles.ResetPasswordHeader}
                  style={{
                    color:
                      ResetPasswordForm.password ===
                        ResetPasswordForm.confirmPassword &&
                      ResetPasswordForm.confirmPassword !== ""
                        ? "#0CA77D"
                        : "rgb(175, 174, 174)",
                  }}
                >
                  {translate("confirm_password")}
                </div>
              ) : null}
              <div
                className={styles.ResetPasswordBtnWrapper}
                style={{
                  border: `1px solid ${
                    ResetPasswordForm.password ===
                      ResetPasswordForm.confirmPassword &&
                    ResetPasswordForm.confirmPassword !== ""
                      ? "#0CA77D"
                      : "RGB(212, 213, 219)"
                  }`,
                }}
              >
                <LockOutline
                  style={{
                    height: "1.4rem",
                    width: "1.4rem",
                    // marginTop: "0.5rem",
                    color: "rgb(175, 174, 174)",
                  }}
                />
                <FormattedMessage id="confirm_password">
                  {(msg) => (
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={ResetPasswordForm.confirmPassword}
                      placeholder={msg}
                      className={styles.ResetPasswordInput}
                      onChange={onChange}
                      onBlur={() => setDisplayRules(false)}
                    />
                  )}
                </FormattedMessage>
                <FillEye
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    padding: "1px",
                    // marginTop: "0.7rem",
                    color: "rgb(175, 174, 174)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true);
                  }}
                  data-nav-element-click="show-password"
                />
                {ResetPasswordForm.password ===
                  ResetPasswordForm.confirmPassword &&
                ResetPasswordForm.confirmPassword !== "" ? (
                  <TickIcon
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      padding: "1px",
                      // marginTop: "0.5rem",
                    }}
                  />
                ) : null}
              </div>
            </div>
            {ResetPasswordError.errorCode && (
              <div id="reset-password-error-id" className={styles.Error}>
                {translate(ResetPasswordError.errorCode)}
              </div>
            )}
            <div className={styles.forgotPasswordDropDownContainer}>
              <button
                id="reset-password-button"
                className={
                  ResetPasswordForm.password !== "" &&
                  ResetPasswordForm.confirmPassword !== "" &&
                  ResetPasswordForm.password ===
                    ResetPasswordForm.confirmPassword &&
                  isValid &&
                  !ResetPasswordForm.isSubmitting
                    ? styles.emailMeBtn
                    : styles.emailMeBtnDisabled
                }
                onClick={handleResetPassword}
                disabled={ResetPasswordForm.isSubmitting}
                data-navelement="reset-password-redirect"
              >
                {translate("Reset_Password")}
              </button>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
