import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils'
import Voting from '../../src/components/Voting'
import { expect } from 'chai'

describe( 'Voting', () => {

 it( 'renders a pair of buttons', () => {
  const component = renderIntoDocument(
   <Voting pair={['Friday', 'Next Friday']} />
  )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  expect(buttons.length).to.equal(2);
  expect(buttons[0].textContent).to.equal('Friday')
  expect(buttons[1].textContent).to.equal('Next Friday')
 })

 it( 'invokes callback when a button is clicked', () => {
   let votedWith
   const vote = (entry) => votedWith = entry
   const component = renderIntoDocument(
     <Voting pair={['Friday', 'Next Friday']} vote={vote}/>
   )
   const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
   Simulate.click(buttons[0])
   expect(votedWith).to.equal('Friday')
 })

 it( 'disables buttons when user has voted', () => {
  const component = renderIntoDocument( <Voting pair={['Friday', 'Next Fridat']} hasVoted='Friday' /> )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

   expect(buttons.length).to.equal(2)
   expect(buttons[0].hasAttribute('disabled')).to.equal(true)
   expect(buttons[1].hasAttribute('disabled')).to.equal(true)
 })

 it( 'adds label to the voted entry', () => {
  const component = renderIntoDocument( <Voting pair={['Friday', 'Next Friday']} hasVoted='Friday' /> )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  expect(buttons[0].textContent).to.contain('Voted')
 })

 it( 'renders just the winner when ther is one', () => {
  const component = renderIntoDocument( <Voting winner='Friday' /> )
  const buttons = scryRenderedDOMComponentsWithTag(component,'button')

  expect(buttons.length).to.equal(0)

  const winner = ReactDOM.findDOMNode(component.refs.winner)
  expect(winner).to.be.ok
  expect(winner.textContent).to.contain('Friday')
 })

})
