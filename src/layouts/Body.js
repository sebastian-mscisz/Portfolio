import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={ContactPage} />
        <Route path="/contact" exact component={AboutPage} />
        <Route path="/projects" exact component={ProjectsPage} />
      </Switch>
    </>
  );
};

export default Body;
