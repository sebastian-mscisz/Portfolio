import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/skills" exact component={SkillsPage} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Body;
