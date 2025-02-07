import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const PaymentBenefits = () => {
  return (
    <section className="w-full bg-[#E9F3FF] py-[8rem] text-black font-inter">
      <div className="max-w-[1440px] mx-auto px-4 h-full">
        <h1 className="text-xl md:text-3xl md:text-[40px] text-center font-bold max-w-[55rem] mx-auto">
          Benefits of text to pay for businesses
        </h1>
        <div className="flex items-center flex-col-reverse lg:flex-row-reverse justify-between gap-10 mt-20">
          {/* header text */}
          <div className="w-full flex items-center justify-end">
            <p className="text-lg lg:text-2xl text-center max-w-[510px]">
              Many enterprises offer an online payment gateway enabling
              customers to conveniently settle their bills by logging in or
              inputting their invoice number. If your business provides this
              service, you can send customers a text message containing a link
              to the payment portal along with their invoice attached. Indeed,
              PDF invoices can be attached and transmitted via text message. If
              you prefer not to include an attached invoice, you can simply
              provide the invoice number—or any necessary payment details—in the
              text message body
            </p>
          </div>
          {/* header video */}
          <div className="w-full flex items-center justify-center lg:justify-start">
            <div className="">
              <img src={getImageSrc("payment_image_3.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentBenefits;
