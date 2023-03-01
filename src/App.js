import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat";

const App = () => {
  return (
    <React.Fragment className="app-wrapper">
      <Router>
        <Route exact path="/">
          <Header className="Header" />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/chat" component={Chat} />
      </Router>
    </React.Fragment>
  );
};

export default App;
