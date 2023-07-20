import "./Category.scss";
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import useFetch from "../../hooks/useFetch";


const Category = () => {

    const {id} = useParams();
    console.log(id, 'hhhhhh')
    const {data} = useFetch(`/api/v1/items?Category_Name=${id}`);
    // console.log(data,'jjjjjj');
    return <div className="category-main-content">
         <div className="layout">
            <div className="category-title">
                {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </div>
            <Products innerPage={true} products={data} />
         </div>
    </div>;
};
export default Category;
