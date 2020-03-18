import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./components/pages/Add";
import Vote from "./components/pages/Vote";
import Result from "./components/pages/Result";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
// import nature from "./components/themes/nature";
import darkSide from "./components/themes/";

import GlobalStyles from "./GlobalStyles";

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={darkSide}>
        <Router>
          <GlobalStyles />
          <Header />

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
