import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
//Y we use bindActionCreators
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    // when we want to short the bellow line dispatch(actionCreators.depositMoney(100))
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div style={{justifyContent:"space-between"}}>
      <h1>Deposit/withdraw Money </h1>
      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
         Update Balance
      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>

      {/* <button className="btn btn-primary" onClick={()=>depositMoney(100)}>+</button>
         Update Balance(action Creators)
      <button className="btn btn-primary" onClick={()=>withdrawMoney(100)}>-</button> */}
    </div>
  )
}

export default Shop
