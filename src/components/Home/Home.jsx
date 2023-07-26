import "./Home.scss";
import { useEffect, useContext } from "react";
import Banner from './Banner/Banner'
import Products from "../Products/Products";
import { Context } from "../../utils/context";

import { fetchData } from '../../utils/api'

const Home = () => {
    const {  products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();

    }, []);

    const getProducts = () => {
        fetchData("/api/v1/items").then((res) => {
            setProducts(res);
        });
    };

    console.log(products)
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Products products={products?.items} headingText="Popular Products" />
            </div>
        </div>
    </div>
};

export default Home;
