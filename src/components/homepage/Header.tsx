import React from "react";
import { VideoPlayer } from "../../components";
import { getImageSrc } from "../../utils/imageUtils";

const Header = () => {
  return (
    <header className="w-full bg-lightblue min-h-screen py-[8rem] text-white font-inter">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center flex-col lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Easily reach, engage, and transact with your customer base
          </h1>

          <p className="text-lg md:text-[30px] mt-10 max-w-[590px]">
            Grow your audience, create personalized messaging at scale, and make
            SMS your #1 revenue channel with sendtruly
          </p>

          {/* button */}
          <div className="flex items-center flex-wrap gap-4 mt-20">
            <button className="button bg-pinks border border-pinks">
              Start free
              <div>
                <img src={getImageSrc("arrow.png")} alt="" />
              </div>
            </button>

            <button className="button bg-lightblue border border-white">
              See pricing
            </button>
          </div>
        </div>
        {/* header video */}
        <VideoPlayer />
      </div>
    </header>
  );
};

export default Header;
