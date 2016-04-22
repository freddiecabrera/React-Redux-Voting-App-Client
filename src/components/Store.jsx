import { createStore } from 'redux'
import { Reducer } from './reducer'

const store = createStore(Reducer)
store.dispatch({
 type: 'SET_STATE',
 state: {
  vote: pair: ['Friday', 'Next Friday'], tally: { 'Friday': 2 }
 }
})

module.exports = { store }
