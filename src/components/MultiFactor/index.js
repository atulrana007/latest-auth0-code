import React from "react";
import "./styles.css";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";
import Footer from "../Footer/Footer";

function MultiFactor() {
  return (
    <div className="left-div">
      <div>
        <McAfeeLogo />
        <div className="left-div-heading">
          McAfee Unified Authentication 2nd Factor Authentication
        </div>
        <div className="subHeading">
          Enter the Verification code and continue
        </div>
      </div>
      <div className="left-div-bottom">
        <div className="footer">
          <Footer removePadding />
        </div>
      </div>
    </div>
  );
}

export default MultiFactor;
