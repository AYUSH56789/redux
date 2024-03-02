// step - 6

import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import {incAction, decAction} from './actions/index'
export default function App() {
  // useSelector to select state which return all values
  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className=" text-center m-5">
      <h1>Increment and Decrement using Redux</h1>
      <div className="btn-group text-center m-5" role="group" aria-label="Basic example">
        <button type="button" onClick={()=>dispatch(decAction(2))} className="btn btn-outline-success">-1</button>
        <button type="button" className="btn btn-light disabled border" >{myState}</button>
        <button type="button" onClick={()=>dispatch(incAction(4))} className="btn btn-outline-success">+1</button>
      </div>
    </div>
  )
}
