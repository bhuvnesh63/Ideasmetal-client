import './MainProduct.css';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../utils/context';
import { fetchData } from '../../../utils/api';
import { Row, Container, Col, Dropdown } from 'react-bootstrap';
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

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className='main-category'>
              <h2 className='side-category'>Categories</h2>
              <Dropdown >
                <Dropdown.Toggle className='category-dropdown' variant="secondary" id="category-dropdown">
                  Select Categories
                </Dropdown.Toggle>
                <Dropdown.Menu className='category-dropdown' >
                  {categories?.categories.map((item) => (
                    <Form.Check className='category-items'
                      key={item.id}
                      type="checkbox"
                      label={item.Category_Type}
                      aria-label={item.Category_Type}
                    />
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <h2 className='side-category'>Material</h2>
              <Dropdown>
                <Dropdown.Toggle className='category-dropdown' variant="secondary" id="material-dropdown">
                  Select Materials
                </Dropdown.Toggle>
                <Dropdown.Menu className='category-dropdown'>
                  {materials?.materials?.map((material) => (
                    <Form.Check className='category-items'
                      key={material.id}
                      type="checkbox"
                      label={material.MaterialType}
                      value={material.id}
                      aria-label={material.MaterialType}
                    />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
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

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default MainProduct;
