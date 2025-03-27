import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const list = [
  {
    name: "SMS",
    image: "vector1.png",
  },
  {
    name: "Review",
    image: "vector2.png",
  },
  {
    name: "Text2Pay",
    image: "vector3.png",
  },
  {
    name: "Loyalty",
    image: "vector4.png",
  },
  {
    name: "Email",
    image: "vector5.png",
  },
];
const ProductSynergy = () => {
  return (
    <section className="font-monts mb-10">
      <div className="xl:max-w-[1440px] mx-auto px-4">
        <div>
          <div className="flex flex-col lg:flex-row gap-5 lgs:gap-20 min-h-screen">
            {/* flex 1 */}
            <div className="bg-[#E1EDFF] relative w-full rounded-[20px] px-4 md:px-10">
              <div className="py-10 lgs:pt-32">
                <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[36px] font-bold mb-4">
                  PRODUCT SYNERGIES
                </h1>
                <div className="flex items-center gap-x-4 gap-y-1 flex-wrap max-w-[300px]">
                  {list.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 border-2 border-black rounded-[20px] text-sm xl:text-base py-0.5 px-6"
                    >
                      {/* icon */}
                      <div>
                        <img src={getImageSrc(item.image)} alt="" />
                      </div>
                      {/* text */}
                      {item.name}
                    </div>
                  ))}
                </div>

                <h1 className="max-w-[413px] font-bold sm:text-[25px] xl:text-[32px] xl:leading-[39px] py-5">
                  Create captivating seamless experiences
                </h1>

                <p className="max-w-[485px] sm:text-[20px] xl:text-[24px] font-normal">
                  Whether you’re just starting, scaling up, or on top of your
                  game, sendtruly has pricing plans to suit any business size.
                </p>
              </div>

              <div className="lgs:absolute lgs:-right-[10rem] lgs:top-[50%] lgs:translate-y-[-50%] mt-3 mb-10 lgs:mt-0 lgs:mb-0">
                <img src={getImageSrc("synergy.png")} alt="" />
              </div>
            </div>

            {/* flex-2 */}
            <div className="lg:w-[70%] pl-4 py-10 flex justify-end">
              <div className="border-l border-black h-full grid pl-4 w-full lgs:w-[23rem] relative xl:text-[20px] gap-y-7 lg:gap-y-0">
                <p>Drive Urgency</p>
                <p>
                  Tailor communications to meet your customers where they are
                </p>
                <p>Keep subscribers informed</p>
                <p>
                  Elevate email review requests with SMS conversational
                  experiences
                </p>
                <p>Drive Loyalty Participation</p>
                <p>Re-engage the customer</p>
                <p>Reward engaged customers to keep them coming back</p>
                <p>Collect meaningful feedback with ease</p>
                <p>Offer Instant Rewards</p>

                <div className="absolute top-0 -left-3">
                  <div className="w-[24px] bg-[#18A0FB] shadow-lg aspect-square rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSynergy;
