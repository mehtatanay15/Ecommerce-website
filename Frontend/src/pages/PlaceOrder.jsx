import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [payMethod, setPayMethod] = useState("cod");
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 sm:max-w-[450px] w-full">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="first name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="street name"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="city"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="state"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="pincode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="phone number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"payment"} text2={"method"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={()=>setPayMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full  ${payMethod === 'stripe' ? 'bg-green-400' :'' } `}></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setPayMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full   ${payMethod === 'razorpay' ? 'bg-green-400' :'' }`}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setPayMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full  ${payMethod === 'cod' ? 'bg-green-400' :'' } `}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                cash on delivery
              </p>
            </div>
          </div>

            <div className="w-full text-end mt-8">
              <button onClick={()=>navigate('/orders')} className="bg-black text-white py-3 text-sm px-16 ">
                Place Order
              </button>
              
            </div>

        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
