import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const PaymentWhatMakes = () => {
  return (
    <section className="w-full bg-white py-[8rem] text-black font-inter">
      <div className="max-w-[1440px] mx-auto px-4  h-full">
        <h1 className="text-xl md:text-3xl md:text-[40px] text-center font-bold max-w-[55rem] mx-auto">
          What makes SendTruly the ideal choice for your text-to-pay service?
        </h1>
        <div className="flex items-center flex-col lg:flex-row justify-center gap-10 mt-20">
          {/* header text */}
          <div className="w-full ">
            <h1 className="text-xl text-center lg:text-left md:text-xl md:text-[26px] font-bold max-w-[55rem] mx-auto">
              Simple Merchant Setup
            </h1>
            <p className="text-lg lg:text-2xl mt-6 text-center lg:text-left lg:max-w-[585px]">
              Have you ever desired to have your own credit card merchant
              account? With Sendtruly's SMS payment solutions, you can now make
              it a reality, enabling you to swiftly set up your own merchant
              account and commence accepting credit card payments instantly. We
              streamline the process for you to receive credit card payments and
              seamlessly integrate with our Text-to-Pay platform . Additionally,
              Sendtruly empowers you to export data whenever necessary. Easily
              download payment data for individual clients or batches. Monitor
              your credit card transactions in real-time and track all daily
              deposits flowing directly into your bank account
            </p>
          </div>
          {/* header video */}
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="">
              <img src={getImageSrc("payment_image_4.png")} alt="" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col lg:flex-row-reverse justify-center gap-10 mt-20">
          {/* header text */}
          <div className="w-full flex items-center justify-end">
            <div>
              <h1 className="text-xl md:text-xl text-center lg:text-left md:text-[26px] font-bold max-w-[55rem] mx-auto">
                Streamlined Recurring Payments
              </h1>
              <p className="text-lg lg:text-2xl mt-6 text-center lg:text-left lg:max-w-[585px]">
                Establish automatic recurring payments and payment reminders
                effortlessly within seconds. This minimizes the chances of
                missed revenue opportunities and reduces the need for extensive
                communication with customers, alleviating headaches for both you
                and your clients. Moreover, you have the flexibility to opt for
                immediate payment or schedule requests for a later time.
                Regardless of your choice, Sendtruly ensures that payment
                confirmations are automatically sent to all your clients.
                Furthermore, with Sendtruly handling the entire process
                automatically, you never have to worry about when to initiate
                payment reminders. Bid farewell to delayed payments and welcome
                a steady cash flow
              </p>
            </div>
          </div>
          {/* header video */}
          <div className="w-full flex items-center justify-center lg:justify-start">
            <div className="">
              <img src={getImageSrc("payment_image_5.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentWhatMakes;
