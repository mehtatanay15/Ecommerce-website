import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fees = 50;
    const [cartitem, setCartitem] = useState({});
    // Add a state for cart count
    const [cartCount, setCartCount] = useState(0);

    const addtocart = async (itemId, size) => {
        if (!size) {
            toast.error('please select any product size');
            return;
        }
        let cartData = structuredClone(cartitem);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }
        setCartitem(cartData);
    }

    const getCartCount = () => {
        let count = 0;
        for (const items in cartitem) {
            for (const item in cartitem[items]) {
                try {
                    if (cartitem[items][item] > 0) {
                        count += cartitem[items][item];
                    }
                } catch (error) {
                    console.error('Error calculating cart count:', error);
                }
            }
        }
        return count;
    }

    // Update cart count whenever cartitem changes
    useEffect(() => {
        const newCount = getCartCount();
        setCartCount(newCount);
    }, [cartitem]);

    const value = {
        products,
        currency,
        delivery_fees,
        cartitem,
        addtocart,
        cartCount 
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;