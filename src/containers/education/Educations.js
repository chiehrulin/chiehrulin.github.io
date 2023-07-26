import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import DegreeCard2 from "../../components/degreeCard2/DegreeCard2.js";
import { degreein } from "../../portfolio";
import { degreeout } from "../../portfolio";

import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Projects & Publications
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degreein.degreein.map((degreein) => {
            return <DegreeCard degree={degreein} theme={theme} />;
          })}
        </div>
        <div className="educations-body-div">
          {degreeout.degreeout.map((degreeout) => {
            return <DegreeCard2 degree={degreeout} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
