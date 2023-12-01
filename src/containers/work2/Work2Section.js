import React, { Component } from "react";
import "./Work2.css";

class Work2Section extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="work2-image-div">
        <img
          alt="Tubi"
          src={require("../../assests/images/tubiportfolio.png")}
          width="100%"
          height="100%"
          // align="right"
        ></img>
      </div>
    );
  }
}

export default Work2Section;
