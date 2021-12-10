import React, { useState, useContext } from "react";
import "./style.css";
import ChangePasswordForm from "./ChangePasswordForm";
import translate from "../../localization/translate";
import { FormattedMessage } from "react-intl";
import { ReactComponent as McAfeeLogoForAffiliate } from "../../svg/Mcafee-Logo-For-Affiliate.svg";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";
import { CommonDataContext } from "../../providers/CommonDataContext";

function ResetPasswordUI(props) {
  const {
    onChange,
    ResetPasswordForm,
    onClick,
    passwordRules,
    PasswordPolicyState,
    isValid,
    ResetPasswordError,
    handleResetPassword,
    resetPasswordSuccessful,
    email,
  } = props;
  const { isAffiliateLogo } = useContext(CommonDataContext);

  return (
    <div className="ForgotPasswordContainer">
      <div className="ForgotPasswordLeftWrapper">
        <div className="LoginWelcomeContainer">
          {isAffiliateLogo ? (
            <div className="container-header">
              <McAfeeLogoForAffiliate className="Logo" />

              <span
                id="n_AffiliateLogo"
                className="container-logo aff-logo-container"
              >
                <span className="logo-seperator">| </span>

                <img
                  alt="McAfee"
                  title="Dell"
                  src="https://secureimages.mcafee.com/common/affiliateImages/dell/logo_dell_new_58x59.gif"
                  width="30"
                  height="30"
                />
              </span>
            </div>
          ) : (
            <McAfeeLogo className="Logo" />
          )}
          {resetPasswordSuccessful ? (
            <>
              <div className="ForgotPasswordIntro">
                {translate("Password_successfully_reset!")}
              </div>
              <div className="ForgotPasswordIntroSubHeading">
                {translate("Close_tab_to_previous_page_to_signin")}
              </div>
            </>
          ) : (
            <>
              <div className="ForgotPasswordIntro">
                {translate("Reset_Password")}
              </div>
              <div className="ForgotPasswordIntroSubHeading">
                <FormattedMessage
                  id="Enter_new_password"
                  defaultMessage={translate("Enter_new_password")}
                  values={{
                    email: email,
                  }}
                ></FormattedMessage>
              </div>
            </>
          )}
        </div>
      </div>
      {!resetPasswordSuccessful && (
        <ChangePasswordForm
          onChange={onChange}
          ResetPasswordForm={ResetPasswordForm}
          onClick={onClick}
          isValid={isValid}
          ResetPasswordError={ResetPasswordError}
          handleResetPassword={handleResetPassword}
          passwordRules={passwordRules}
          PasswordPolicyState={PasswordPolicyState}
        />
      )}
    </div>
  );
}

export default ResetPasswordUI;
