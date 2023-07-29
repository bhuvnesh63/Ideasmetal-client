import { useNavigate } from 'react-router-dom';
import { Context } from "../../../utils/context";
import { useContext } from "react";


import './Searchpro.scss'

import React from 'react'
import useFetch from '../../../hooks/useFetch';

const SearchProd = () => {

  const navigate = useNavigate();
  const { products } = useContext(Context);
  let { data } = useFetch(`/api/v1/items`);

  console.log(products, "hero")
  return (
    <div className="shop">
      <div className="categories">
        {products?.items?.data?.map((item) => (
          <div key={item.id} className="product-card" >
            <div className="thumbnail">
              <img src={`http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/images/${item.image}`}
                alt={item.Item_Name} />
            </div>
            <div className="prod-details" >
              <span className="name">{item.Item_Name}</span>
              <span className="name">{item.Category_Name}</span>
              <span className="name">{item.description}</span>
              <span className="name">Material : {item.material_Name}</span>
              {/* <span className="pric">&#8377;{data.price}</span> */}
              {/* <span className="pric">&#8377;{data.desc}</span> */}          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchProd
