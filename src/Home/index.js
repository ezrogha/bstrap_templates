import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Bjorn from '../Bjorn';
import Grayson from '../Grayson'
import SocioLab from '../SocioLab'
import Melanie from '../Melanie'
import Portfolio from '../Portfolio'

export default () => {
  return (
    <BrowserRouter>
      <Route path="/bjorn" component={Bjorn} />
      <Route path="/grayson" component={Grayson} />
      <Route path="/sociolab" component={SocioLab} />
      <Route path="/melanie" component={Melanie} />
      <Route path="/" exact component={Portfolio} /> 
    </BrowserRouter>
  )
}
