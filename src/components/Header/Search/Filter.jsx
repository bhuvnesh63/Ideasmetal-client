import React, { useState, useEffect, useContext } from 'react';
import { fetchData } from '../../../utils/api';
import { Context } from '../../../utils/context';
import './Filter.scss';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

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
    <Container>
      <Row>
      {materials?.materials?.map((material) => (
        <Col sm={3}>
           <div key={material.id}>
                <input className='materil-input' type="checkbox" key={material.id} value={material.MaterialType} name="type" id={material.id} onChange={handleChange} />
                <label className='material-name' htmlFor={material.id}>{material.MaterialType}</label>
              </div>

        </Col>
        ))}
      </Row>
      
    </Container>

      {/* <div className="main"> */}
        
          {/* <div className="input"> */}
            
             
          
          {/* </div> */}
      
      {/* </div> */}
    </>
  );
};

export default Filter;
