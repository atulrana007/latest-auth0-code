import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../providers/AppContext";
import { CommonDataContext } from "../../providers/CommonDataContext";
import Signup from "./Signup";
import styles from "./style.module.css";
import translate from "../../localization/translate";
import LoaderScreen from "../../loader/LoaderScreen";
import { ReactComponent as McAfeeLogo } from "../../svg/Mcafee-Logo.svg";
import { ReactComponent as McAfeeLogoForAffiliate } from "../../svg/Mcafee-Logo-For-Affiliate.svg";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";

const SignupUI = (props) => {
  const {
    onSubmit,
    SignupForm,
    onChange,
    onClick,
    passwordRules,
    PasswordPolicyState,
    isValid,
    SignupError,
    loader,
    // setLoginForm,
    // LoginForm,
    changePage,
    showSignupForm,
    errorEmail,
    handleOptinsCheckBoxes,
    optinFields,
    validateEmail,
    setLoginForm,
    LoginForm,
    onLoad,
    activeInput,
    setActiveInput,
  } = props;
  // const { setWhichPage } = useContext(AppContext);
  const { SignupText } = useContext(CommonDataContext);
  const { setWhichPage } = useContext(AppContext);
  const { isAffiliateLogo } = useContext(CommonDataContext);
  const [firstTime, setFistTime] = useState(true);

  useEffect(() => {
    if (firstTime) {
      setFistTime(false);
      onLoad();
    }
  }, [onLoad, firstTime]);
  const signUpCustomization = SignupForm.customizations;
  //   console.log(signUpCustomization);

  //   const location = useLocation().search;
  //   const getAffiliate = (location) => {
  //     const parsedHash = new URLSearchParams(window.location.hash.substr(1));
  //     let query = new URLSearchParams(location);
  //     let affiliate = query.get("affid") ?? parsedHash.get("affid");
  //     return affiliate;
  // }

  //   const getCulture = (location) => {
  //     const parsedHash = new URLSearchParams(window.location.hash.substr(1));
  //     let query = new URLSearchParams(location);
  //     let culture = query.get("culture") ?? parsedHash.get("culture");
  //     return culture;
  // }

  // const culture = getCulture(location);
  // const possiblePaths = {
  //   'en-us': require('../../customization/en-us.json')
  // }

  // const getCultureSettingsFile = (culture)=> {
  //  return possiblePaths[culture]
  // }
  // const affiliate = getAffiliate(location);

  //   const getAffiliateLogo = (culture)=>{
  //     let isAffiliateLogoAvailable=false;
  //   if(culture)
  //   {
  //     const cultureSettings= getCultureSettingsFile(culture);
  //     if(cultureSettings && affiliate && cultureSettings.affiliates && cultureSettings.affiliates[affiliate])
  //     isAffiliateLogoAvailable = cultureSettings.affiliates[affiliate].affiliateLogo !== null ? cultureSettings.affiliates[affiliate].affiliateLogo : false;
  //     else if (cultureSettings && cultureSettings.affiliateLogo)
  //     isAffiliateLogoAvailable=cultureSettings.affiliateLogo;
  //   }
  //   return isAffiliateLogoAvailable;
  //   }

  //   const isAffiliateLogo= getAffiliateLogo(culture);

  return (
    <>
      {loader ? (
        <LoaderScreen text="Creating_your_account" />
      ) : (
        <div className={styles.SignupWrapper}>
          <div className={styles.leftContainer}>
            {isAffiliateLogo ? (
              <div className="container-header">
                <McAfeeLogoForAffiliate />

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
              <McAfeeLogo />
            )}
            {/* <McAfeeLogo className="Logo" /> */}
            <div className={styles.Intro}>{translate(SignupText.title)}</div>
            {showSignupForm ? (
              <div className={styles.IntroSubHeading}>
                <div className={styles.Points}>
                  {translate(SignupText.subtitle)}
                </div>
              </div>
            ) : null}
            {SignupError.errorCode ? (
              <>
                <div className={styles.IntroSubHeadingWithError}>
                  <div id="signup-error-id" className={styles.ErrorPoints}>
                    <FormattedMessage
                      id={SignupError.errorCode}
                      defaultMessage="We can’t create an account for <b>{email}</b> because your email is from a country subject to US export restrictions, or your company is on a list of prohibited organizations, either by the US or foreign government agency."
                      values={{
                        b: (chunks) => <strong>{chunks}</strong>,
                        email: `${errorEmail}`,
                      }}
                    />
                  </div>
                  <div className={styles.Points}>
                    <FormattedMessage
                      id="Email_us_at"
                      defaultMessage="Email us at <b>export@mcafee.com</b> if you have any questions."
                      values={{
                        b: (chunks) => (
                          <p className={styles.boldid}>{chunks}</p>
                        ),
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
            <div className={styles.HorizontalSignupdashedline}></div>
            {showSignupForm ? (
              !signUpCustomization.hideLoginCTA && (
                <div className={styles.BottomHeadingSignUp}>
                  {translate("Already_have_an_account")}
                  <p
                    id="sign-in-now-link"
                    className={styles.Signuppagelink}
                    onClick={(e) => changePage(e)}
                    data-navelement="Sign In Now"
                  >
                    {translate("Sign_in_now")}
                  </p>
                </div>
              )
            ) : (
              <div
                id="signin-with-different-email-address-redirect-link"
                className={styles.Signuppagelink}
                onClick={(e) => changePage(e)}
                data-navelement="Signin-with-different-email-redirect-link"
              >
                {translate("Sign_in_with_a_different_email_address")}
              </div>
            )}
          </div>
          <div className={styles.RightContainerWrapper}>
            <div className={styles.RightContainerSignup}>
              {showSignupForm ? (
                <Signup
                  onChange={onChange}
                  onSubmit={onSubmit}
                  SignupForm={SignupForm}
                  onClick={onClick}
                  passwordRules={passwordRules}
                  PasswordPolicyState={PasswordPolicyState}
                  isValid={isValid}
                  SignupError={SignupError}
                  handleOptinsCheckBoxes={handleOptinsCheckBoxes}
                  optinFields={optinFields}
                  validateEmail={validateEmail}
                  activeInput={activeInput}
                  setActiveInput={setActiveInput}
                ></Signup>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupUI;
