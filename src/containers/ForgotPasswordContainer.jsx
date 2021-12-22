import React, { useState, useContext } from "react";
import { AccountContext } from "../providers/AccountContext";
import { AppContext } from "../providers/AppContext";
import { CommonDataContext } from "../providers/CommonDataContext";
import { TrackingContext } from "../providers/TrackingProvider";
import validateEmail from "../utils/validateEmail";

import {
  TealiumTagKeyConstants,
  TealiumTagValueConstans,
} from "../constants/TealiumConstants";

function ForgotPasswordContainer(props) {
  const [emailDetails, updateEmailDetails] = useState({
    email: "",
    emailError: "",
    emailSent: false,
    databaseError: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { setLoginText, setLoginForm, customization } =
    useContext(CommonDataContext);
  const { utagData, setUtagData, trackClickEvent } =
    useContext(TrackingContext);

  const { sendForgotPasswordLink } = useContext(AccountContext);
  const { setWhichPage } = useContext(AppContext);

  const onBlur = (emailVal) => {
    if (!emailVal) {
      updateEmailDetails((prevEmailDetails) => {
        const updatedEmailDetails = { ...prevEmailDetails };
        updatedEmailDetails.emailError = "Email is required";
        return updatedEmailDetails;
      });
    } else if (emailVal && !validateEmail(emailVal)) {
      updateEmailDetails((prevEmailDetails) => {
        const updatedEmailDetails = { ...prevEmailDetails };
        updatedEmailDetails.emailError = "Email is not valid";
        return updatedEmailDetails;
      });
    } else {
      updateEmailDetails((prevEmailDetails) => {
        const updatedEmailDetails = { ...prevEmailDetails };
        updatedEmailDetails.emailError = "";
        return updatedEmailDetails;
      });
    }
  };

  const handleEmailChange = (e) => {
    const emailVal = e.target.value;
    updateEmailDetails((prevEmailDetails) => {
      const updatedEmailDetails = { ...prevEmailDetails };
      updatedEmailDetails.email = emailVal;
      return updatedEmailDetails;
    });
    onBlur(emailVal);
  };
  const handleEmailMe = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await sendForgotPasswordLink(emailDetails.email);
      updateEmailDetails((prevEmailDetails) => {
        const updatedEmailDetails = { ...prevEmailDetails };
        updatedEmailDetails.emailSent = true;
        return updatedEmailDetails;
      });
    } catch (err) {
      if (err?.error === "too_many_requests") {
        updateEmailDetails((prevEmailDetails) => {
          const updatedEmailDetails = { ...prevEmailDetails };
          updatedEmailDetails.databaseError =
            "forgotPassword.too_many_requests";
          return updatedEmailDetails;
        });
      } else {
        updateEmailDetails((prevEmailDetails) => {
          const updatedEmailDetails = { ...prevEmailDetails };
          updatedEmailDetails.databaseError = "fallback_error";
          return updatedEmailDetails;
        });
      }
    }
    setIsSending(false);
  };
  const fireDifferentPageViewCall = (pageName) => {
    let utag = window.utag;
    let updatedUtagData = {
      ...utagData,
      [TealiumTagKeyConstants.TEALIUM_NAVIGATION_ELEMENT]: null,
      [TealiumTagKeyConstants.TEALIUM_PAGE_NAME]:
        TealiumTagValueConstans.BASE_PAGE_NAME + pageName,
      [TealiumTagKeyConstants.TEALIUM_SITESECTION]: pageName,
    };
    utag.view({
      ...updatedUtagData,
      [TealiumTagKeyConstants.TEALIUM_PAGE_PUBLISH_DATE]: new Date(),
    });
    setUtagData(updatedUtagData);
  };
  const backToSignIn = (e) => {
    trackClickEvent(e.target.getAttribute("data-navelement"));
    fireDifferentPageViewCall(TealiumTagValueConstans.LOGIN_PAGE_NAME);
    setLoginText({
      title: "Sign_into_your_McAfee_account",
      subtitle: "choose_your_signIn_method_continue",
    });
    setLoginForm({
      customizations: customization,
      email: "",
      password: "",
      otp: "",
      otpAvailable: false,
      isSubmitting: false,
    });
    setWhichPage("login-page");
  };

  const child = React.Children.only(props.children);
  return React.cloneElement(child, {
    ...props,
    emailDetails,
    handleEmailChange,
    handleEmailMe,
    backToSignIn,
    validateEmail,
    updateEmailDetails,
    isSending,
  });
}

export default ForgotPasswordContainer;
