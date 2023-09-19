import React from "react";
import "./Work3.css";
import Work3Section from "./Work3Section";
import { Fade } from "react-reveal";

export default function Work3(props) {
  const theme = props.theme;
  return (
    <div className="main" id="work3">
      <div className="work3-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="work3-header" style={{ color: theme.text }}>
            {/* Work123 */}
          </h1>
        </Fade>
      </div>
      <Work3Section theme={theme} />
    </div>
  );
}
