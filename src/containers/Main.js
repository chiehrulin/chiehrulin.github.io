import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Test from "../pages/project3/Project3Component";
import Project1 from "../pages/project1/Project1Component";
import Project2 from "../pages/project2/Project2Component";
import Project3 from "../pages/project3/Project3Component";
//import Splash from "../pages/splash/Splash";
import Work from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/project3"
              render={(props) => (
                <Project3 {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/project1"
              render={(props) => (
                <Project1 {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/project2"
              render={(props) => (
                <Project2 {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/work"
              render={(props) => <Work {...props} theme={this.props.theme} />}
            />
            <Route
              path="/opensource"
              render={(props) => (
                <Opensource {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
