// import "./Products.scss";
import Product from "./Product/Product";
import "./products.scss"


// import Product from './Product/Product'

const Products = ({ products, innerPage, headingText }) => {
    console.log(products, "deep")
    return <><div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            {products && products?.map(item => (
                <Product key={item.id} id={item._id} data={item} />

            ))}
        </div>
    </div>
    </>
};

export default Products;
