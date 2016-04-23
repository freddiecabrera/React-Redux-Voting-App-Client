require('./style.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { VotingContainer } from './components/Voting'
import App from './components/App'
import { ResultsContainer } from './components/Results'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './components/Store'

console.log(store.getState())
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: { pair: ['Friday', 'Next Friday'], tally: { 'Friday': 1} }
  }
})
console.log(store.getState())

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
