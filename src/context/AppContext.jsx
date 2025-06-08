import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const currency = "₹ "
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState(false)

    const [cartItems, setCartItems] = useState({})

    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    // Add products to cart

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
        toast.success("Added to cart");
    };

    //update cart item quantity

    const updateCartItem = (itemId) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] += 1;
        setCartItems(cartData);
        toast.success("Cart Updated")
    }

    //remove products from cart

   const removeFromcart = async (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        cartData[itemId] -= 1;
        if (cartData[itemId] === 0) {
            delete cartData[itemId];
        }

        setCartItems(cartData); // first update the state
        toast.success("Removed from the cart"); // then show toast
    }
};


    useEffect(() => {
        fetchProducts()
    }, [])

    const value = {
        navigate, user, setUser,
        isSeller, setIsSeller,
        setShowUserLogin, showUserLogin,
        products, currency, addToCart,
        updateCartItem, removeFromcart, cartItems
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = () => {
    return useContext(AppContext)
}