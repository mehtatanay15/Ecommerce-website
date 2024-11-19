import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Aboutus = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"about"} text2={"us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vero,
            hic magnam laudantium non provident officiis nesciunt repellendus
            necessitatibus quos sit reprehenderit nisi minima perferendis ipsa
            harum? Et perferendis, odio, possimus consequatur dolore ducimus at
            inventore voluptatum voluptatem aperiam molestiae, nihil hic?
            Possimus, tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aperiam dicta ipsam? Facilis, neque. Voluptatum nulla est voluptas.
            Velit animi ea officia temporibus possimus architecto iusto optio
            harum, ex nobis earum rem amet esse eveniet in ut error numquam
            fugiat id ullam natus voluptate provident sed iste. Magni, dolorem
            iusto.
          </p>
          <b className="text-gray-800">Our mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            dolore sint commodi? Placeat voluptate quod ad amet enim sint
            tenetur, deserunt soluta repellendus hic quisquam, necessitatibus
            officiis dolorum ullam quam.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"why"} text2={"choose us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>qualiyty assuarance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
            pariatur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
            pariatur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>exceptional customer service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
            pariatur.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Aboutus;
