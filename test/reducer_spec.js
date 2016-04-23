import { List, Map, fromJS } from 'immutable'
import { expect } from 'chai';

import reducer from '../src/reducer'

describe( 'reducer', () => {

  it( 'handles SET_STATE', () => {
    const initialState = Map()
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({ pair: List.of('Friday', 'Next Friday'), tally: Map({ 'Friday': 1 }) })
      })
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal( fromJS({
      vote: { pair: ['Friday', 'Next Friday'], tally: { 'Friday': 1 } }
    }))
  })

})
