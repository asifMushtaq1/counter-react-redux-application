import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
  results : []
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultELId);
  return updatedObject(state, { results : updatedArray})
};
const resultReducer = (state = initialState , action) => {

  switch (action.type){
        case actionTypes.STORE_RESULT:
          return updatedObject(state, { results : state.results.concat({id : new Date() , value : action.result})})
          // return {
          //   ...state,
          //   results : state.results.concat({id : new Date() , value : action.result * 2})
          // }

          case actionTypes.DELETE_RESULT:
             return deleteResult(state, action)
            // const updatedArray = state.results.filter(result => 
            //   result.id !== action.resultELId);
            //   return updatedObject(state, { results : updatedArray})
            //OR
          // return {
          //    ...state,
          //    results : updatedArray
            
          // }
      }
      return state;
}
export default resultReducer;
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


