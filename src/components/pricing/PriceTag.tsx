import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

interface Props {
  planId: string;
  planName: string;
  desc: string;
  benefits: string[];
  price: string;
}

const PriceTag = ({ planId, planName, desc, benefits, price }: Props) => {
  return (
    <div className="relative font-inter bg-[#F5F5F5] min-h-[530px] rounded-[20px] p-4 md:p-10 flex flex-col justify-between">
      <div className="absolute rounded-[15px] w-[90px] py-[10px] bg-[#FFC828] -top-5 left-[50%] translate-x-[-50%]">
        <p className="text-[16px] font-bold text-center">Plan {planId}</p>
      </div>

      <div>
        <h1 className="text-[27.56px] font-bold text-center mt-10">
          {planName}
        </h1>
        <div className="rounded-b-[15px] w-full bg-[#EAEAEA] shadow text-center py-1 my-1">
          <p className="text-[13px] bg-[#EAEAEA] py-3">{desc}</p>
        </div>

        <ul className="flex flex-col gap-2 mt-5">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <div>
                <img src={getImageSrc("check.png")} alt="" />
              </div>
              {benefit}
            </li>
          ))}
          <li className="flex items-center gap-2 font-bold">
            <div>
              <img src={getImageSrc("check.png")} alt="" />
            </div>
            {price}
          </li>
        </ul>
      </div>

      <button className="bg-pinks text-white w-full text-[19.22px] rounded-[15px] py-[14.5px] mt-10">
        Get Started
      </button>
    </div>
  );
};

export default PriceTag;
