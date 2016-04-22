require('./style.css')
import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'
import App from './components/App'
import Results from './components/Results'
import { Router, Route, hashHistory } from 'react-router'

const routes = (
 <Route component={App}>
 <Route path='/results' component={Results} />
 <Route path='/' component={Voting} />
 </Route>
)

ReactDOM.render( <Router history={hashHistory}>{routes}</Router>, document.getElementById('app'))
