import "./Header.scss";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from 'react-icons/tb';
import { AiOutlineMenu} from 'react-icons/ai';

import Search from './Search/Search';
import Cart from '../Cart/Cart';
import ShoppingCart from "../Cart/shoppingCart/shoppingCart";
import { Context } from "../../utils/context";
import { MdShoppingCart } from "react-icons/md";




const Header = ({}) => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showShearch, setShowSearch] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const {cartCount} = useContext(Context);


    const navigate = useNavigate();
    const handleScroll = () => {
        
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        } else{
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

    }, [])

    return <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/about')}>About</li>
                        <li onClick={() => navigate('/category')}>Categories</li>
                        <li onClick={() => navigate('/items')}>All Products</li>
                        <li onClick={() => navigate('/contact')}>Contact Us</li>
                    </ul>
                    <div className="center" onClick={() => navigate('/')}>
                    IDEASMETAL.
                    </div>
                    <div className="right">
                        <span onClick={() =>  navigate('/search')}>
                        <TbSearch/>
                        </span>
                        <span>
                            <MdShoppingCart onClick={() => setShowShoppingCart(true)}/>
                            {!!cartCount &&<span>{cartCount}</span>}
                        </span>
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                        <AiOutlineMenu/>
                        </span>
                    </div>
                </div>
           </header>
           {showCart && <Cart setShowCart={setShowCart}/>}
           { showShearch && <Search setShowShearch={setShowSearch}/>}
           { showShoppingCart && <ShoppingCart setShowShoppingCart={setShowShoppingCart}/>}
           </>;
};

export default Header;
