import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md' 
import prod from "../../../assets/products/banner-img.png"
import './ShoppingCartItems.scss'
import { Context } from '../../../utils/context'
const ShoppingCartItems = () => {
    const {cartItems,handleRemoveFromCart,handleCartProductQuantity} = useContext(Context);
  return (
    <div className='cart-products'>
        {cartItems.map(item => (
        <div key={item.id} className="cart-product">
            <div className="img-container">
                <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />    
            </div>   
            <div className="prod-details">
                <span className='name'>
                    {item.attributes.title}
                </span>
                <div>{item.attributes.material}</div>
                <div>{item.id}</div>
                <MdClose className='close-btn' onClick={() => handleRemoveFromCart(item)}/> 
                <div className="quantity-buttons">
                            <span onClick={()=>handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={()=>handleCartProductQuantity('inc', item)}>+</span>
                    </div>
            </div> 
        </div>    
        ))}  
    </div>
  )
}

export default ShoppingCartItems
