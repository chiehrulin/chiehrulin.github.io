import React from "react";
import "./Work1.css";
import Work1Section from "./Work1Section";
import { Fade } from "react-reveal";

export default function Work1(props) {
  const theme = props.theme;
  return (
    <div className="main" id="work1">
      <div className="work1-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="work1-header" style={{ color: theme.text }}>
            {/* Work123 */}
          </h1>
        </Fade>
      </div>
      <Work1Section theme={theme} />
    </div>
  );
}
