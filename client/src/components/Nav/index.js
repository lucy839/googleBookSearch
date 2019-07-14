import React from "react";
import "./style.css";

// navbar
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand logo" href="/">
        Google Books
      </a>
      <a className="navbar-brand" id="link" href="/">
        Search
      </a>
      <a className="navbar-brand" id="link" href="/books">
        Saved
      </a>
    </nav>
  );
}

export default Nav;

