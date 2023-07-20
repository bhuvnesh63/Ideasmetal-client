import "./shoppingCart.scss";

import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs';

import { Link, useNavigate } from "react-router-dom";
// import { CgShoppingCart } from "react-icons/cg";

import ShoppingCartItems from "./ShoppingCartItems";
import { useContext, useState } from "react";

import { Context } from "../../../utils/context";
import CartEmail from "./CartEmail";
const ShoppingCart = ({ setShowShoppingCart }) => {
    const {cartItems} = useContext(Context);
    const navigate = useNavigate()
    return <div className="cart-panel">
        <div className="opac-layer" onClick={() => setShowShoppingCart(false)}>
        </div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">
                    Shopping Cart
                </span>
                <span className="close-btn" onClick={() => setShowShoppingCart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>
            <hr />
            {!cartItems?.length &&(<div className="empty-cart">
                <BsCartX />
                <span>No Products In The Cart</span>
                <button className="return-btn" onClick={() => setShowShoppingCart(false)}>
                    RETURN TO SHOP  
                </button>
            </div>)}
            {!!cartItems?.length &&(<>
                <ShoppingCartItems />
                <div className="footer">
                    <div className="button">
                    <div className="button">
                        <button className="send-mail" >
                            <CartEmail />
                        </button>
                    </div>
                    </div>
                </div>
            </>)}
        </div>
    </div>
};
export default ShoppingCart;
