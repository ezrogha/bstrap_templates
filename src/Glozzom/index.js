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
    document.title = "Glozzom";
  }, []);

  return (
    <BrowserRouter>
      <div id={styles.glozzom}>
        <NavBar />
        <Route path="/glozzom/" exact component={Home} />
        <Route path="/glozzom/about" component={About} />
        <Route path="/glozzom/blog" component={Blog} />
        <Route path="/glozzom/contact" component={Contact} />
        <Route path="/glozzom/services" component={Services} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
