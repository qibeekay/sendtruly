import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const TwoWayHeader = () => {
  return (
    <header className="w-full bg-[#E9F3FF] min-h-screen py-[8rem] text-black font-inter">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Two-way Messaging
          </h1>

          <p className="text-lg mt-10 max-w-[590px]">
            Create a frustration-free experience for your customers while saving
            time and boosting sales with two-way texting.
          </p>

          <ul className="list-disc px-6 mt-4 text-lg">
            <li>Send and receive text messages in seconds</li>
            <li>Assign conversations to team members</li>
            <li>Automate responses to frequently asked questions</li>
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
        {/* header video */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img src={getImageSrc("phone.png")} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TwoWayHeader;
