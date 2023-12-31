import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';
import MainCat from './components/MainCat/MainCat';
import Filter from './components/Header/Search/Filter';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import MainProduct from './components/Products/Mainfolder/MainProduct';
import About from './components/About/About';
import Search from './components/Header/Search/Search';
import CartEmail from './components/Cart/shoppingCart/CartEmail';
import SearchProd from './components/Header/Search/SearchProd';
// import SearchProd from './components/Header/Search/SearchProd';
// import Prod from './components/Header/Search/Prod';


function App() {
    return (

        <BrowserRouter>
            <AppContext>
                <Header />
                    <Routes>
                        <Route  path="/" element={ <Home />} />
                        <Route  path="/category/:id" element={ <Category /> } />
                        <Route path='/items' element={<MainProduct />}/>
                        <Route path='/ccc' element={< CartEmail />} />
                        <Route path="/search" element={<Search />} />
                        <Route exact path="/search-results" element={<SearchProd/>} />
                        <Route path='/about' element={<About />}/>
                        <Route path='/item/:id' element={<SingleProduct/>}/>
                    </Routes>
                <Newsletter path="/contact" />
                
                <Footer />
            </AppContext>
        </BrowserRouter>
        
    );
}

export default App;
