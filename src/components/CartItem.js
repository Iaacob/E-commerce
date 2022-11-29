import {React, useContext} from "react"
import { Icon } from '@iconify/react';
import {CartContext} from "./CartContext"

const CartItem = ({item}) => {
  const { DeleteFromCart } = useContext(CartContext)

  return (
<>
      <div className="d-flex align-items-center mb-5">
        <div className="flex-shrink-0">
          <img src={item.img}
            className="img-fluid" style={{ width: '150px' }} alt="Generic placeholder image" />
        </div> 
        <div className="flex-grow-1 ms-3">

          <h5 className="">{item.title}</h5>

          <div className="d-flex align-items-center">
            <p className="fw-bold mb-0 me-5 pe-3">${item.precio}</p>
            <div className="def-number-input d-flex flex-row align-items-center number-input safari_only">
              <button className="minus"  value="-">-</button>
              <input className="quantity fw-bold text-black" min="0" name="quantity" value={item.cantidad}
                type="number" />
              <button className="plus" value="+">+</button>
            </div>        
            <button onClick={() => DeleteFromCart(item)} className="btn remove"><Icon icon="dashicons:remove" rotate={2} hFlip={true} vFlip={true} /></button>

          </div>
        </div>
      </div>
    </>  )
}


export default CartItem