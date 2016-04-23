import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate } from 'react-addons-test-utils'
import { List, Map } from 'immutable'
import { expect } from 'chai'
import { Results } from '../../src/components/Results'

describe( 'Results', () => {
 it( 'renders entry vote counts or 0', () => {
  const pair = List.of('Friday', 'Next Friday')
  const tally = Map({ 'Friday': 5})
  const component = renderIntoDocument(<Results pair={pair} tally={tally} />)
  const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
  const [friday, nextFriday] = entries.map(entry => entry.textContent)

  expect(entries.length).to.equal(2)
  expect(friday).to.contain('Friday')
  expect(friday).to.contain('5')
  expect(nextFriday).to.contain('Next Friday')
  expect(nextFriday).to.contain('0')
 })

it( 'invokes the next callback when next button is clicked', () => {
 let nextInvoked = false
 const next = () => nextInvoked = true
 const pair = List.of('Friday', 'Next Friday')
 const component = renderIntoDocument(<Results pair={pair} tally={Map()} next={next} />)
 Simulate.click(ReactDOM.findDOMNode(component.refs.next))

 expect(nextInvoked).to.equal(true)
})

it('renders the winner when ther is on', () => {
 const component = renderIntoDocument(
  <Results
   winner='Friday'
   pair={['Firday', 'Next Friday']}
   tally={Map()}
  />)
  const winner = ReactDOM.findDOMNode(component.refs.winner)

  expect(winner).to.be.ok
  expect(winner.textContent).to.contain('Friday')
})

})
