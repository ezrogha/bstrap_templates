import React from 'react';

import Showcase from './components/Showcase'
import HomeIconSection from './components/HomeIconSection'
import InfoSection from './components/InfoSection'
import PhotoGallery from './components/PhotoGallery'
import NewsLetter from './components/NewsLetter'

export default () => {
  return (
    <>
      <Showcase />
      <HomeIconSection />
      <InfoSection />
      <PhotoGallery />
      <NewsLetter />
    </>
  )
}
