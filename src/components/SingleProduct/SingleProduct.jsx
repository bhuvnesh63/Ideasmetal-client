import "./SingleProduct.scss";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterest, FaCartPlus } from 'react-icons/fa';

import prod from '../../assets/products/speaker-prod-1.webp';

import RelatedProducts from './RelatedProducts/RelatedProducts';

import { useState, useContext } from "react";

import { useParams } from "react-router-dom";

import useFetch from '../../hooks/useFetch';


import { Context } from "../../utils/context";




const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    // console.log("idd",id)
    const { data } = useFetch(`/api/v1/item/${id}`);
    // console.log("ffdddddddd",data

    const { handleAddToCart } = useContext(Context);

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    }
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    }

    if (!data) return;
    const product = data.item
    // console.log(product,"kkkkkkkkkkkkkkkkkkkkkkkkk")


    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img  src={`http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/images/${product.image}`}  alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.Item_Name}</span>
                    <span className="material">Material : <span className="spn1">{product.material_Name}</span></span>

                    {/* <span className="price">&#8377;{product.price}</span> */}
                    <span className="desc">{product.desc}</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart-button" onClick={() => {
                            handleAddToCart(product, quantity, id)
                            setQuantity(1);
                        }}>
                            <FaCartPlus size={20} />
                            ADD TO CART
                        </button>
                    </div>
                    <div className="info-item">
                        <span className="text-bold">
                            Category :
                            <span className="spn1"> {product.Category_Name}</span>
                        </span>
                        <hr />
                        <span className="text-bold">
                            Description :
                            <span className="spn1"> {product.description}</span>
                        </span>
                    </div>

                </div>
            </div>
            {/* <RelatedProducts productId = {id} categoryId = {product.categories.data[0].id} /> */}
        </div>
    </div>;
};

export default SingleProduct;
