import React from 'react'
import { List, Map } from 'immutable'

const pair = List.of('Friday', 'Next Friday')
const tally = Map({'Friday': 5, 'Next Friday': 2})
const App = React.createClass({
 render () {
  return (
   React.cloneElement(this.props.children, { pair: pair, tally: tally })
  )
 }
})

module.exports = App
