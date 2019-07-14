import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// import Jumbotron from "./components/Jumbotron";
// import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/saved" exact component={Saved} />
          <Route path="/saved/:id" exact component={Saved} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Jumbotron/> */}
        {/* <header class="header">
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </header> */}
     
      </div>

      {/* <Books /> */}

    </Router >
  
  );
}

export default App;
