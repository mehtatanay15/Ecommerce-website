import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div>
      <div className="text-center tetx-2xl pt-10 border-t">
        <Title text1={"contact"} text2={"us"} />
      </div>

      <div className="my-10 flex justify-center flex-col md:flex-row gap-16">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">our store</p>
          <p className="text-gray-500">
            54790 wills <br />
            wastigton usa
          </p>
          <p className="text-gray-500">
            =91 992076938 <br />
            swayamdgudagi@gmail
          </p>
          <p className="font-semibold text-xl text=gray-600">
            {" "}
            careere at forever
          </p>
          <p className="text-gray-500 ">
            learn more about out teams and job openeing
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            explore jobs
          </button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;
