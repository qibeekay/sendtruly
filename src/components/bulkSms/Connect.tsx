import React from "react";

const Connect = () => {
  return (
    <div className="py-28 bg-[#E9F3FF]">
      <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl md:text-[40px] font-bold max-w-[60rem] mx-auto">
          Connect with your entire customer base simultaneously through bulk SMS
          services
        </h1>
        <p className="w-full md:w-[75%] text-lg md:text-2xl mx-auto py-6">
          Bulk SMS, also known as mass text messaging, enables the simultaneous
          communication with hundreds or thousands of contacts in a single
          operation
        </p>

        <div className="grid md:grid-cols-2 lgs:grid-cols-3 gap-10 mt-4 md:mt-14 place-items-center">
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              It proves effective for businesses of any scale
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              Witness outcomes through mass SMS regardless of your company’s
              size, financial resources, or sector.
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Reach your entire audience
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              With bulk texting, you can save time and effort by batch sending
              the same message to specific segments of your audience.
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              The right fit for many use cases
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              When using an SMS service, you can send marketing messages,
              promotional offers, critical alerts, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
