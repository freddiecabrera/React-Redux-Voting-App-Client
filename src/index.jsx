require('./style.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { VotingContainer } from './components/Voting'
import App from './components/App'
import { ResultsContainer } from './components/Results'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './components/Store'
import { setState } from './action_creators'
import io from 'socket.io-client'

export const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => store.dispatch(setState(state)))

const routes = (
 <Route component={App}>
 <Route path='/results' component={ResultsContainer} />
 <Route path='/' component={VotingContainer} />
 </Route>
)

ReactDOM.render(
 <Provider store={store}>
   <Router history={hashHistory}>{routes}</Router>
 </Provider>,
   document.getElementById('app')
  )
