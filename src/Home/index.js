import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Blogen from '../Blogen';
import Glozzom from '../Glozzom'
import LoopLab from '../LoopLab'
import Mizuxe from '../Mizuxe'
import Portfolio from '../Portfolio'

export default () => {
  return (
    <BrowserRouter>
      <Route path="/blogen" component={Blogen} />
      <Route path="/glozzom" component={Glozzom} />
      <Route path="/looplab" component={LoopLab} />
      <Route path="/mizuxe" component={Mizuxe} />
      <Route path="/" exact component={Portfolio} /> 
    </BrowserRouter>
  )
}
