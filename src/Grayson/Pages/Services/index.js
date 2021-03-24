import React from 'react'
import Header from '../../components/Header'
import ServicesSection from './components/ServicesSection'
import FAQs from './components/FAQs'

export default () => {
  return (
    <>
      <Header title="Our Services" />
      <ServicesSection />
      <FAQs />
    </>
  )
}
