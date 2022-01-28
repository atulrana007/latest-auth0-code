import React from "react";
import "./styles.css";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";

function MultiFactor() {
  return (
    <div>
      <div>
        <McAfeeLogo />
        <div className="left-div-heading">
          McAfee Unified Authentication 2nd Factor Authentication
        </div>
        <div className="subHeading">
          Enter the Verification code and continue
        </div>
      </div>
    </div>
  );
}

export default MultiFactor;
