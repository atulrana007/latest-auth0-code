import React, { useContext, useState } from "react";
import translate from "../../localization/translate";
import { FormattedMessage } from "react-intl";
import styles from "./style.module.css";
import { CommonDataContext } from "../../providers/CommonDataContext";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";

function AccountUnblockUI(props) {
  const { message, success, handleEmailMe, error, domain, clientId } = props;
  const { locale } = useContext(CommonDataContext);
  const { isAffiliateLogo } = useContext(CommonDataContext);
  console.log(message, success);
  const [isGeneric, setIsGeneric] = useState(false);
  const LeftContainer = () => {
    if (domain.current && clientId.current) {
      if (success.current === "true") {
        return (
          <div styles={styles.successful}>
            <div className={styles.Intro}>
              {translate("Your_account_unlocked")}
            </div>
            <div className={styles.IntroSubHeading}>
              {translate("Signin_to_start_using_protection")}
            </div>
          </div>
        );
      } else if (
        (error.current &&
          error.current !== "This URL can be used only once" &&
          error.current !== "Access expired") ||
        (message.current &&
          message.current !== "This URL can be used only once" &&
          message.current !== "Access expired")
      ) {
        setIsGeneric(true);
      } else {
        let mainDiv;
        if (
          error.current &&
          (error.current === "This URL can be used only once" ||
            error.current === "Access expired")
        ) {
          mainDiv =
            error.current === "This URL can be used only once"
              ? translate("Link_already_used")
              : translate("Link_Expired");
        }
        if (
          message.current &&
          (message.current === "This URL can be used only once" ||
            message.current === "Access expired")
        ) {
          mainDiv =
            message.current === "This URL can be used only once"
              ? translate("Link_already_used")
              : translate("Link_Expired");
        }
        return (
          <div styles={styles.failure}>
            <div className={styles.Intro}>{mainDiv}</div>
            <div className={styles.IntroSubHeading}>
              <FormattedMessage
                id="Reset_password_to_unlock_account"
                defaultMessage={
                  "Reset your password or <a_contact_support>Contact Support</a_contact_support> to unlock your account."
                }
                values={{
                  a_contact_support: (chunks) => (
                    <a
                      className={styles.contactSupportBtn}
                      target="_blank"
                      href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
                    >
                      {chunks}
                    </a>
                  ),
                }}
              >
                {(chunks) => <p>{chunks}</p>}
              </FormattedMessage>
            </div>
            <div className={styles.accountUnblockDropDownContainer}>
              <button
                id="account-unblock-email-me-button"
                className={styles.emailMeBtn}
                style={{ width: "100%", maxWidth: "350px" }}
                onClick={handleEmailMe}
                data-navelement="Signin-With-password"
              >
                <div>{translate("Reset_Password")}</div>
              </button>
            </div>
          </div>
        );
      }
    }
  };
  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.LeftContainer} style={{ height: "100%" }}>
          <div>
            {isAffiliateLogo ? (
              <div class="container-header">
                <span class="container-logo">
                  <img
                    alt="McAfee"
                    title="McAfee"
                    src="https://cdn.jsdelivr.net/gh/atulrana007/McAfee-odrplat-auth0-ui/public/images/McAfee-Document-Logo1.png"
                    class="logo"
                  />
                </span>
                <span class="container-logo aff-logo-container">
                  <span class="logo-seperator">| </span>
                  <img
                    alt="McAfee"
                    title="Dell"
                    src="https://secureimages.mcafee.com/common/affiliateImages/dell/logo_dell_new_58x59.gif"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
            ) : (
              <McAfeeLogo />
            )}
          </div>
          {isGeneric ? null : LeftContainer()}
        </div>
        <div
          className={isGeneric ? styles.genericErrorPage : styles.linkErrorPage}
        >
          <div className={styles.errorDiv}>
            {isGeneric ? (
              <>
                <div className={styles.Intro}>
                  {translate("Something went wrong")}
                </div>
                <div className={styles.IntroSubHeading}>
                  {translate(error.current || message.current)}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountUnblockUI;
