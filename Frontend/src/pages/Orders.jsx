import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text=2xl ">
        <Title text1={"my"} text2={"orders"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row items-start justify-between gap-4"
          >
            <div className="text-sm flex items-start gap-6">
              <img src={item.image[0]} className="w-26 sm:w-20" alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-centerga-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p className="px-2">quantity : 1</p>
                  <p> size : M</p>
                </div>
                <p mt-2>
                  date <span className="text-gray-400">25-06-2023</span>
                </p>
              </div>
            </div>

            <div className="md:2-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p>ready to ship</p>
              </div>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">
              track order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
