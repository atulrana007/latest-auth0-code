import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./providers/AppContext";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
// import { CommonDataContext } from "./providers/CommonDataContext";
// import Cookies from "universal-cookie/es6";
import { SettingContext } from "./providers/SettingProvider";
import { CommonDataContext } from "./providers/CommonDataContext";
import LoaderScreen from "./loader/LoaderScreen";
// import { ReactComponent as McAfeeLogo } from "./svg/Mcafee-Logo.svg";
import ForgotPassword from "./components/forgot-password/index";
import translate from "./localization/translate";
import { ReactComponent as McAfeeLogo } from "./svg/Mcafee-Logo.svg";
import styles from "./app.module.css";

import {
  TealiumTagKeyConstants,
  TealiumTagValueConstans,
} from "./constants/TealiumConstants";
import { TrackingContext } from "./providers/TrackingProvider";

function Main() {
  const { whichPage, setWhichPage } = useContext(AppContext);
  const { setting, localizedContent, fetchingError } =
    useContext(SettingContext);
  const { utagData, setUtagData } = useContext(TrackingContext);
  const { isAffiliateLogo } = useContext(CommonDataContext);
  const { settingFinal } = useContext(SettingContext);
  console.log("what is this---------->", settingFinal);
  const [onPageLoad, setOnPageLoad] = useState(true);

  useEffect(() => {
    if (onPageLoad) {
      if (settingFinal) {
        const SettingUtagData = () => {
          console.log("how many times");
          let utag = window.utag;
          let updatedUtagData;
          updatedUtagData = {
            ...utagData,
            [TealiumTagKeyConstants.TEALIUM_GLOBAL_COUNTRY]:
              settingFinal?.country,
            [TealiumTagKeyConstants.TEALIUM_GLOBAL_GEO]: settingFinal?.geo,
            [TealiumTagKeyConstants.TEALIUM_PAGE_NAME]:
              TealiumTagValueConstans.BASE_PAGE_NAME +
              TealiumTagValueConstans.LOGIN_PAGE_NAME,
            [TealiumTagKeyConstants.TEALIUM_SITESECTION]:
              TealiumTagValueConstans.LOGIN_PAGE_NAME,
          };
          utag.view({
            ...updatedUtagData,
            [TealiumTagKeyConstants.TEALIUM_PAGE_PUBLISH_DATE]: new Date(),
          });
          setUtagData(updatedUtagData);
        };
        SettingUtagData();
        setOnPageLoad(false);
      }
    }
  }, [setUtagData, settingFinal, utagData, onPageLoad]);

  const returnPage = (whichPage) => {
    if (!setting && !localizedContent) {
      return fetchingError ? (
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
                    {translate("Something went wrong on our side...")}
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
      ) : (
        <LoaderScreen text="" />
      );
    } else {
      switch (whichPage) {
        case "signup-page":
          return <Signup setWhichPage={setWhichPage} />;
        case "login-page":
          return <Login setWhichPage={setWhichPage} />;
        case "forgotPassword-page":
          return <ForgotPassword setWhichPage={setWhichPage} />;
        default:
          return <Login setWhichPage={setWhichPage} />;
      }
    }
  };

  return <div>{returnPage(whichPage)}</div>;

  // return setting ? (
  // return (
  //   <div>
  //     {whichPage === "signup-page" ? (
  //       <Signup setWhichPage={setWhichPage} />
  //     ) : (
  //       <Login setWhichPage={setWhichPage} />
  //     )}
  //   </div>
  // );
  // ) : (
  //   <div className="loaderWrapper">
  //     <div className="loaderLogo">
  //       <McAfeeLogo className="Logo" />
  //     </div>
  //     <div className="loader-creating-your-account">
  //       <img
  //         alt="McAfeeLogo"
  //         className="loading-logo"
  //         src="https://cdn.jsdelivr.net/gh/atulrana007/McAfee-odrplat-auth0-ui/public/images/McAfee-Document-Logo1.png"
  //       />
  //       <CircularLoader />
  //     </div>
  //   </div>
  // );
}

export default Main;
