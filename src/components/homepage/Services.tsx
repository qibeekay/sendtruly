import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Services = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto">
        <h1 className="text-center py-5 font-medium text-lg sm:text-xl md:text-3xl">
          Create personalized multi-channel experiences faster than you can read
          this sentence
        </h1>

        {/* grid */}
        <div className="grid md:grid-cols-2 lgs:grid-cols-3 gap-0.5">
          {/* grid1 */}
          <div className="h-[547px] p-10 text-white border border-black bg-black font-monts">
            <h1 className="font-normal text-[32px] max-w-[271px]">
              Stay closer, connect deeper, for a lifetime
            </h1>
            <p>
              Boost engagement and retention effortlessly with our integrated
              suite of SMS, Email, Reviews, Text2Pay, and Loyalty products—all
              from one powerful platform.
            </p>
          </div>
          {/* grid2 */}
          <div className="h-[547px] pt-10 px-4 text-black border border-black bg-[#FFFCF2] font-monts text-center overflow-hidden grid">
            <h1 className="font-bold text-[32px]">SMS Marketing</h1>
            <p className="max-w-[288px] text-[20px] mx-auto">
              Everyone reads their texts. We help you send them.
            </p>

            <div className=" mt-8">
              <img
                className="w-full h-auto"
                src={getImageSrc("service1.png")}
                alt="sms marketing"
              />
            </div>
          </div>

          {/* grid3 */}
          <div className="h-[547px] pt-10 px-4 text-black border border-black bg-[#EDF5FF] font-monts text-center overflow-hidden grid">
            <h1 className="font-bold text-[32px]">Email</h1>
            <p className="max-w-[288px] text-[20px] mx-auto">
              Send beautifully branded emails with over 100 templates to choose
              from
            </p>

            <div className=" mt-8">
              <img
                className="w-full h-auto"
                src={getImageSrc("service2.png")}
                alt="sms marketing"
              />
            </div>
          </div>

          {/* grid4 */}
          <div className="h-[547px] pt-10 px-4 text-black border border-black bg-[#F2EEFF] font-monts text-center overflow-hidden grid">
            <h1 className="font-bold text-[32px]">Text2Pay</h1>
            <p className="max-w-[288px] text-[20px] mx-auto">
              Sendtruly T2P enables customer to easily make payment via text
            </p>

            <div className=" mt-8">
              <img
                className="w-full h-auto"
                src={getImageSrc("service3.png")}
                alt="sms marketing"
              />
            </div>
          </div>

          {/* grid5 */}
          <div className="h-[547px] pt-10 px-4 text-black border border-black bg-[#EDFFFF] font-monts text-center overflow-hidden grid">
            <div>
              <h1 className="font-bold text-[32px]">Product Review</h1>
              <p className="max-w-[288px] text-[20px] mx-auto">
                Reviews inspire purchases. Don’t waste their impact
              </p>
            </div>

            <div className=" mt-14">
              <img
                className="w-full h-auto"
                src={getImageSrc("service4.png")}
                alt="sms marketing"
              />
            </div>
          </div>

          {/* grid6 */}
          <div className="h-[547px] pt-10 px-4 text-black border border-black bg-[#FFFCF2] font-monts text-center overflow-hidden grid">
            <h1 className="font-bold text-[32px]">Loyalty</h1>
            <p className="max-w-[288px] text-[20px] mx-auto">
              Create personalised experience to retain your most valuable
              customers
            </p>

            <div className=" mt-8">
              <img
                className="w-full h-auto"
                src={getImageSrc("service5.png")}
                alt="sms marketing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
