import "./Search.scss";

import { MdClose } from "react-icons/md";
import useFetch from '../../../hooks/useFetch';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Filter from "./Filter";
import SearchProd from "./SearchProd";

const Search = ({ setShowShearch }) => {

  const  [query , setQuery] = useState();
  const navigate = useNavigate();
  const [filter, setFilter] = useState([]);
  // let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
  let { data } = useFetch(`/api/v1/items?Category_Name=`);
  const [filterdata, setFilterdata] = useState([]);

  const onChange = (e) =>{
    setQuery(e.target.value);
  };
  



  const arr = []
  const handelChange = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value])
    } else {

      const arr = filter.filter(value => value !== e.target.value)
      setFilter(arr)
    }
  }
  
  const handelfilterdata = () => {

    const t = data?.data.filter((value)=>{
      return filter.includes(value?.attributes?.material)
     

    })
    
    if(filter.length){
      setFilterdata(t)
    }else{
      setFilterdata(data?.data)
    }
    
  }


  useEffect(()=>{
    if(data?.data.length>0){
      setFilterdata(data?.data)
    }
    handelfilterdata();
  },[filter,data?.data, handelfilterdata])
  

  if(!query){
    data = null;
  }

  
  return (
    <>
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Products" value={query} onChange={onChange} />
        <MdClose onClick={() => navigate('/')} />
      </div>
      <div className="main-filt">
        <div className="ff">
          <Filter data={filterdata} handelChange={handelChange}/>
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {filterdata?.map(item => (
            <div key={item.id} className="search-result-item" onClick={() => {
              navigate("/product/" + item.id)
              setShowShearch(false);
            }}>
            <div className="img-container">
              <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <span className="desc">{item.attributes.desc}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
      </div>
    </div>
      <SearchProd />
    </>
  );
};

export default Search;
