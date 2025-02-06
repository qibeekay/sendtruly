import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Global = () => {
  return (
    <section className="bg-black font-inter pt-4 pb-10 mt-10">
      <div className="max-w-[1440px] mx-auto px-4">
        <p className="text-[#FFC828] text-center lg:text-left">
          GLOBAL SUPER NETWORK
        </p>
        <div className="flex items-center flex-col lg:flex-row gap-10 mt-10">
          {/* text */}
          <div className="w-full text-white flex items-center justify-center lg:flex-initial">
            <div>
              <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[58.58px] md:leading-[69px] max-w-[492px]">
                Industry-leading connectivity. True global reach.
              </h1>
              <p className="text-[20px] py-5 max-w-[465px]">
                Connect with your audience anywhere in the world through the
                most reliable messaging platform.
              </p>
              <button className="button bg-lightblue border border-lightblue">
                View Docs
                <div>
                  <img src={getImageSrc("arrow.png")} alt="view docs" />
                </div>
              </button>
            </div>
          </div>

          {/* image */}
          <div className="w-full">
            <div>
              <img src={getImageSrc("africapng.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Global;
