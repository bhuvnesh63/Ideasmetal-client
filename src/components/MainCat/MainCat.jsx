import '../Category/Category.scss';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/context';
import { fetchData } from '../../utils/api';

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
    <div className="shop-by-category">
      <div className="categories">
        {categories?.categories.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className='category'><img src='https://ecommerce.rrwpthemes.com/wp-content/uploads/2023/03/4acb73aa-262e-436c-8658-9e847fea7ca1-removebg-preview.png'/><span>{item.Category_Type}</span> </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCat;
