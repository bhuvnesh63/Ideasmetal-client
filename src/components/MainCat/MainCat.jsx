// import '../Category/Category.scss';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/context';
import { fetchData } from '../../utils/api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./maincat.css"
import { Col, Container, Row } from 'react-bootstrap';

const MainCat = () => {
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(Context);

  useEffect(() => {
    if (!categories) {
      fetchCategories();
    }
  }, []);

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
    <Container fluid>
       <Row>
    




      <div className="shop-by-category">
        <div className="categories">
        {/* <Col sm={3}>  */}
          {categories?.categories.map((item) => (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`/category/${item.id}`)}
            >

              <Card className='category-card'>
                <Card.Img variant="top" style={{ height: "200px" }} src="https://ecommerce.rrwpthemes.com/wp-content/uploads/2023/03/4acb73aa-262e-436c-8658-9e847fea7ca1-removebg-preview.png" />
                <Card.Body>
                  <Card.Title className='category-cardName'>{item.Category_Type}</Card.Title>
                  {/* <Card.Text> {item.Category_Type} </Card.Text> */}
                  {/* <Button variant="success">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          ))}
           {/* </Col> */}
          {/* {categories?.categories.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className='category'>
            <img src='https://ecommerce.rrwpthemes.com/wp-content/uploads/2023/03/4acb73aa-262e-436c-8658-9e847fea7ca1-removebg-preview.png'/>
            <span>{item.Category_Type}</span> 
            </div>
            
          </div>
        ))} */}
        </div>
      </div>
     
  </Row>
    </Container>
  );
};

export default MainCat;

{/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}
