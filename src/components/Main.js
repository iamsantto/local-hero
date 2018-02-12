import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home} />
    </Switch>
  </main>
)

export default Main
