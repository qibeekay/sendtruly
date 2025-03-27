import { getImageSrc } from "../../utils/imageUtils";

const ReviewsHeader = () => {
  return (
    <header className="w-full bg-white py-[8rem] text-black font-inter">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 flex items-center flex-col-reverse lg:flex-row justify-center gap-10 h-full">
        {/* header text */}
        <div className="w-full">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Customer Review Software for Business
          </h1>

          <p className="text-lg mt-10 max-w-[590px]">
            There's no escaping it; businesses are constantly compared. However,
            Textedly ensures there's no competition. The present moment presents
            an opportunity to establish a strong reputation using our
            comprehensive customer review management software
          </p>

          {/* button */}
          <div className="flex items-center flex-wrap gap-4 mt-10">
            <button className="button bg-pinks border border-pinks">
              Get Started
              <div>
                <img src={getImageSrc("arrow.png")} alt="" />
              </div>
            </button>

            {/* <button className="button bg-lightblue border border-white">
              See pricing
            </button> */}
          </div>
        </div>
        {/* header video */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img src={getImageSrc("review_banner.png")} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReviewsHeader;
