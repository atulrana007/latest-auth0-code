import React, { useContext } from "react";
import styles from "./Footer.module.css";
import translate from "../../localization/translate";
import { CommonDataContext } from "../../providers/CommonDataContext";
const Footer = (props) => {
  const { locale, affId } = useContext(CommonDataContext);
  const PRIVACY_NOTICE_LINK = affId
    ? `https://www.mcafee.com/legal?culture=${locale.toUpperCase()}&affid=${affId}#privacytop`
    : `https://www.mcafee.com/legal?culture=${locale.toUpperCase()}#privacytop`;
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterLeftWrapper}>
        <div className={styles.FooterLinkContainer}>
          <a
            target="_blank"
            href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
            style={{
              whiteSpace: "nowrap",
              textDecoration: "none",
              color: "#4258ff",
            }}
            data-nav-element-click="Contact Us"
          >
            {translate("contactUs")}
          </a>
        </div>
        <div className={styles.FooterLinkContainer}>
          {" "}
          <a
            target="_blank"
            href={PRIVACY_NOTICE_LINK}
            style={{
              whiteSpace: "nowrap",
              textDecoration: "none",
              color: "#4258ff",
            }}
            data-nav-element-click="Privacy Notice"
          >
            {" "}
            {translate("privacyNotice")}
          </a>
        </div>
        <div className={styles.FooterLinkContainer}>
          <a
            target="_blank"
            href={`https://home.mcafee.com/support/commonFAQ?culture=${locale.toUpperCase()}`}
            style={{
              whiteSpace: "nowrap",
              textDecoration: "none",
              color: "#4258ff",
            }}
            data-nav-element-click="FAQ Link"
          >
            {translate("FAQs")}{" "}
          </a>
        </div>
      </div>
      <div className={styles.FooterRightWrapper}>
        <div>{translate("Copyright_Text")}</div>
      </div>
    </div>
  );
};
export default Footer;
