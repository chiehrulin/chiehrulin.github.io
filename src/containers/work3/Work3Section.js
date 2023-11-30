import React, { Component } from "react";
import "./Work3.css";
//import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { work3 } from "../../portfolio";
import { Fade } from "react-reveal";
//import DataScienceImg from "./DataScienceImg";
//import FullStackImg from "./FullStackImg";
//import CloudInfraImg from "./CloudInfraImg";
//import DesignImg from "./DesignImg";

//function GetSkillSvg(props) {
// if (props.fileName === "DataScienceImg")
//   return <DataScienceImg theme={props.theme} />;
// else if (props.fileName === "FullStackImg")
//   return <FullStackImg theme={props.theme} />;
// else if (props.fileName === "CloudInfraImg")
//   return <CloudInfraImg theme={props.theme} />;
//   return <DesignImg theme={props.theme} />;
// }

class Work3Section extends Component {
  render() {
    const theme = this.props.theme;
    return (
      // <div>
      //   {work1.data.map((work1) => {
      //     return (
      //       <div className="work1-main-div">
      //         <Fade left duration={2000}>
      //           <div className="work1-image-div">
      //             <img
      //               alt="Ashutosh is Analysing Data"
      //               src={require("../../assests/images/self.jpg")}
      //             ></img>
      //             {/* <GetWrok1Svg fileName={work1.fileName} theme={theme} /> */}
      //           </div>
      //         </Fade>

      //         <div className="work1-text-div">
      //           <Fade right duration={1000}>
      //             <h1 className="work1-heading" style={{ color: theme.text }}>
      //               {work1.title}
      //             </h1>
      //           </Fade>
      //           {/* <Fade right duration={1500}>
      //             <SoftwareSkill logos={skill.softwareSkills} />
      //           </Fade> */}
      //           <Fade right duration={2000}>
      //             <div>
      //               {work1.work1.map((work1Sentence) => {
      //                 return (
      //                   <p
      //                     className="subTitle work1-text"
      //                     style={{ color: theme.secondaryText }}
      //                   >
      //                     {work1Sentence}
      //                   </p>
      //                 );
      //               })}
      //             </div>
      //           </Fade>
      //         </div>
      //       </div>
      //     );
      //   })}
      // </div>
      <div className="work3-image-div">
        <img
          alt="MyUT"
          src={require("../../assests/images/Work3Page1.png")}
          width="100%"
          height="10%"
        ></img>

        <img
          alt="MyUT"
          src={require("../../assests/images/Work3Page2.png")}
          width="100%"
          height="10%"
        ></img>

        {/* <img
          alt="MyUT"
          src={require("../../assests/images/giphy.gif")}
          width="10%"
          height="10%"
        ></img> */}
      </div>
    );
  }
}

export default Work3Section;
