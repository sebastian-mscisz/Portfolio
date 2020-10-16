import React from "react";
import Header from "../layouts/Header";
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Header />
          <Body />
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
