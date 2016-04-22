import { Map } from 'immutable'

const setState = (state, newState) => state.merge(newState)

const Reducer = (state = Map(), action) => {
 switch (action.type) {
  case 'SET_STATE':
   return setState(state, action.state)
 }
 return state;
}

module.exports = { Reducer }
