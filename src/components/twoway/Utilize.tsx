import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Utilize = () => {
  return (
    <section className="w-full bg-white py-10 lg:py-[8rem] text-black font-inter">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row-reverse justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <div className="">
            <h1 className="text-3xl xl:text-[45px] font-bold">
              Utilize 2 way SMS communication to establish trust and break
              through the clutter.
            </h1>

            <p className="text-lg mt-10 max-w-[590px]">
              Sendtruly SMS empowers you to expand your outreach by leveraging
              its global capability for two-way texting through local carriers,
              boasting an impressive average open rate of 98%
            </p>
          </div>
        </div>
        {/* header video */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img src={getImageSrc("messageImage_1.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utilize;
