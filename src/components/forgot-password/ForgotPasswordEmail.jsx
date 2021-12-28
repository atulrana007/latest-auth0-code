import React, { useContext } from "react";
import translate from "../../localization/translate";
import { FormattedMessage } from "react-intl";
import { CommonDataContext } from "../../providers/CommonDataContext";
import { ReactComponent as McAfeeLogoForAffiliate } from "../../svg/Mcafee-Logo-For-Affiliate.svg";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";
import styles from "./style.module.css";

function ForgotPasswordEmail(props) {
  const { backToSignIn, updateEmailDetails, emailDetails } = props;
  const { locale } = useContext(CommonDataContext);
  const { isAffiliateLogo } = useContext(CommonDataContext);
  const FORMATVALUES = {
    a_contact_support: (chunks) => (
      <a
        className={styles.contactSupportBtn}
        target="_blank"
        href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
      >
        {chunks}
      </a>
    ),
    a_request_another_mail: (chunks) => (
      <strong
        className={styles.contactSupportBtn}
        onClick={() => {
          updateEmailDetails({ ...emailDetails, emailSent: false });
        }}
      >
        {chunks}
      </strong>
    ),
  };
  return (
    <div className={styles.ForgotPasswordContainer}>
      <div className="ForgotPasswordLeftWrapper flexGrow limitWidth">
        <div
          className={styles.ForgotPasswordLeftContainer}
          style={{ height: "100%" }}
        >
          <div>
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
          </div>
          <div className={styles.ForgotPasswordIntro}>
            {translate("Check_inbox")}
          </div>
          <div className={styles.ForgotPasswordIntroSubHeading}>
            {translate("Password_reset_link_sent")}
          </div>
          <div className={styles.forgotPasswordDropDownContainer}>
            <button
              id="back-to-sign-in-button"
              className={styles.emailMeBtn}
              style={{ width: "100%", maxWidth: "350px" }}
              onClick={backToSignIn}
              data-navelement="Signin With Password"
            >
              <div>{translate("Back_to_signin")}</div>
            </button>
            <div className={styles.contactSupportWrapper}>
              <FormattedMessage
                id="Did_not_receive_reset_password_link_request_another_email_forgot_email_need_help_contact_support"
                defaultMessage={
                  "If you didn't receive a link, check your spam folder or <a_request_another_mail>request another email</a_request_another_mail>. Forgot which email you used or need help? <a_contact_support>Contact Support</a_contact_support>"
                }
                values={{
                  ...FORMATVALUES,
                  a: (chunks) => (
                    <a
                      className="contactSupportBtn"
                      target="_blank"
                      href="https://www.example.com/shoe"
                      data-nav-element-click="contact-us"
                    >
                      {chunks}
                    </a>
                  ),
                }}
              >
                {(chunks) => (
                  <p className={styles.contactSupportText}>{chunks}</p>
                )}
              </FormattedMessage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;
