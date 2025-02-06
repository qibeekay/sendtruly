import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Solution2 = () => {
  return (
    <section className="bg-white font-monts mt-6">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center">
          <h1 className="text-[20px] sm:text-[36px] font-medium">
            Tailored solutions for every business
          </h1>
          <p className="font-normal text-[20px] sm:text-[24px]">
            We are in it to make you win
          </p>
        </div>

        {/* grids */}
        <div className="flex items-center justify-center gap-x-20 gap-y-10 flex-wrap mt-16">
          {/* flex1 */}
          <div className="border-[0.5px] border-black rounded-[15px] p-4 max-w-[339px]">
            <div>
              <img src={getImageSrc("tail1.png")} alt="" />
            </div>
            <h1 className="font-medium text-[20px]">Marketing</h1>
            <p className="font-normal">
              Whether you're launching a new product, requesting Google reviews,
              or running exclusive loyalty offers, SendTruly empowers you to
              connect, convert, and retain customers with ease
            </p>
          </div>
          {/* flex1 */}
          <div className="border-[0.5px] border-black rounded-[15px] px-4 pt-4 pb-10 max-w-[339px]">
            <div className="max-w-[306px] h-[257px] flex items-center justify-end rounded-[15px] bg-[#EDF5FF]">
              <div className=" overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={getImageSrc("vec.png")}
                  alt=""
                />
              </div>
            </div>
            <h1 className="font-medium text-[20px]">Insight</h1>
            <p className="mt-4">
              SendTruly goes beyond SMS marketing by providing powerful data
              insights to help businesses make smarter decisions.
            </p>
          </div>
          {/* flex1 */}
          <div className="border-[0.5px] border-black rounded-[15px] px-4 pt-4 pb-10 max-w-[339px]">
            <div className="max-w-[306px] h-[257px] flex items-center justify-center rounded-[15px] bg-[#EDF5FF]">
              <div className=" overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={getImageSrc("vec2.png")}
                  alt=""
                />
              </div>
            </div>
            <h1 className="font-medium text-[20px]">Customer experience</h1>
            <p className="mt-4">
              Automate responses, send timely updates, and reward customers for
              their engagement—all in one platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution2;
