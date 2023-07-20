import "./Category.scss";
import { useNavigate } from 'react-router-dom';
import CategoryImage from './images-removebg-preview.png'



const Category = ({ categories }) => {
    const navigate = useNavigate();
    console.log(categories,"rishi")
    // const cat=categories && categories[0]


    return <div className="shop-by-category">
       <div className="categories">
       {categories && categories.map((item) => (
            <div key={item.id} className="category"  onClick={() =>navigate(`/category/${item._id}`)}>
                <img src={CategoryImage} alt=""  />
                {item.Category_Type}
        </div>
       ))}
        
       </div>
    </div>;
};

export default Category;
