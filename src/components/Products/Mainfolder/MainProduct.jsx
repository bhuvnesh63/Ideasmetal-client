import './MainProduct.scss';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../utils/context';
import { fetchData } from '../../../utils/api';

const MainProduct = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    if (!products) {
      fetchProducts();
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
// console.log(products,"pp")
  return (
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
              <span className="name">{item.Item_Name}</span>
              <span className="name">{item.description}</span>
              <span className="name">{item.Category_Name}</span>
              <span className="name">{item.material_Name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProduct;
