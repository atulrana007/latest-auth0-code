import React, { useEffect, useState, useContext } from "react";
import styles from "./style.module.css";
import { SettingContext } from "../../providers/SettingProvider";
import { TrackingContext } from "../../providers/TrackingProvider";
import {
  TealiumTagValueConstans,
  TealiumTagKeyConstants,
} from "../../constants/TealiumConstants";

export default function SessionLogout(props) {
  //   const { utagData, setUtagData } = useContext(TrackingContext);
  //   const { settingFinal } = useContext(SettingContext);
  //   const [onPageLoad, setOnPageLoad] = useState(true);
  //   const { appNameState } = props?.config?.name || "";
  //   useEffect(() => {
  //     if (onPageLoad) {
  //       if (settingFinal) {
  //         const SettingUtagData = () => {
  //           let utag = window.utag;
  //           let updatedUtagData;
  //           updatedUtagData = {
  //             ...utagData,
  //             [TealiumTagKeyConstants.TEALIUM_GLOBAL_COUNTRY]:
  //               settingFinal?.country,
  //             [TealiumTagKeyConstants.TEALIUM_GLOBAL_GEO]: settingFinal?.geo,
  //             [TealiumTagKeyConstants.TEALIUM_PAGE_NAME]:
  //               TealiumTagValueConstans.BASE_PAGE_NAME +
  //               TealiumTagValueConstans.RESET_PAGE_NAME,
  //             [TealiumTagKeyConstants.TEALIUM_SITESECTION]:
  //               TealiumTagValueConstans.RESET_PAGE_NAME,
  //             [TealiumTagKeyConstants.TEALIUM_CLIENT_ID]: appNameState,
  //           };
  //           utag.view({
  //             ...updatedUtagData,
  //             [TealiumTagKeyConstants.TEALIUM_PAGE_PUBLISH_DATE]: new Date(),
  //           });
  //           setUtagData(updatedUtagData);
  //         };
  //         SettingUtagData();
  //         setOnPageLoad(false);
  //       }
  //     }
  //   }, [setUtagData, settingFinal, utagData, onPageLoad, appNameState]);

  const LOGOUT_LINK = `/v2/logout?client_id=${props?.config?.id}`;

  return (
    <div className={styles.wrapper}>
      <a className={styles.linkLogout} href={LOGOUT_LINK}>
        Cancel MFA Challenge
      </a>
    </div>
  );
}
