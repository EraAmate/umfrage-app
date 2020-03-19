import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import nature from "./themes/nature";
import darkSide from "./themes/darkSide";

import GlobalStyles from "./GlobalStyles";

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

function App() {
  const [theme, setTheme] = useState(darkSide);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Header
            onSwitchColorButtonClick={() => {
              // if (theme === darkSide) {
              //   setTheme(nature);
              // } else {
              //   setTheme(darkSide);
              // }
              setTheme(theme === darkSide ? nature : darkSide);
            }}
          />

          <Main>
            <Switch>
              <Route exact path="/">
                <Add />
              </Route>
              <Route path="/polls/:pollId/vote">
                <Vote />
              </Route>
              <Route path="/polls/:pollId">
                <Result />
              </Route>
            </Switch>
          </Main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
