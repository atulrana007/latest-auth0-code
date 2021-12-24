import React, { useContext } from "react";
import translate from "../../localization/translate";
import { AiOutlineMail } from "react-icons/ai";
import ForgotPasswordEmail from "./ForgotPasswordEmail";
import { FormattedMessage } from "react-intl";
import { CommonDataContext } from "../../providers/CommonDataContext";
import { ReactComponent as McAfeeLogoForAffiliate } from "../../svg/Mcafee-Logo-For-Affiliate.svg";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";
import styles from "./style.module.css";

function ForgotPasswordUI(props) {
  const {
    emailDetails,
    handleEmailChange,
    handleEmailMe,
    backToSignIn,
    validateEmail,
    updateEmailDetails,
    isSending,
  } = props;
  const { locale } = useContext(CommonDataContext);
  const { isAffiliateLogo } = useContext(CommonDataContext);
  const FORMATVALUES = {
    a_contact_support: (chunks) => (
      <a
        target="_blank"
        style={{ color: "rgb(66, 88, 255)" }}
        href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
        data-nav-element-click="contact-support"
      >
        {chunks}
      </a>
    ),
  };
  return (
    <>
      {emailDetails.emailSent ? (
        <ForgotPasswordEmail
          backToSignIn={backToSignIn}
          updateEmailDetails={updateEmailDetails}
          emailDetails={emailDetails}
        />
      ) : (
        <div className={styles.ForgotPasswordContainer}>
          <div className={styles.ForgotPasswordLeftWrapper}>
            <div className={styles.ForgotPasswordLeftContainer}>
              {isAffiliateLogo ? (
                <div className="container-header">
                  <McAfeeLogoForAffiliate />

                  <span
                    id="n_AffiliateLogo"
                    className="container-logo aff-logo-container"
                  >
                    <span className="logo-seperator">| </span>

                    <img
                      alt="McAfee"
                      title="Dell"
                      src="https://secureimages.mcafee.com/common/affiliateImages/dell/logo_dell_new_58x59.gif"
                      width="30"
                      height="30"
                    />
                  </span>
                </div>
              ) : (
                <McAfeeLogo />
              )}
              <div className={styles.ForgotPasswordIntro}>
                {translate("Reset_Password")}
              </div>
              <div className={styles.ForgotPasswordIntroSubHeading}>
                {translate("Enter_email_to_reset_password")}
              </div>
              {emailDetails.databaseError && (
                <div id="forgot-password-error-id" className={styles.ErrorDiv}>
                  <p>
                    <FormattedMessage
                      id={emailDetails.databaseError}
                      defaultMessage="We're sorry, something went wrong."
                    ></FormattedMessage>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.ForgotPasswordRightWrapper}>
            <div className={styles.ForgotPasswordEmailInputContainer}>
              {emailDetails.email !== "" ? (
                <div
                  className={styles.ForgotPasswordInputLabel}
                  style={{
                    color: validateEmail(emailDetails.email)
                      ? "#0CA77D"
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
                    emailDetails.emailError !== ""
                      ? "1px solid red"
                      : emailDetails.email === ""
                      ? "1px solid #848faa"
                      : " 1px solid #0CA77D",
                  backgroundColor: "#ffff",
                  borderRadius: "12px",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <AiOutlineMail className={styles.ForgotPasswordEmailLogo} />
                <FormattedMessage id="email">
                  {(msg) => (
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={emailDetails.email}
                      placeholder={msg}
                      className={styles.ForgotPasswordEmailInput}
                      onChange={handleEmailChange}
                    />
                  )}
                </FormattedMessage>
              </div>
            </div>
            {emailDetails.emailError !== "" && (
              <div
                id="forgot-password-invalid-email-error"
                className={styles.Error}
              >
                {translate(emailDetails.emailError)}
              </div>
            )}
            <div className={styles.forgotPasswordDropDownContainer}>
              <div className={styles.emailMeBtnWrapper}>
                <button
                  id="forgot-password-email-me-button"
                  onClick={handleEmailMe}
                  className={
                    emailDetails.emailError !== "" || emailDetails.email === ""
                      ? styles.emailMeBtnDisabled
                      : styles.emailMeBtn
                  }
                  disabled={
                    emailDetails.emailError !== "" || emailDetails.email === ""
                  }
                  data-nav-element-click="Sending-email-for-reset-password-submit-button"
                >
                  {translate("Email_me")}
                </button>
              </div>
              <div className={styles.contactSupportWrapper}>
                <FormattedMessage
                  id="Forgot_your_password_contact_support"
                  defaultMessage={translate(
                    "Forgot_your_password_contact_support"
                  )}
                  values={{
                    ...FORMATVALUES,
                  }}
                >
                  {(chunks) => (
                    <p className={styles.contactSupportText}>{chunks}</p>
                  )}
                </FormattedMessage>
              </div>
              <hr className={styles.dottedLine} />
              <div className={styles.signInBtnWrapper}>
                <button
                  id="forgot-password-back-to-signin-button"
                  className={
                    isSending ? styles.signInBtnDisabled : styles.signInBtn
                  }
                  onClick={backToSignIn}
                  data-navelement="Signin-page-redirect-from-forgotpassword"
                  disabled={isSending}
                >
                  {translate("Go_back_to_signin")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPasswordUI;
