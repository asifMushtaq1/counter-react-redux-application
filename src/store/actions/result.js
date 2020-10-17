import * as actionTypes from '../actions/actionTypes';


export const saveResult = (res) => {
  //const updatedResult = res * 2;
  return {
    type : actionTypes.STORE_RESULT,
    // result : updatedResult
    result : res
  }
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
   setTimeout( () => {
    //  const oldCounter = getState().ctrReducer.counter;
    //  console.log(oldCounter);
     dispatch(saveResult(res));
   }, 1000)
  }
}

export const deleteResult = (resElId) => {
  return {
    type : actionTypes.DELETE_RESULT,
    resultELId : resElId
  }
}