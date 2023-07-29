import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import prod from "../../../assets/products/banner-img.png"
import './ShoppingCartItems.scss'
import { Context } from '../../../utils/context'
const ShoppingCartItems = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    return (
        <div className='cart-products'>
            {cartItems.map(item => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={`http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/images/${item.image}`}
                            alt={item.Item_Name} />
                    </div>
                    <div className="prod-details">
                        <span className='name'>
                            {item.Item_Name}
                        </span>
                        <div>{item.material_Name}</div>
                        <div>{item.id}</div>
                        <MdClose className='close-btn' onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCartItems
