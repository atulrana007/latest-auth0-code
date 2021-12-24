import React from "react";
import { useState } from "react";
import translate from "../../localization/translate";
import useInterval from "../../utils/useInterval";
import configs from "../../config";
import styles from "./style.module.css";

const Timer = (props) => {
  const { setOtpValid, getOtp } = props;

  const [TimerState, setTimer] = useState({
    minutes: configs.timer.minutes,
    seconds: configs.timer.seconds,
  });
  const [stop, setStop] = useState(1000);

  useInterval(() => {
    if (TimerState.seconds > 0) {
      setTimer({ ...TimerState, seconds: TimerState.seconds - 1 });
    }
    if (TimerState.seconds === 0) {
      if (TimerState.minutes === 0) {
        setOtpValid(false);
        setStop(null);
      } else {
        setTimer({
          minutes: TimerState.minutes - 1,
          seconds: 59,
        });
      }
    }
  }, stop);

  return (
    <div className={styles.timerClass}>
      {TimerState.minutes === 0 && TimerState.seconds === 0 ? (
        <div className={styles.timerInactive}>
          {translate("This_passcode_has_expired")}
          <div
            className={styles.resendPasscode}
            onClick={getOtp}
            data-nav-element-click="Resend OTP | Expired"
          >
            {translate("Send_new_code")}
          </div>
        </div>
      ) : (
        <div className={styles.timerActive}>
          {translate("Passcode_expires_in")}{" "}
          <span style={{ fontWeight: 700 }}>
            {TimerState.minutes === 0 && TimerState.seconds > 0
              ? TimerState.seconds
              : TimerState.minutes === 20
              ? TimerState.minutes
              : TimerState.minutes + 1}
          </span>{" "}
          {TimerState.minutes === 0 && TimerState.seconds > 0
            ? translate("seconds")
            : translate("minutes")}
        </div>
      )}
    </div>
  );
};

export default Timer;
