import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-pinks min-h-[225px] py-10 flex items-center justify-center text-white font-monts">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-center justify-center flex-col lgs:flex-row">
          <div className="w-full">
            <h1 className="text-[20px] sm:text-[25px] md:text-[36px] font-medium text-center lgs:text-left">
              Get started with zondos today for free
            </h1>
            <p className="font-medium md:text-[18px] text-center lgs:text-left">
              Expand your audience, enhance customer lifetime value, and boost
              overall sales
            </p>
          </div>

          <div className="w-full md:w-[30rem] mt-6 lgs:mt-0">
            <small className="text-[10px]">Free 50 SMS upon sign-up</small>
            <div className="flex items-center bg-white rounded-[5px] min-h-[46px] px-1">
              <input
                type="text"
                placeholder="Email"
                className="outline-none bg-transparent text-black w-full"
              />
              <button className=" rounded-[0px] font-monts bg-pinks w-[130px] min-h-[40px]">
                Get Started
              </button>
            </div>
            <small className="text-[10px]">
              Join over 180k customers. No credit card needed. Instant setup.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
