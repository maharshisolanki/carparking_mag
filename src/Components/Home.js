import React, { Component } from "react";
import Login from "./login";
import "../CSS/nav.css";
import Nav from "./nav";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="title">
          <h1 id="name">Real-Time Parking System </h1>
          {/*<img id="headerImage" src="hedImage.jpg" alt="logo" width="38%" height="250%"/>*/}
        </div>
        <Nav {...this.props} />
        <Login {...this.props} />
      </div>
    );
  }
}

export default Home;
