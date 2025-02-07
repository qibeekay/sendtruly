import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const PaymentHeader = () => {
  return (
    <header className="w-full bg-lightblue py-[8rem] text-white font-inter">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Increase revenue and get paid 85% faster with text to pay
          </h1>

          <p className="text-lg mt-10 max-w-[590px]">
            Speed up your payment cycle with Pay by Text, featuring 90-second
            response times for SMS. Effortlessly engage with customers to
            accelerate collections, drive revenue growth, stimulate payment
            participation, and reinforce loyalty through the prompt, digital
            payment platform your audience desires.
          </p>

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
            <img src={getImageSrc("payment_banner.png")} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PaymentHeader;
