import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Friday', 'Next Friday'];
ReactDOM.render( <Voting pair={pair} winner="Friday" />, document.getElementById('app'));
