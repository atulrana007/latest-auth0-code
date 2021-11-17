import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import history from "./history";
import { getConfig } from "./config";

import "./index.css";

// window.LoginWidget = class LoginWidget {
//     init(opts) {
//         const pageConfig = opts.pageConfig;
//         if (!pageConfig) {
//             console.log("hello");
//             throw new Error("pageConfig must be provided in opts");
//         }
//     }
// };

import { BrowserRouter } from "react-router-dom";

// window.LoginWidget = class LoginWidget {
//   init(opts) {
//     const pageConfig = opts.pageConfig;
//     if (!pageConfig) {
//       throw new Error("pageConfig must be provided in opts");
//     }

//     ReactDOM.render(
//       <BrowserRouter>
//         <App pageConfig={pageConfig} />
//       </BrowserRouter>,
//       document.getElementById("root")
//     );
//   }
// };
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};
const config = getConfig();
const providerConfig = {
  domain: "atul-mcafee.us.auth0.com",
  clientId: "m9Z6cOg7yBDgbtQ4ljH3Hln9as3wWoAB",
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};
ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider {...providerConfig}>
      <App pageConfig={{ clientName: "Custom Client Name" }} />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

window.PasswordResetWidget = class PasswordResetWidget {
  init(opts) {
    console.log("locally: rishi singhal");
    console.log(opts);
    const passwordResetConfig = opts.passwordResetConfig;
    if (!passwordResetConfig) {
      throw new Error("passwordResetConfig must be provided in opts");
    }

    ReactDOM.render(
      <BrowserRouter>
        <App passwordResetConfig={passwordResetConfig} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  }
};
// new window.PasswordResetWidget().init(
//   {
//     passwordResetConfig:{
//       csrfToken: "custom-token",
//       email: "custom-email",
//       tenantName: "custom-domain",
//       ticket: "8nfPeX3z5M8Ybm0Fd0N5Bff9hSm9gSsc"
//     }
//   }
// )
