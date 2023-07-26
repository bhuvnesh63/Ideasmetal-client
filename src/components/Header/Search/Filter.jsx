import React, { useState, useEffect, useContext } from 'react';
import { fetchData } from '../../../utils/api';
import { Context } from '../../../utils/context';
import './Filter.scss';
import axios from 'axios';

const Filter = ({ handleChange }) => {

  const { materials, setMaterials } = useContext(Context);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await fetchData('/api/v1/materials');
      setMaterials(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="main">
        <div>
          <div className="input">
            {materials?.materials?.map((material) => (
              <div key={material.id}>
                <input className='materil-input' type="checkbox" key={material.id} value={material.MaterialType} name="type" id={material.id} onChange={handleChange} />
                <label htmlFor={material.id}>{material.MaterialType}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
