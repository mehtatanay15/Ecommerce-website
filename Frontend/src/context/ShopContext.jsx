import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fees = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartitem, setCartitem] = useState([]);
  const navigate = useNavigate();

  // Add a state for cart count
  const [cartCount, setCartCount] = useState(0);

  const addtocart = async (itemId, size) => {
    if (!size) {
      toast.error("please select any product size");
      return;
    }
    let cartData = structuredClone(cartitem);
    console.log(cartData);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartitem(cartData);
  };

  const getCartCount = () => {
    let count = 0;
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            count += cartitem[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return count;
  };

  // Update cart count whenever cartitem changes
  useEffect(() => {
    const newCount = getCartCount();
    setCartCount(newCount);
  }, [cartitem]);

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartitem);
    cartData[itemId][size] = quantity;
    setCartitem(cartData);
  };

  const getCartAmout = () => {
    let total = 0;
    for (const items in cartitem) {
      let iteminfo = products.find((product) => product._id === items);
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            total += iteminfo.price * cartitem[items][item];
          }
        } catch (error) {}
      }
    }
    return total;
  };

  const value = {
    products,
    currency,
    delivery_fees,
    cartitem,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addtocart,
    cartCount,
    updateQuantity,
    getCartAmout,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
