import React from 'react';

import classes from './CounterControls.css';
const CounterControls = (props) => (
  <div className = {classes.CounterControls}>
     <h3 onClick = {props.clicked}>{props.label}</h3>
  </div>
)

export default CounterControls;