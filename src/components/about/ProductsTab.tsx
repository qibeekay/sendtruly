import React, { useState } from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { MdGroupAdd, MdMail, MdMessage } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <section className="w-full bg-[#EEEEEE] min-h-screen py-[8rem] text-black font-inter">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center flex-col lg:flex-row justify-center gap-20 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Products designed to help maximize your revenue
          </h1>

          <div className="flex items-center flex-wrap justify-center lg:grid lg:grid-cols-2 gap-4 lg:gap-7 mt-10">
            <button
              onClick={() => handleTabClick("1")}
              className={`cursor-pointer shadow-xl flex items-center justify-center rounded-3xl lg:min-h-[14rem] lg:flex-col font-bold text-sm lg:text-xl p-2 gap-2 ${
                activeTab === "1"
                  ? "bg-pinks text-white"
                  : "bg-white text-black hover:bg-pinks/30"
              }`}
            >
              <MdMail
                className={`lg:text-4xl  ${
                  activeTab === "1" ? "text-white" : "text-pinks"
                }`}
              />
              Bulk SMS
            </button>
            <button
              onClick={() => handleTabClick("2")}
              className={`cursor-pointer shadow-xl flex items-center justify-center rounded-3xl lg:min-h-[14rem] lg:flex-col font-bold text-sm lg:text-xl p-2 gap-2 ${
                activeTab === "2"
                  ? "bg-pinks text-white"
                  : "bg-white text-black hover:bg-pinks/30"
              }`}
            >
              <MdMessage
                className={` lg:text-4xl ${
                  activeTab === "2" ? "text-white" : "text-pinks"
                }`}
              />
              2-Way SMS
            </button>
            <button
              onClick={() => handleTabClick("3")}
              className={`cursor-pointer shadow-xl flex items-center justify-center rounded-3xl lg:min-h-[14rem] lg:flex-col font-bold text-sm lg:text-xl p-2 gap-2 ${
                activeTab === "3"
                  ? "bg-pinks text-white"
                  : "bg-white text-black hover:bg-pinks/30"
              }`}
            >
              <MdGroupAdd
                className={`lg:text-4xl ${
                  activeTab === "3" ? "text-white" : "text-pinks"
                }`}
              />
              Group Texting
            </button>
            <button
              onClick={() => handleTabClick("4")}
              className={`cursor-pointer shadow-xl flex items-center justify-center rounded-3xl lg:min-h-[14rem] lg:flex-col font-bold text-sm lg:text-xl p-2 gap-2 ${
                activeTab === "4"
                  ? "bg-pinks text-white"
                  : "bg-white text-black hover:bg-pinks/30"
              }`}
            >
              <TbApi
                className={`lg:text-4xl ${
                  activeTab === "4" ? "text-white" : "text-pinks"
                }`}
              />
              SMS API
            </button>
          </div>
        </div>
        {/* header video */}
        <div className="w-full">
          <div className="">
            {activeTab === "1" && (
              <div className="flex items-center justify-center flex-col gap-y-9">
                <div className=" max-w-[30rem] aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={getImageSrc("sendsms.png")}
                    alt=""
                  />
                </div>
                <p className="text-center max-w-[20rem] text-xl font-bold">
                  Everything your brand needs to sell more with SMS
                </p>
              </div>
            )}
            {activeTab === "2" && (
              <div className="flex items-center justify-center flex-col gap-y-9">
                <div className=" max-w-[30rem] aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={getImageSrc("2way.png")}
                    alt=""
                  />
                </div>
                <p className="text-center max-w-[20rem] text-xl font-bold">
                  Let your Brand do more with our 2 way SMS services
                </p>
              </div>
            )}
            {activeTab === "3" && (
              <div className="flex items-center justify-center flex-col gap-y-9">
                <div className=" max-w-[30rem] aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={getImageSrc("2way.png")}
                    alt=""
                  />{" "}
                </div>
                <p className="text-center max-w-[20rem] text-xl font-bold">
                  Get access to our group texting facility
                </p>
              </div>
            )}
            {activeTab === "4" && (
              <div className="flex items-center justify-center flex-col gap-y-9">
                <div className=" max-w-[30rem] aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={getImageSrc("server.svg")}
                    alt=""
                  />
                </div>
                <p className="text-center max-w-[20rem] text-xl font-bold">
                  Create more with our free api access
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsTab;
