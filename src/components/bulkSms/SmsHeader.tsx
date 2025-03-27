import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const SmsHeader = () => {
  return (
    <header className="w-full bg-white min-h-screen py-[8rem] text-black font-inter">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <div className="max-w-[450px]">
            <h1 className="text-3xl xl:text-[45px] font-bold">
              Enhance Your Sales with Streamlined Text Marketing Through Bulk
              SMS Service
            </h1>

            <p className="md:text-lg xl:text-[30px] mt-10 xl:max-w-[590px]">
              Experience the capability to dispatch SMS campaigns to hundreds or
              even thousands of individuals simultaneously. Experiment with bulk
              SMS through SimpleTexting, absolutely free for a 14-day trial
              period, no credit card necessary. Gain access t
            </p>

            <ul className="list-disc px-6 mt-4 text-lg">
              <li>Tailored customer segments</li>
              <li>Top-tier delivery speeds within the industry</li>
              <li>
                Adaptable pricing options allowing for easy scalability, and
                beyond
              </li>
            </ul>

            {/* button */}
            <div className="flex items-center flex-wrap gap-4 mt-10">
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
        </div>
        {/* header video */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img src={getImageSrc("bulk_hero.png")} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SmsHeader;
