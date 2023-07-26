import "./Cart.scss";
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
const Cart = ({ setShowCart }) => {
    const navigate = useNavigate();
    return <div className="cart-panel">
        <div className="opac-layer">
        </div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">
                    IDEASMETAL.
                </span>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">
                        close
                    </span>
                </span>
            </div>
            <hr />
            <ul className="left">
                <li onClick={() => setShowCart(false)}><Link className="link" to='/'>Home</Link></li>
                <li onClick={() => setShowCart(false)}><Link className="link" to='/about'>About</Link></li>
                <li onClick={() => setShowCart(false)}><Link className="link" to="/items">All Products</Link></li>
                <li onClick={() => setShowCart(false)}><Link className="link" to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    </div>;
};
export default Cart;
