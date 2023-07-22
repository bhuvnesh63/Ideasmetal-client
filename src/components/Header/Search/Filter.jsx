import React, { useState, useEffect } from 'react';
import './Filter.scss';
import axios from 'axios';

const Filter = ({handleChange}) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/materials');
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
      }
    };

    fetchMaterials();
  }, []);

  
  return (
    <>
      <div className="main">
        <div>
          <div className="input">
            {materials?.materials?.map((material) => (
              <div key={material.id}>
                <input type="checkbox" key={material.id} value={material.MaterialType} name="type" id={material.id} onChange={handleChange}/>
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
