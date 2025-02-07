import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const PaymentGetStarted = () => {
  return (
    <section className="bg-[rgb(233,243,255)] text-black py-20">
      <div className="max-w-[1440px] mx-auto px-4 py-[4rem] text-center">
        <h1 className="text-3xl md:text-[45px] pb-[5rem] font-bold">
          Accelerate Your Payment Process with Sendtruly's Text-to-Pay Service
          for Faster Compensation
        </h1>

        <div className="flex items-center justify-center">
          <div>
            <button className="button bg-pinks border border-pinks">
              Get Started
              <div>
                <img src={getImageSrc("arrow.png")} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentGetStarted;
