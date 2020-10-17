import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
  counter : 0,
}

const controlReducer = (state = initialState , action ) => {

  switch (action.type){
    case actionTypes.INCREMENT:
        // const newState = Object.assign({},state);
       //  newState.counter = state.counter + 1;
      //   return newState;
      //OR
    //  return {
    //   ...state,
    //   counter : state.counter + 1
    // }

    return updatedObject(state, {counter : state.counter + 1});
            
    case actionTypes.DECREMENT:
        return updatedObject(state, {counter : state.counter - 1})
        // return {
        //        ...state,
        //        counter : state.counter - 1
        //      }
    case actionTypes.ADD:
        return updatedObject(state, {counter :state.counter +  action.value});
        // return {
        //   ...state,
        //        counter : state.counter +  action.value
        // }
    case actionTypes.SUB:
        return updatedObject(state, {counter :state.counter -  action.value})
        // return {
        //   ...state,
        //        counter : state.counter -  action.value
        // }
       
      }
      return state;
}
  // if ( action.type === "INCREMENT") {
  //   return {
  //     counter : state.counter + 1
  //   }
  // }
  // if ( action.type === "DECREMENT" ) {
  //   return {
  //     counter : state.counter - 1
  //   }
  // }
  // if ( action.type === "ADD" ) {
  //   return {
  //     counter : state.counter + action.value
  //   }
  // }
  // if ( action.type === "SUB" ) {
  //   return {
  //     counter : state.counter - action.value
  //   }
  // }
  // return state;


export default controlReducer;