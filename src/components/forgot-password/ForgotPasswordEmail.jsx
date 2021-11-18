import React, { useContext } from "react";
import translate from "../../localization/translate";
import { FormattedMessage } from "react-intl";
import "./style.css";
import { CommonDataContext } from "../../providers/CommonDataContext";

function ForgotPasswordEmail(props) {
  const { backToSignIn, updateEmailDetails, emailDetails } = props;
  const { locale } = useContext(CommonDataContext);
  const FORMATVALUES = {
    a_contact_support: (chunks) => (
      <a
        className="contactSupportBtn"
        href={`https://home.mcafee.com/root/support.aspx?culture=${locale.toUpperCase()}`}
      >
        {chunks}
      </a>
    ),
    a_request_another_mail: (chunks) => (
      <strong
        className="contactSupportBtn"
        onClick={() => {
          updateEmailDetails({ ...emailDetails, emailSent: false });
        }}
      >
        {chunks}
      </strong>
    ),
  };
  return (
    <div className="ForgotPasswordContainer">
      <div className="ForgotPasswordLeftWrapper flexGrow limitWidth">
        <div className="ForgotPasswordLeftContainer" style={{ height: "100%" }}>
          <div>
            <img
              alt="McAfeeLogo"
              className="McAfeeLogo"
              src="https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"
            />
          </div>
          <div className="ForgotPasswordIntro">{translate("Check_inbox")}</div>
          <div className="ForgotPasswordIntroSubHeading">
            {translate("Password_reset_link_sent")}
          </div>
          <div className="forgotPasswordDropDownContainer">
            <button
              className={"emailMeBtn"}
              style={{ width: "100%", maxWidth: "350px" }}
              onClick={backToSignIn}
            >
              <div>{translate("Back_to_signin")}</div>
            </button>
            <div className="contactSupportWrapper">
              <FormattedMessage
                id="Did_not_receive_reset_password_link_request_another_email_forgot_email_need_help_contact_support"
                defaultMessage={translate(
                  "Did_not_receive_reset_password_link_request_another_email_forgot_email_need_help_contact_support"
                )}
                values={{
                  ...FORMATVALUES,
                  a: (chunks) => (
                    <a
                      className="contactSupportBtn"
                      target="_blank"
                      href="https://www.example.com/shoe"
                    >
                      {chunks}
                    </a>
                  ),
                }}
              >
                {(chunks) => <p className="contactSupportText">{chunks}</p>}
              </FormattedMessage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;
