import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreament, reset } from '../action/Actions';

export default function Counter() {
    const counter=useSelector((state)=>state.conterdata);
    const dispatch=useDispatch();
    
    const increamnet =()=>{
        let increamentObj=increament();
        dispatch(increamentObj);
    }
    const resetfunction =()=>{
        let restObj=reset();
        dispatch(restObj);
    }

    const decreamnet =()=>{
        let increamentObj=decreament();
        dispatch(increamentObj);
    }
  return <>
    <h1>Counter Is: {counter}</h1>
    <button onClick={increamnet}>Increamnet</button>
    <button onClick={resetfunction}>Reset</button>
    <button onClick={decreamnet}>Decreament</button>
  </>
}
