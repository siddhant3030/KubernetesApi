import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppHeader extends Component {

  constructor(){
    super();
  
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-light bg-light">
            <Link to={"/"} className="navbar-brand mb-0 h1">
              Gamezop: DASHBOARD
            </Link>
            
            
          </nav>
        </header>
      </div>
    );
  }
}

export default AppHeader;
