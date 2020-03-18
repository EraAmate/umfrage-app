import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
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
  );
}

export default GlobalStyles;
