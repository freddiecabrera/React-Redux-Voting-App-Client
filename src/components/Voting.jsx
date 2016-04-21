import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

const Voting = React.createClass({
 render () {
  return (
   <div>
    {this.props.winner ?
     <Winner ref="winner" winner={this.props.winner} /> :
     <Vote {...this.props} />}
   </div>
  )
 }
})

module.exports = Voting
