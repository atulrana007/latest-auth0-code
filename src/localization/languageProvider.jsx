import React, { Fragment, useContext } from "react";
import { IntlProvider } from "react-intl";
import { SettingContext } from "../providers/SettingProvider";

import messages from "./messages";

const LanguageProvider = ({ children, locale }) => {
  const { localizedContent } = useContext(SettingContext);
  console.log("localized content", localizedContent);

  return localizedContent ? (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={localizedContent}
      // messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  ) : null;
};
export default LanguageProvider;
