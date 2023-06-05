import React from 'react'


function CounterReducer(state=1,action) {
    switch(action.type){
        case "INCREAMENT": 
            return state+1;
        case "DECREAMENT":
            return state-1;
        case "RESET":
            return state=0;
        default:
            return state;
    }
}
export default CounterReducer;