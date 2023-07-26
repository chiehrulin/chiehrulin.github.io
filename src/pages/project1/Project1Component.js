import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Work1 from "../../containers/work1/Work1";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Project1 extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Work1 theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Project1;
