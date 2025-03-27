import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Maximize = () => {
  return (
    <section className="bg-lightblue text-white py-20">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-[45px] font-bold">
          Maximize Customer Engagement with Two‑Way SMS
        </h1>
        <p className="w-full md:w-[90%] text-xl mx-auto py-10">
          Start your texting campaigns today and enjoy the flexibility of mass
          texting or the personalized engagement of one-on-one discussions.
          Register now to access our free SMS credits and discover the
          simplicity and rewards of utilizing our all-in-one features
        </p>

        <div className="flex items-center justify-center">
          <div>
            <button className="button bg-pinks border border-pinks">
              Get Started
              <div>
                <img src={getImageSrc("arrow.png")} alt="" />
              </div>
            </button>
            <p className="text-center text-xl mt-1">No cards required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maximize;
