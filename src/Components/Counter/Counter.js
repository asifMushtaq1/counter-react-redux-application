import React, { Component } from 'react';

import * as actionCreators from '../../store/actions/index.js';

import CounterOutput from '../../containers/ControlOutput/ControlOutput'
import CounterControls from '../../containers/ControlCounter/CounterControls'
import { connect } from 'react-redux';

class Counter extends Component {
  state = {
    counter : 0
  }
  counterChangedHandler = (action, value) => {
          switch( action ){
              case 'inc': 
              this.setState((prevState) => {return {counter : prevState.counter + 1}});
              break;

              case 'dec': 
              this.setState((prevState) => {return {counter : prevState.counter - 1}});
              break;

              case 'add': 
              this.setState((prevState) => {return {counter : prevState.counter + value}});
              break;

              case 'sub': 
              this.setState((prevState) => {return {counter : prevState.counter - value}});
              break;

          }
  }
  render() {
    return (
      <div>
        <CounterOutput counter = {this.props.ctr}/>

        <CounterControls label = 'Increment' 
                         clicked = {this.props.onIncrementCounter}/>

        <CounterControls label = 'Decrement' 
                         clicked = {this.props.onDecrementCounter}/>

        <CounterControls label = 'Add 10' 
                         clicked = {this.props.onAddCounter}/>

        <CounterControls label = 'Remove 5' 
                         clicked = {this.props.onSubtractCounter}/>

                         <button onClick = {() => this.props.onStoreResults(this.props.ctr)}>Store Results</button>
                         <ul>
                           {this.props.results.map(res => (
                              <li key = {res.id} 
                              onClick = {() => this.props.onDeleteResults(res.id)}>{res.value}
                              </li>
                           ))}
                         </ul>
      </div>
    )
  }
}

const mapStatetoProps = state => {
    return {
      ctr : state.ctrReducer.counter,
      results : state.resReducer.results
    }
}

const mapDispatchToProps = dispatch => {
  return {
    // onIncrementCounter : () => dispatch({type : actionTypes.INCREMENT}),
    // onDecrementCounter : () => dispatch({type : actionTypes.DECREMENT}),
    // onAddCounter : () => dispatch({type : actionTypes.ADD , value : 10}),
    // onSubtractCounter : () => dispatch({type : actionTypes.SUB, value : 5}),
    // onStoreResults : (result) => dispatch({type : actionTypes.STORE_RESULT, 
    //   result : result}),
    // onDeleteResults : (id) => dispatch({type : actionTypes.DELETE_RESULT , resultELId : id})
    onIncrementCounter : () =>   dispatch(actionCreators.increment()),
    onDecrementCounter : () =>   dispatch(actionCreators.decrement()),
    onAddCounter       : () =>   dispatch(actionCreators.add(10)),
    onSubtractCounter  : () =>   dispatch(actionCreators.sub(5)),
    onStoreResults     : (res) => dispatch(actionCreators.storeResult(res)),
    onDeleteResults    : (id) => dispatch(actionCreators.deleteResult(id))


  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);
