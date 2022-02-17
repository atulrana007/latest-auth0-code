import React from "react";
import "./styles.css";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";
import Footer from "../Footer/Footer";
import translate from "../../localization/translate";

function MultiFactor(props) {
  let DisplayText = {};
  switch (props?.Page) {
    case "confirm-otp":
      DisplayText = {
        title: "Confirm your identity",
        subtitle:
          "We sent a verification code to your phone number to sign in to your account.",
      };
      break;
    default:
      DisplayText = {
        title: "Set up two-factor authentication",
        subtitle:
          "Add a phone number as a second form of authentication when you sign in to keep your account secure.",
      };
  }
  return (
    <div>
      {" "}
      <div className="inner-left-div">
        <div>
          <McAfeeLogo />
          <div className="left-div-heading">{translate(DisplayText.title)}</div>
          <div className="subHeading">{translate(DisplayText.subtitle)}</div>
          {props?.Page === "confirm-otp" && (
            <div className="time-message">
              <p className="time-message-text">
                {translate(
                  "You have <b>5</b> minutes to complete this step",
                  "You have <b>5</b> minutes to complete this step",
                  {
                    b: (chunk) => <strong>{chunk}</strong>,
                  }
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiFactor;
