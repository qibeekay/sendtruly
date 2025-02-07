import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Promote = () => {
  return (
    <section className="w-full bg-white min-h-screen py-10 lg:py-[8rem] text-black font-inter">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Promote the exchange of feedback from customers, staff, and
            stakeholders through interactive SMS communication
          </h1>

          <p className="text-lg mt-10 max-w-[590px]">
            By employing two-way text messaging, you have the opportunity to
            nurture trust and enhance interaction, whether it's soliciting
            feedback, gathering booking confirmations, or other functions
          </p>
        </div>
        {/* header video */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img src={getImageSrc("messageImage_3.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promote;
