import React from 'react'
import Winner from './Winner';
import Vote from './Vote'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const Voting = React.createClass({
 mixins: [PureRenderMixin],
 render () {
  return (
   <div>
    {this.props.winner ? <Winner ref="winner" winner={this.props.winner} /> : <Vote {...this.props} />}
   </div>
  )
 }
})

module.exports = Voting
