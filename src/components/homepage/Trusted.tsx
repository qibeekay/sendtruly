import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

// Create a type for image details
type FeatureDetail = {
  imageKey: string;
  title: string;
  description: string;
};

// Brand image filenames
const brandImages = [
  "camanda.png",
  "africa.png",
  "now.png",
  "chicken.png",
  "gokada.png",
  "transcorp.png",
];

// Feature details with image references
const features: FeatureDetail[] = [
  {
    imageKey: "frame1.png",
    title: "Messaging",
    description: "Engage customers with targeted, personalized SMS campaigns.",
  },
  {
    imageKey: "frame2.png",
    title: "Reviews",
    description: "Showcase customer feedback to build trust and boost sales",
  },
  {
    imageKey: "frame3.png",
    title: "Loyalty",
    description:
      "Reward repeat customers with points, cashback, or exclusive offers",
  },
  {
    imageKey: "frame4.png",
    title: "Payment",
    description: "Enable fast, secure payments directly via SMS.",
  },
];

const Trusted = () => {
  return (
    <section className=" py-8 px-4">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">
          TRUSTED GLOBALLY BY OVER 100 BRANDS
        </h1>

        {/* Brands grid */}
        <div className="flex items-center justify-center xl:justify-between flex-wrap gap-8">
          {brandImages.map((filename, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={getImageSrc(filename)}
                alt={`Brand ${index + 1}`}
                className="h-auto mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="p-8 bg-lightpurple w-full">
          <h1 className="font-poppins text-lg sm:text-2xl">
            Everything you need to drive traffic
          </h1>
          {/* Features grid */}
          <div className="flex items-center justify-center lg:justify-between gap-8 flex-wrap mt-4">
            {features.map((feature, index) => (
              <div key={index} className=" max-w-[272px]">
                <div className="h-[232px] rounded-[10px] overflow-hidden">
                  <img
                    src={getImageSrc(feature.imageKey)}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-2xl font-poppins font-medium my-1">
                  {feature.title}
                </h2>
                <p className="font-inter text-[15px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
