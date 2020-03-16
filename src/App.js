import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./components/pages/Add";
import Vote from "./components/pages/Vote";
import Result from "./components/pages/Result";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <main className="main">
          <Switch>
            <Route exact path="/">
              <Add />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/polls/pollId">
              <Result />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
