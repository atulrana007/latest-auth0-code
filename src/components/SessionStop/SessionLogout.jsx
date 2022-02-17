import React from "react";
import styles from "./style.module.css";

export default function SessionLogout(props) {
  const LOGOUT_LINK = `/v2/logout?client_id=${props?.mfaConfig?.id}`;
  return (
    <div className={styles.wrapper}>
      <a className={styles.linkLogout} href={LOGOUT_LINK}>
        Cancel MFA Challenge
      </a>
    </div>
  );
}
