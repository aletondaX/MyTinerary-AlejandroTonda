import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="352463066125-s64ag7u5rjae0ohhhottb81udpv88s9b.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
