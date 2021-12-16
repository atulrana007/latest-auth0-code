import React, { useState, useEffect } from "react";
import axios from "axios";

// import settings from "../localization/settings";
const SettingContext = React.createContext({});

const SettingProvider = (props) => {
  const [setting, setSetting] = useState(null);
  const [settingFinal, setFinalSetting] = useState(null);
  const [localizedContent, setLocalizedContent] = useState(null);
  const [fetchingError, setFetchingError] = useState(false);

  const ExtractingLocalizedContent = (jsonData) => {
    const errorMessage = {
      ...jsonData.error.login,
      ...jsonData.error.passwordless,
      ...jsonData.error.forgotPassword,
      ...jsonData.error.signUp,
    };

    const Messages = Object.keys(jsonData)
      .filter((key) => key !== "error")
      .reduce((obj, key) => {
        obj[key] = jsonData[key];
        return obj;
      }, {});
    // console.log("finalMessage", { ...errorMessage, ...Messages });
    return {
      ...errorMessage,
      ...Messages,
    };
  };

  useEffect(() => {
    const getSettings = async () => {
      const localeForMessageLink =
        props?.locale.slice(0, -2) +
        props?.locale[props?.locale.length - 2].toUpperCase() +
        props?.locale[props?.locale.length - 1].toUpperCase();
      try {
        const settingResponse = await axios.get(
          `https://d1aza67fhfglew.cloudfront.net/settings/${localeForMessageLink}.json`
        );
        console.log("setting", settingResponse);
        // const settingResponse = { data: settings[props.locale] };
        setFinalSetting(settingResponse.data);
        if (
          settingResponse.data?.affiliates &&
          typeof settingResponse.data.affiliates === "object"
        ) {
          setSetting(settingResponse.data.affiliates[props.affiliateId]);
          console.log(
            "getting something",
            settingResponse.data.affiliates[props.affiliateId]
          );
        }
        const localizedFileResponse = await axios.get(
          `https://d1aza67fhfglew.cloudfront.net/content/${localeForMessageLink}/messages.json`
        );
        console.log(
          "got something in localization link",
          localizedFileResponse
        );
        setLocalizedContent(
          ExtractingLocalizedContent(localizedFileResponse.data)
        );
        setFetchingError(false);
      } catch (err) {
        setFetchingError(true);
        console.log(err);
      }
    };
    getSettings();
  }, [props.affiliateId, props.locale]);

  return (
    <SettingContext.Provider
      value={{ setting, localizedContent, settingFinal, fetchingError }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export { SettingProvider, SettingContext };
