import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 0;
          height: 100vh;
          background-image: ${theme.colors.bgPrimary};
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          color: white;
        }
      `}
    />
  );
}

export default GlobalStyles;
