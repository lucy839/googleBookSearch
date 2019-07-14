import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route component={NoMatch} />
        </Switch>

        <header class="header">
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </header>
        <Footer />
      </div>

      {/* <Books /> */}

    </Router >
  );
}

export default App;
