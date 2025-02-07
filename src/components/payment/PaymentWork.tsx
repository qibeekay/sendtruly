import { getImageSrc } from "../../utils/imageUtils";

const PaymentWork = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h1 className=" text-left text-lg font-bold md:text-4xl">
          How does it work
        </h1>
        {/* flex1 */}
        <div className="mt-16 flex justify-between gap-10 items-center w-full flex-col lg:flex-row ">
          <div className="max-w-[35rem] flex flex-col gap-[3rem]">
            <div className="flex gap-4">
              {/* number */}
              <div>
                <div className="flex items-center justify-center w-10 aspect-square bg-pinks rounded-full text-white text-[20px]">
                  <p>1</p>
                </div>
              </div>

              {/* text */}
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  Prompt payment
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Select collect payment from your dashboard.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {/* number */}
              <div>
                <div className="flex items-center justify-center w-10 aspect-square bg-pinks rounded-full text-white text-[20px]">
                  <p>2</p>
                </div>
              </div>

              {/* text */}
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  Enter the amount
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Enter the invoice number and the amount owed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* number */}
              <div>
                <div className="flex items-center justify-center w-10 aspect-square bg-pinks rounded-full text-white text-[20px]">
                  <p>3</p>
                </div>
              </div>

              {/* text */}
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  Customer pays via text
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Your customer receives a rich text that takes them to their
                  unique invoice.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {/* number */}
              <div>
                <div className="flex items-center justify-center w-10 aspect-square bg-pinks rounded-full text-white text-[20px]">
                  <p>4</p>
                </div>
              </div>

              {/* text */}
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  You get your money
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Customers can pay with one tap – and you get paid instantly
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end ">
            <div className="">
              <img src={getImageSrc("payment_image_1.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentWork;
