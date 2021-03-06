import React, { useState, useContext, useRef } from "react";
import { AccountContext } from "../providers/AccountContext";
import useQuery from "../utils/useQuery";
import auth0 from "auth0-js";
import configs from "../config";

function AccountUnblockContainer(props) {
  const query = useQuery();
  const parsedHash = new URLSearchParams(window.location.hash.substr(1));
  const message =
    useRef(query.get("message") || parsedHash.get("message")) || "";
  const success = useRef(query.get("success") || parsedHash.get("success"));
  const email = useRef(query.get("email") || parsedHash.get("email"));
  const clientId = useRef(
    query.get("clientId") ||
      query.get("client_id") ||
      parsedHash.get("clientId") ||
      parsedHash.get("client_id")
  );
  const domain = useRef(query.get("domain") || parsedHash.get("domain"));
  const error = useRef(
    query.get("error_description") || parsedHash.get("error_description") || ""
  );
  const [isSending, setIsSending] = useState(false);

  const webAuth = new auth0.WebAuth({
    domain: domain.current || "error",
    clientID: clientId.current || "error",
  });

  const sendForgotPasswordLink = (email) => {
    return new Promise((resolve, reject) => {
      webAuth.changePassword(
        {
          connection: configs.connection,
          email: email,
        },
        (err, authResult) => {
          if (err) {
            console.log(err);
            reject(err);
            return;
          }
          if (authResult) {
            window.origin = window.location.origin;
            resolve(authResult);
          }
        }
      );
    });
  };
  const [emailDetails, updateEmailDetails] = useState({
    databaseError: "",
    emailSent: false,
  });

  const handleEmailMe = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendForgotPasswordLink(email.current);
      updateEmailDetails((prevEmailDetails) => {
        const updatedEmailDetails = { ...prevEmailDetails };
        updatedEmailDetails.emailSent = true;
        return updatedEmailDetails;
      });
    } catch (err) {
      console.log(err);
      updateEmailDetails((prevEmailDetails) => {
        const updatedEmailDetails = { ...prevEmailDetails };
        updatedEmailDetails.databaseError = err.description;
        return updatedEmailDetails;
      });
    }
    setIsSending(false);
  };

  const child = React.Children.only(props.children);
  return React.cloneElement(child, {
    message,
    success,
    handleEmailMe,
    emailDetails,
    error,
    domain,
    clientId,
    isSending,
    setIsSending,
  });
}

export default AccountUnblockContainer;
