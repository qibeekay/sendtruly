import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const TwoWay = () => {
  return (
    <section className="w-full bg-white min-h-screen py-[8rem] text-black font-inter">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 flex items-center flex-col lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <div className="max-w-[450px]">
            <h1 className="text-3xl xl:text-[45px] font-bold">
              Make every customer feel like your only customer with Two-Way
              Reply
            </h1>

            <p className="md:text-lg xl:text-[30px] mt-10 xl:max-w-[590px]">
              Build lasting, authentic relationships with your shoppers and
              provide top-tier support with conversational Two-Way Reply.
            </p>

            {/* button */}
            <div className="flex items-center flex-wrap gap-4 mt-10">
              <button className="button bg-pinks border border-pinks">
                Get Started
                <div>
                  <img src={getImageSrc("arrow.png")} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* header video */}
        <div className="w-full">
          <div className="">
            <img src={getImageSrc("about-us-1.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWay;
