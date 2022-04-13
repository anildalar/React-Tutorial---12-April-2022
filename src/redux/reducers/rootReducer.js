import { A, B, C, D } from "../constants";
import initialState from "../initialData/data";


let rootReducer = (oldstate=initialState,action)=>{
    let newState = oldstate
    switch(action.type){
      case A:
        return {
            ...newState, // spread operator
            name:'Kiran'
        };
        break;
      case B:
        return newState;
        break;
      case C:
        return newState;
        break;
      case D:
        return newState;
        break;
      default:
        return newState;
    }
  }

export default rootReducer;