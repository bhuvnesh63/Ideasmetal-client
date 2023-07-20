import { useNavigate } from 'react-router-dom';
import { Context } from "../../../utils/context";
import { useContext } from "react";


import './Searchpro.scss'

import React from 'react'
import useFetch from '../../../hooks/useFetch';

const SearchProd = () => {

    const navigate = useNavigate();
    const { products } = useContext(Context);
  let { data } = useFetch(`/api/products?populate`);


  return (
    <div className="shop">
<div className="categories">
{ products?.data?.map((item) => (
     <div key={item.id} className="product-card" onClick={() =>navigate(`/category/${item.id}`)}>
     <div className="thumbnail">
            <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
        </div>
     <div className="prod-details">
                 <span className="name">{item.attributes.title}</span>
                 <span className="name">Material : {item.attributes.material}</span>
                {/* <span className="pric">&#8377;{data.price}</span> */}
                {/* <span className="pric">&#8377;{data.desc}</span> */}          </div>
    </div>
))}
</div>
</div>
  )
}

export default SearchProd



{/* <span className="pric">&#8377;{data.price}</span> */}
                {/* <span className="pric">&#8377;{data.desc}</span> */}  