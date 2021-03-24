import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styles from "./index.module.scss";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

export default () => {
  useEffect(() => {
    document.title = "Grayson";
  }, []);

  return (
    <BrowserRouter>
      <div id={styles.glozzom}>
        <NavBar />
        <Route path="/grayson/" exact component={Home} />
        <Route path="/grayson/about" component={About} />
        <Route path="/grayson/blog" component={Blog} />
        <Route path="/grayson/contact" component={Contact} />
        <Route path="/grayson/services" component={Services} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
