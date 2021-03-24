import React from 'react'
import Header from '../../components/Header'
import AboutSection from './components/AboutSection'
import IconGallery from './components/IconGallery'
import Testmonials from './components/Testmonials'

export default function index() {
  return (
    <>
      <Header title="About Us" />
      <AboutSection />
      <IconGallery />
      <Testmonials />
    </>
  )
}
