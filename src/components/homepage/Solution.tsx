import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Solution = () => {
  return (
    <section className="bg-pinks/15 px-4 py-10">
      <div className="flex items-center justify-center flex-wrap gap-y-10 gap-x-10 xl:gap-x-28 ">
        {/* image */}
        <div>
          <div>
            <img
              className="w-full h-full"
              src={getImageSrc("connect.png")}
              alt="slutions"
              loading="lazy"
            />
          </div>
        </div>

        {/* text */}
        <div className="w-[500px] xl:w-[596px] font-poppins">
          <h1 className="text-pinks font-medium text-lg sm:text-[26px] xl:text-[36px]">
            We’re in it to help you win it.
          </h1>
          <p className="text-black font-medium text-lg sm:text-[30px] xl:text-[40px]">
            Solution for Every Industry
          </p>
          <p className="xl:text-[24px] font-normal py-3">
            We’re committed to making your business thrive. With SendTruly,
            you’re not just using a platform—you’re choosing a partner dedicated
            to your growth and success.
          </p>

          <button className="button mt-3 border border-pinks bg-pinks">
            Start free
            <div>
              <img src={getImageSrc("arrow.png")} alt="start free" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
