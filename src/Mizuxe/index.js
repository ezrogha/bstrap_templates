import React, { useEffect, useRef, useState } from "react";
import NavBar from './components/NavBar';
import Showcase from "./components/Showcase";
import NewsLetter from "./components/NewsLetter";
import About from "./components/About";
import Authors from "./components/Authors";
import Contact from "./components/Contact";

export default () => {

  const [navBarHeight, setNavBarHeight] = useState(0)
  const navRef = useRef()
  useEffect(() => {
    document.title = "Melanie";
    setNavBarHeight(navRef.current.clientHeight)
  }, [navBarHeight])

  return (
    <div style={styles.body(navBarHeight)}>
      <NavBar getNavRef={navRef} />
      <Showcase />
      <NewsLetter />
      <About />
      <Authors />
      <Contact />
    </div>
  );
}

const styles = {
  body: (navHeight) => ({
    marginTop: navHeight
  })
}
