import React from "react";

const MassText = () => {
  return (
    <div className="bg-lightblue text-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-[45px] font-bold">
          What is Mass Text Messaging?
        </h1>
        <p className="w-full md:w-[90%] text-xl mx-auto py-10">
          Bulk SMS messaging stands as a communication platform enabling
          organizations to dispatch numerous SMS or MMS messages to a broad
          spectrum of contacts simultaneously, streamlining operations for
          internal teams. Utilizing Sendtruly's bulk SMS service, businesses can
          efficiently pre-plan bulk texts, including alerts, promotions,
          sweepstakes, and other communications, to reach hundreds or thousands
          of recipients effortlessly.
        </p>

        <div className="flex items-center justify-center gap-10 lg:gap-[10rem] flex-wrap">
          <div>
            <p className="font-bold text-[36px] md:text-[55px]">10X</p>
            <p className="font-bold text-[20px] md:text-[25px] leading-4">
              FASTER RESPONSE
            </p>
          </div>
          <div>
            <p className="font-bold text-[36px] md:text-[55px] ">90%</p>
            <p className="font-bold text-[20px] md:text-[25px] leading-4">
              FASTER RESPONSE
            </p>
          </div>
          <div>
            <p className="font-bold text-[36px] md:text-[55px]">1M+</p>
            <p className="font-bold text-[20px] md:text-[25px] leading-4">
              SMS USERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassText;
