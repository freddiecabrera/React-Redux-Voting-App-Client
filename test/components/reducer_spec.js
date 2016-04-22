import { List, Map, fromJS } from 'immutable'
import { expect } from 'chai'
import { Reducer } from '../../src/reducer'

describe( 'Reducer', () => {

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
   vote: { pair: ['Friday', 'Next Friday'], tally: {'Friday': 1} }
  }))
 })

 it( 'handles SET_STATE with plain JS payload', () => {
  const initialState = Map()
  const action = {
   type: 'SET_STATE',
   state: {
    vote: { pair: ['Friday', 'Next Friday'], tally: { 'Friday': 1}}
   }
  }
  const nextState = reducer(initialState, action)

  expect(nextState).to.equal( fromJS({
   vote: { pair: ['Friday', 'Next Friday'], tally: { 'Friday': 1} }
  }))
 })

 it( 'handles SET_STATE without an initial stat', () => {
  const action = {
   type: 'SET_STATE',
   state: {
    vote: { pair: ['Friday', 'Next Friday'], tally: { 'Friday': 1 }}
   }
  }
  const nextState = reducer(undefined, action)

  expect(nextState).to.equal( fromJS({
   vote: { pair: ['Friday', 'Next Friday'], tally: { 'Friday': 1} }
  }))
 })

})
