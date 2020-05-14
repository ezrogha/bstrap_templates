import React from 'react'
import { FaCog } from 'react-icons/fa'

import Header from '../../components/Header'
import Actions from './components/Actions'
import Posts from './components/Posts'

export default () => {
  return (
    <>
      <Header title="Dashboard" Icon={FaCog} bgColor="bg-primary" />
      <Actions />
      <Posts />
    </>
  )
}
