import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css } from "@emotion/core";

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          height: 100vh;
          background-image: linear-gradient(
            to right top,
            #2b599e,
            #0083bf,
            #00a7b1,
            #00c57c,
            #a7d73b
          );
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          color: white;
        }
      `}
    />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
