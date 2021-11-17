import React, { useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Authorize from "./components/Authorize";

import Main from "./Main";

import Footer from "./components/Footer/Footer";
import ResetPassword from "./components/reset-password";

import { AccountProvider } from "./providers/AccountContext";
import LanguageProvider from "./localization/languageProvider";
import { LOCALES } from "./localization/constants";
import { CommonDataProvider } from "./providers/CommonDataContext";

import styles from "./app.module.css";
import { AppProvider } from "./providers/AppContext";
import { SettingProvider } from "./providers/SettingProvider";
import { TrackingProvider } from "./providers/TrackingProvider";
import { ResetPasswordProvider } from "./providers/ResetPasswordContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import history from "./history";
import { getConfig } from "./config";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = ({ pageConfig, passwordResetConfig }) => {
  const parsedHash = new URLSearchParams(window.location.hash.substr(1));

  let query = useQuery();
  let locale = useRef("");
  let email = useRef("");
  email.current = query.get("email") ?? "";
  let lang;
  let culture = query.get("culture") ?? parsedHash.get("culture");

  if (culture === null) {
    if (localStorage.getItem("lang") === null) {
      lang = "en-us";
    } else {
      lang = localStorage.getItem("lang");
    }
  } else {
    lang = culture;
    localStorage.setItem("lang", lang);
  }

  if (lang === "en-us") {
    locale.current = LOCALES.ENGLISH;
  } else if (lang === "fr-ca") {
    locale.current = LOCALES.FRENCH;
  } else {
    locale.current = "en-us";
  }

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const attachAccountProvider = (Component) => {
    return <AccountProvider config={pageConfig}>{Component}</AccountProvider>;
  };

  return (
    <TrackingProvider config={pageConfig}>
      <SettingProvider locale={locale.current}>
        <CommonDataProvider
          config={pageConfig}
          passwordResetConfig={passwordResetConfig}
          email={email.current}
        >
          <AppProvider>
            <LanguageProvider locale={locale.current}>
              <div className={styles.PageContainer}>
                <div className={styles.ContentWrap}>
                  <div id="app">
                    <Switch>
                      <Route path="/" exact>
                        <div>Error User is not present in the database</div>
                        <button onClick={() => loginWithRedirect({})}>
                          go back to login
                        </button>
                      </Route>
                      <Route path="/login" exact>
                        {attachAccountProvider(<Main />)}
                      </Route>
                      <Route exact path="/authorize">
                        {attachAccountProvider(
                          <Authorize config={pageConfig} />
                        )}
                        <Authorize config={pageConfig} />
                      </Route>
                      <Route path="/lo/reset" exact>
                        <ResetPasswordProvider>
                          <ResetPassword />
                        </ResetPasswordProvider>
                      </Route>
                    </Switch>
                  </div>
                </div>
                <Footer />
              </div>
            </LanguageProvider>
          </AppProvider>
        </CommonDataProvider>
      </SettingProvider>
    </TrackingProvider>
  );
};

export default App;
