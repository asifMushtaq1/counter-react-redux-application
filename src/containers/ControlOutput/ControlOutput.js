import React from 'react';
import classes from './ControlOutput.css'

const CounterOutput = (props) => (
    <div className = {classes.Counter}>
       <h2>Current Counter : {props.counter}</h2>
    </div>
  );


export default CounterOutput;