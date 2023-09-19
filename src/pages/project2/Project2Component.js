import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Work2 from "../../containers/work2/Work2";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Project2 extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Work2 theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Project2;
