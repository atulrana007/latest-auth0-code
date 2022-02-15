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
          "We sent a text message to your mobile number. Enter the 6-digit code to sign in to your account.",
      };
      break;
    default:
      DisplayText = {
        title: "Enable two-factor authentication",
        subtitle:
          "Use two forms of authentication when you sign in to keep your account secure. Add a phone number to enable it now.",
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
        </div>
        <div className="left-div-bottom">
          <div className="footer">
            <Footer removePadding />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiFactor;
