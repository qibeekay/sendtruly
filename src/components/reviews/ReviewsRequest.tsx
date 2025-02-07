import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const ReviewsRequest = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl md:text-[40px] font-bold max-w-[60rem] mx-auto">
          How to Request Google Reviews Through Text Messages
        </h1>
        <p className="w-full lg:w-[75%] text-lg md:text-2xl mx-auto py-6">
          Requesting feedback from customers doesn't need to feel difficult or
          uncomfortable. Utilize Textedly's online review platform to streamline
          this process for you. Increase your visibility in Google search
          results by up to 75% through gathering more reviews. Here's a
          straightforward three-step guide on how to achieve this:
        </p>

        {/* flex1 */}
        <div className="mt-16 flex justify-between gap-10 items-center w-full flex-col-reverse lg:flex-row ">
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
                  Enter A Customer's Phone Number
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Enter a contacts phone number in Sendtruly.
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
                  Send A Review Text And Link
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Send a text to your contact with a special link. When
                  customers tap the link, they're prompted with the opportunity
                  to write a review for your business.
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
                  Customers Click To Review
                </h1>
                <p className=" text-left text-lg md:text-xl mt-2">
                  Your customer receives a custom text message from you with a
                  link to write an online review. Yes, it's that easy
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end ">
            <div className="">
              <img src={getImageSrc("review_1.png")} alt="" />
            </div>
          </div>
        </div>

        {/* sms text review */}
        <div className="mt-16 flex justify-between gap-10 items-center w-full flex-col-reverse lg:flex-row-reverse ">
          <div className=" lg:max-w-[35rem] flex flex-col gap-[3rem]">
            <div className="flex gap-4">
              {/* text */}
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  SMS Text Reviews
                </h1>
                <p className=" text-left text-lg md:text-2xl mt-2">
                  Use Sendtruly’s review management tools to stand out online
                  where it matters most. With Sendtruly, you can collect
                  hundreds (and even thousands) of customer reviews all via
                  text. This puts the power of word of mouth to work on your
                  behalf. Plus, you can manage all your reviews from a single,
                  convenient dashboard. Respond to client reviews, resolve
                  issues, and manage your online reputation with intuitive tools
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-start ">
            <div className="">
              <img src={getImageSrc("review_2.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsRequest;
