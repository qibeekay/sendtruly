import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const AboutHeader = () => {
  return (
    <header className="w-full bg-lightblue min-h-screen py-[8rem] text-white font-inter">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center flex-col lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            We are everything your brand needs to scale with SMS
          </h1>

          <p className="text-lg md:text-[30px] mt-10 max-w-[590px]">
            Whether you’re a seasoned SMS marketer or new to the game, get all
            the features you need to make SMS your next highest revenue channel.
          </p>

          {/* button */}
          <div className="flex items-center flex-wrap gap-4 mt-20">
            <button className="button bg-pinks border border-pinks">
              Get Started
              <div>
                <img src={getImageSrc("arrow.png")} alt="" />
              </div>
            </button>

            {/* <button className="button bg-lightblue border border-white">
              See pricing
            </button> */}
          </div>
        </div>
        {/* header video */}
        <div className="w-full">
          <div className="">
            <img src={getImageSrc("sendsms.png")} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
