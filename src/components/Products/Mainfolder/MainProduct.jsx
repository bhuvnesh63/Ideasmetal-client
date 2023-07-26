import './MainProduct.css';
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../utils/context';
import { fetchData } from '../../../utils/api';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const MainProduct = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(Context);
  const { categories, setCategories } = useContext(Context);
  const { materials, setMaterials } = useContext(Context);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchMaterials();
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

  const fetchMaterials = async () => {
    try {
      const response = await fetchData('/api/v1/materials');
      setMaterials(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!products || products.length === 0) {
    return <div>No Products are available</div>;
  }

  const getCategoryCount = (categoryType) => {
    return products.items.reduce((count, item) => {
      if (item.Category_Name === categoryType) {
        count++;
      }
      return count;
    }, 0);
  };

  const getMaterialCount = (materialType) => {
    return products.items.reduce((count, item) => {
      if (item.material_Name === materialType) {
        count++;
      }
      return count;
    }, 0);
  };

  const handleCategoryChange = (categoryType) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryType)
        ? prevCategories.filter((c) => c !== categoryType)
        : [...prevCategories, categoryType]
    );
  };

  const handleMaterialChange = (materialType) => {
    setSelectedMaterials((prevMaterials) =>
      prevMaterials.includes(materialType)
        ? prevMaterials.filter((m) => m !== materialType)
        : [...prevMaterials, materialType]
    );
  };

  const filterItems = (item) => {
    const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(item.Category_Name);
    const isMaterialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(item.material_Name);
    return isCategoryMatch && isMaterialMatch;
  };

  const filteredItems = products.items.filter(filterItems);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className='main-category'>
              <h2 className='side-category'>Categories</h2>
              <Dropdown>
                <Dropdown.Toggle className='category-dropdown' variant="secondary" id="category-dropdown">
                  Select Categories
                </Dropdown.Toggle>
                <Dropdown.Menu className='category-dropdown'>
                  {categories?.categories.map((item) => (
                    <Form.Check className='category-items'
                      key={item.id}
                      type="checkbox"
                      label={`${item.Category_Type} (${getCategoryCount(item.Category_Type)})`}
                      checked={selectedCategories.includes(item.Category_Type)}
                      onChange={() => handleCategoryChange(item.Category_Type)}
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
                      label={`${material.MaterialType} (${getMaterialCount(material.MaterialType)})`}
                      checked={selectedMaterials.includes(material.MaterialType)}
                      onChange={() => handleMaterialChange(material.MaterialType)}
                    />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>

          <Col sm={8}>
            <div className="shop">
              {filteredItems.length > 0 ? (
                <div className="categories">
                  {filteredItems.map((item) => (
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
              ) : (
                <div>No items available for the selected category and material.</div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainProduct;

