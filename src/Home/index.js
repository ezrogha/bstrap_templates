import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Blogen from '../Blogen';
import Glozzom from '../Grayson'
import LoopLab from '../LoopLab'
import Melanie from '../Melanie'
import Portfolio from '../Portfolio'

export default () => {
  return (
    <BrowserRouter>
      <Route path="/blogen" component={Blogen} />
      <Route path="/grayson" component={Glozzom} />
      <Route path="/looplab" component={LoopLab} />
      <Route path="/melanie" component={Melanie} />
      <Route path="/" exact component={Portfolio} /> 
    </BrowserRouter>
  )
}
