import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Cities from './components/Cities'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Cities} />
    </Switch>
  </BrowserRouter>
)

export default Routes;