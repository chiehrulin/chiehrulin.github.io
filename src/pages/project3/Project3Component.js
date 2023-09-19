import React, { Component } from "react";
import Header from "../../components/header/Header";
import Work3 from "../../containers/work3/Work3";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Project3 extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Work3 theme={this.props.theme} />
        {/* 首頁介紹是這個<Skills theme={this.props.theme} /> */}
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Project3;
