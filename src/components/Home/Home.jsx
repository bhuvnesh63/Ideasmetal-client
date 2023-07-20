import "./Home.scss";

import { useEffect, useContext } from "react";

import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

import { fetchData } from '../../utils/api'

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchData("/api/v1/items").then((res) => {
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchData("/api/v1/categories").then((res) => {
            setCategories(res);
        });
    };
    console.log(categories)
    console.log(products)
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories?.categories} />
                <Products products={products?.items} headingText="Popular Products" />
            </div>
        </div>
    </div>
};

export default Home;
