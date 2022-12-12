import React from 'react'

import classes from './Order.module.css';

const CartItem = (props) => {
  const {item} = props;
  return (
    <tr>
        <td valign="middle">{item.id}</td>
        <td valign="middle">{item.Category}</td>
        <td valign="middle">{item.weight}</td>
        <td valign="middle">
            <p className={classes.qty}><span>{"x  "}</span>{item.quantity}</p> 
        </td>
        <td valign="middle">{item.price} Pkr</td>
        <td className={`${classes.item} px-2`}>
<img src={item.Image}alt=""/> 
                {/* } */}
        </td>
        <td  valign="middle">{item.pID}</td>
        <td className={classes.btn} valign="middle">{"Edit"}</td>
        <td className={classes.btnDelete} valign="middle"><span className="pe-1">X</span>Delete</td>
    </tr>
  )
}

export default CartItem