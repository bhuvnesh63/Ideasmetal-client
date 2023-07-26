import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [materials, setMaterials] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const handleAddToCart = (product, quantity) => {
        const existingItem = cartItems.find((item) => item._id === product._id);

        if (existingItem) {
            const updatedCartItems = cartItems.map((item) => {
                if (item._id === product._id) {
                    return { ...item, quantity: item.quantity + quantity };
                } else {
                    return item;
                }
            });

            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
    };




    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(p => p._id !== product._id)
        setCartItems(items)
    }



    const handleCartProductQuantity = (action, item) => {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem._id === item._id) {
            let newQuantity = cartItem.quantity;
            if (action === 'inc') {
              newQuantity += 1;
            } else if (action === 'dec') {
              newQuantity -= 1;
              if (newQuantity < 0) {
                newQuantity = 0;
              }
            }
            return { ...cartItem, quantity: newQuantity };
          }
          return cartItem;
        });
    
        setCartItems(updatedCartItems);
      };
    

    useEffect(() => {
        console.log(cartItems, "deepanshu");
    }, [cartItems]);

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                materials,
                setMaterials,
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuantity
            }}>
            {children}
        </Context.Provider>
    )
}


export default AppContext;