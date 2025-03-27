import React from "react";

const Support = () => {
  return (
    <section className=" text-white font-monts pb-14 px-4">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 bg-pinks min-h-[225px] py-10 flex items-center justify-center rounded-b-[20px]">
        <div className="flex items-center justify-center flex-col ">
          <div className="w-full">
            <h1 className="text-[20px] sm:text-[25px] md:text-[36px] font-medium text-center">
              The AI-powered platform for Marketing, Support, and Finance
            </h1>
          </div>

          <div className="w-full md:w-[30rem] mt-6">
            <div className="flex items-center flex-col sm:flex-row bg-transparent border-transparent sm:border sm:border-white rounded-[5px] min-h-[46px] gap-y-2 pl-2">
              <input
                type="text"
                placeholder="Email your email"
                className="outline-none border border-white rounded-[5px] min-h-[46px] sm:min-h-0 sm:border-none sm:rounded-none bg-transparent text-black w-full placeholder:text-white px-2"
              />
              <button className="cursor-pointer rounded-[0px] font-monts bg-white text-black w-full sm:w-[250px] h-full min-h-[46px]">
                Get Started for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
