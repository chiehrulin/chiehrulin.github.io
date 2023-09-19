import React from "react";
import "./Work2.css";
import Work2Section from "./Work2Section";
import { Fade } from "react-reveal";

export default function Work2(props) {
  const theme = props.theme;
  return (
    <div className="main" id="work2">
      <div className="work2-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="work2-header" style={{ color: theme.text }}>
            {/* Work123 */}
          </h1>
        </Fade>
      </div>
      <Work2Section theme={theme} />
    </div>
  );
}
