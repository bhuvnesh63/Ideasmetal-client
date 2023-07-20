import "./Product.scss";
// import "./product.css"

import { useNavigate } from 'react-router-dom';
import Productmage from './images-removebg-preview.png'


const Product = ({ id, data }) => {
    const navigate = useNavigate();
    return <div className="product-card" onClick={() => navigate("/item/" + id)}>
        <div className="thumbnail mt-5">
            <img src={Productmage} alt="" />
        </div>
            <div className="prod-details">
              
                {/* <span className="name">{data.description}</span> */}
                <span className="name">{data.Category_Name} </span>
                {/* <span className="float-end">{data.material_Name}</span> */}
                <span className="item-name ">{data.Item_Name}</span>
                {/* <span className="name-material">{data.material_Name}</span> */}
                {/* <span className="name">Material : {data.material}</span> */}
                {/* <span className="pric">&#8377;{data.price}</span> */}
                {/* <span className="pric">&#8377;{data.desc}</span> */}
            </div>
    </div>;
};

export default Product;
