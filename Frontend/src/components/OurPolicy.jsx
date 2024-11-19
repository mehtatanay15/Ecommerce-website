import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">esay exchange policy</p>
        <p className="text-gray-400">
          we offer hassle free exchange policy for all our products
        </p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">7 days return policy</p>
        <p className="text-gray-400">
          we provide 7 days free return policy for all our products
        </p>
      </div>

      <div>
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">best customer support</p>
        <p className="text-gray-400">
          we 24*7 customer support for all our customers
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
