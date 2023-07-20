// import "./Category.scss";
import { useNavigate } from 'react-router-dom';
import CategoryImage from './images-removebg-preview.png'
import "./category.css"
import { Col, Container, Row } from 'react-bootstrap';



const Category = ({ categories }) => {
    const navigate = useNavigate();
    console.log(categories,"rishi")
    // const cat=categories && categories[0]


    return <div className="shop-by-category">
        {/* <Container>

       
        <Row>
        <Col sm={3}> */}
       <div className="categories">
       {categories && categories.map((item) => (
            <div key={item.id} className="category"  onClick={() =>navigate(`/category/${item.id}`)}>
               

               
                <img src={CategoryImage} alt=""  />
                <span className='category-type'>
                {item.Category_Type}
                </span>
             
               
        </div>
       ))}
        
       </div>
       {/* </Col>
       </Row>
       </Container> */}
    </div>;
};

export default Category;
