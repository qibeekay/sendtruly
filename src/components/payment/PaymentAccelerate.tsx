import { getImageSrc } from "../../utils/imageUtils";

const PaymentAccelerate = () => {
  return (
    <section className="w-full bg-lightblue py-[8rem] text-white font-inter">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4  h-full">
        <h1 className="text-xl md:text-3xl md:text-[40px] text-center font-bold max-w-[55rem] mx-auto">
          Accelerate Your Payments with Sendtruly's Text-to-Pay Service for
          Faster Compensation
        </h1>
        <div className="flex items-center flex-col lg:flex-row justify-center gap-10 mt-20">
          {/* header text */}
          <div className="w-full ">
            <p className="text-lg lg:text-xl mt-10 text-center lg:text-left lg:max-w-[435px]">
              Sendtruly offers the simplest method to swiftly gather payments
              from your customers, facilitating faster transactions. Moreover,
              with Sendtruly, you can effortlessly dispatch amiable payment
              reminders automatically. What's even better, there's no need to
              commit to a contract when utilizing our services. This allows you
              the flexibility to upgrade seamlessly whenever you wish, sending
              an increased volume of messages as your business expands
            </p>
          </div>
          {/* header video */}
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="">
              <img src={getImageSrc("payment_image_2.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentAccelerate;
