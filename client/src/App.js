import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path ="/" exact component={Books}></Route>
          <Route path ="/books" exact component={Saved}></Route>
          <Route path ="/books/:id" component={Saved}></Route>
          <Route component ={NoMatch}></Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
