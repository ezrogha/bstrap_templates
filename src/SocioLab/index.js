import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Explore from './components/Explore'
import Create from './components/Create'
import Share from './components/Share'
import Footer from './components/Footer'

import styles from './index.module.css';

export default class index extends Component {
  componentDidMount(){
    document.title = "SocioLab"
  }
  render() {
    return (
      <div id={styles.body}>
        <NavBar />
        <Home />
        <Explore />
        <Create />
        <Share />
        <Footer />
      </div>
    )
  }
}
