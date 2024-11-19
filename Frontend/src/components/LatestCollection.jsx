import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [latestProducts, setLatestProduct] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"latest"} text2={"collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md-text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          deserunt! Doloribus amet incidunt numquam eum?
        </p>
      </div>

      {/* product show */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
