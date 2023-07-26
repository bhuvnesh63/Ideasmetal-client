import "./Search.scss";

import { MdClose } from "react-icons/md";
import useFetch from '../../../hooks/useFetch';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Filter from "./Filter";
import SearchProd from "./SearchProd";

const Search = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const [filter, setFilter] = useState([]);
  let { data } = useFetch(`/api/v1/items`);
  const [filterdata, setFilterdata] = useState([]);
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const arr = []
  const handleChange = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value])
    } else {
      const arr = filter.filter(value => value !== e.target.value)
      setFilter(arr)
    }
  }
  const handelfilterdata = () => {
    const t = data?.items.filter((value) => {
      return filter.includes(value?.material_Name) && value.Item_Name.includes(query)
    })
    if (filter && filter.length) {
      setFilterdata(t)
    }
  }
  const handleSearchOnEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const t = data?.items.filter((value) => {
        return value.Item_Name.includes(query)
      })
      setFilterdata(t)
    }
  }
  if (!query) {
    data = null;
  }
  useEffect(() => {
    if (filter && filter.length) {
      handelfilterdata()
    }
  }, [filter])

  return (
    <>
      <div className="search-model">
        <div className="form-field">
          <input type="text" autoFocus placeholder="Search For Products" value={query} onChange={onChange} onKeyDown={(e) => handleSearchOnEnter(e)} />
          <MdClose onClick={() => navigate('/')} />
        </div>
        <div className="main-filt">
          <div className="ff">
            <Filter data={filterdata} handleChange={handleChange} />
          </div>
          <div className="search-result-content">
            <div className="search-results">
              {filterdata?.map(item => (
                <div key={item.id} className="search-result-item" onClick={() => {
                  navigate("/item/" + item._id)
                  // setShowShearch(false);
                }}>
                  <div className="img-container">
                    {/* <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" /> */}
                  </div>
                  <div className="prod-details">
                    <span className="name">{item.Item_Name}</span>
                    <span className="desc">{item.description}</span>
                    <span className="desc">{item.material_Name}</span>
                    <span className="desc">{item.Category_Name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <SearchProd /> */}
    </>
  );
};

export default Search;
