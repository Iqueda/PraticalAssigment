import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from "../components/Home"
import addPlayer from "../components/addPlayer"

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    	<IndexRoute component={Home} />
    	<Route path='addPlayer' component={addPlayer} />
    </Route>
  </Router>
)

export default routes