import './MainProduct.css';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../utils/context';
import { fetchData } from '../../../utils/api';
import { Row, Container, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';



const MainProduct = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(Context);
  const { categories, setCategories } = useContext(Context);
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




  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  }, []);



  useEffect(() => {
    if (!categories) {
      fetchCategories();
    }
  }, []);



  const fetchProducts = async () => {
    try {
      const response = await fetchData('/api/v1/items');
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetchData('/api/v1/categories');
      setCategories(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }


  // useEffect(() => {
  //   const fetchMaterials = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/api/v1/materials');
  //       setMaterials(response.data);
  //     } catch (error) {
  //       console.error('Error fetching materials:', error);
  //     }
  //   };

  //   fetchMaterials();
  // }, []);


  // console.log(products,"pp")
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className='main-category'>



              <h2 className='side-category'>Categories</h2>
              <Form.Select className='Category-name' >

                <option>Open this select menu</option>
                {categories?.categories.map((item) => (
                  <option >
                    <Form.Check aria-label="option 1" />
                    {item.Category_Type} </option>
                ))}
              </Form.Select>



              <h2 className='side-category'>Material</h2>
              <Form.Select className='Category-name' >

                <option>Open this select menu</option>
                {materials?.materials?.map((material) => (
                  <option value="1">{material.MaterialType}</option>
                ))}

              </Form.Select>




            </div>
          </Col>




          <Col sm={8}>
            <div className="shop">
              <div className="categories">
                {products?.items.map((item) => (
                  <div
                    key={item.id}
                    className="product-card"
                    onClick={() => navigate(`/item/${item._id}`)}
                  >
                    <div className="thumbnail">
                      <img
                        src="https://ecommerce.rrwpthemes.com/wp-content/uploads/2021/04/9e3a9361-404f-444a-84c1-f3e93259af0e-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="prod-details">
                      <span className="name">{item.Category_Name}</span>
                      <span className="item-name">{item.Item_Name}</span>
                      {/* <span className="name">{item.description}</span> 
            <span className="name">{item.material_Name}</span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

        </Row>
      </Container>



    </>
    // <div className="shop">
    //   <div className="categories">
    //     {products?.items.map((item) => (
    //       <div
    //         key={item.id}
    //         className="product-card"
    //         onClick={() => navigate(`/item/${item._id}`)}
    //       >
    //         <div className="thumbnail">
    //           <img
    //             src="https://ecommerce.rrwpthemes.com/wp-content/uploads/2021/04/9e3a9361-404f-444a-84c1-f3e93259af0e-1.jpg"
    //             alt=""
    //           />
    //         </div>
    //         <div className="prod-details">
    //         <span className="name">{item.Category_Name}</span>
    //           <span className="item-name">{item.Item_Name}</span>
    //           <span className="name">{item.description}</span> 
    //         <span className="name">{item.material_Name}</span>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default MainProduct;
