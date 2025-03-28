import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Employ = () => {
  return (
    <section className="w-full bg-lightblue py-10 lg:py-[8rem] text-white font-inter">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <div className="max-w-[450px]">
            <h1 className="text-3xl xl:text-[45px] font-bold">
              Employ crucial SMS data and analytical insights to enhance
              relationships
            </h1>

            <p className="md:text-lg xl:text-[30px] mt-10 xl:max-w-[590px]">
              Track the delivery and response metrics of your bi-directional SMS
              messages, and send customized follow-up messages to recipients who
              haven't replied within a designated time frame.
            </p>
          </div>
        </div>
        {/* header video */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img src={getImageSrc("messageImage_2.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employ;
