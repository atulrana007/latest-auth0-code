import React from "react";

// import { LOCALES } from "./localization/constants";
import { CommonDataProvider } from "./providers/CommonDataContext";

import { AppProvider } from "./providers/AppContext";
import { SettingProvider } from "./providers/SettingProvider";
import { TrackingProvider } from "./providers/TrackingProvider";

import { useEmail } from "./utils/useEmail";
import { useLocale } from "./utils/useLocale";
import { useAffId } from "./utils/useAffId";
import LanguageWrapper from "./LanguageWrapper";

const App = ({ pageConfig, passwordResetConfig }) => {
  const [emailFill] = useEmail();
  const [appLocale] = useLocale();
  const [affId] = useAffId();

  return (
    <TrackingProvider config={pageConfig} affiliateId={affId}>
      <SettingProvider locale={appLocale} affiliateId={affId}>
        <CommonDataProvider
          config={pageConfig}
          passwordResetConfig={passwordResetConfig}
          email={emailFill}
          locale={appLocale}
          affiliateId={affId}
        >
          <AppProvider>
            <LanguageWrapper pageConfig={pageConfig} />
          </AppProvider>
        </CommonDataProvider>
      </SettingProvider>
    </TrackingProvider>
  );
};

export default App;
