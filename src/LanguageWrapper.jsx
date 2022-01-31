import React, { useContext } from "react";
import styles from "./app.module.css";
import LanguageProvider from "./localization/languageProvider";
import { Route, Switch, useLocation } from "react-router-dom";
import { ReactComponent as McAfeeLogo } from "./svg/Mcafee-Logo.svg";
import LoaderScreen from "./loader/LoaderScreen";
import MultiFactor from "./components/MultiFactor";

import Main from "./Main";

import Footer from "./components/Footer/Footer";
import ResetPassword from "./components/reset-password";
import AccountUnblock from "./components/account-unblock/index";
import { AccountProvider } from "./providers/AccountContext";
import { ResetPasswordProvider } from "./providers/ResetPasswordContext";
import { SettingContext } from "./providers/SettingProvider";
import translate from "./localization/translate";
import { useLocale } from "./utils/useLocale";

export default function LanguageWrapper(props) {
  const [appLocale] = useLocale();

  const { setting, localizedContent, fetchingError, isAffiliateLogo } =
    useContext(SettingContext);

  const withAccountProvider = (Component) => {
    return (
      <AccountProvider config={props.pageConfig} locale={appLocale}>
        {Component}
      </AccountProvider>
    );
  };

  if (!setting && !localizedContent && false) {
    return fetchingError ? (
      <LanguageProvider locale={appLocale}>
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
            </div>
            <div className={styles.genericErrorPage}>
              <div className={styles.errorDiv}>
                <>
                  <div className={styles.Intro}>
                    {translate("Something went wrong")}
                  </div>
                  <div className={styles.IntroSubHeading}>
                    {translate(
                      "We’re sorry about that, please try again later."
                    )}
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </LanguageProvider>
    ) : (
      <LoaderScreen text="" />
    );
  } else {
    return (
      <div>
        <LanguageProvider locale={appLocale}>
          <div className={styles.PageContainer}>
            <div className={styles.ContentWrap}>
              <div id="app">
                <Switch>
                  <Route path="/login" exact>
                    {withAccountProvider(<Main />)}
                  </Route>

                  <Route path="/lo/reset" exact>
                    <ResetPasswordProvider>
                      <ResetPassword />
                    </ResetPasswordProvider>
                  </Route>
                  <Route path="/unblock" exact>
                    <AccountUnblock />
                  </Route>
                  <Route path="/u/mfa-sms-enrollment" exact>
                    <MultiFactor />
                  </Route>
                </Switch>
              </div>
            </div>
            {window.location.pathname !== "/u/mfa-sms-enrollment" && (
              <Footer removePadding={false} />
            )}
          </div>
        </LanguageProvider>
      </div>
    );
  }
}
