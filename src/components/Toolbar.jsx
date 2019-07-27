import React, { Component } from "react";
import { Navbar } from "react-materialize";

class Toolbar extends Component {
  render() {
    return <Navbar className="blue darken-4" fixed={true} alignLinks="right" />;
  }
}

export default Toolbar;
