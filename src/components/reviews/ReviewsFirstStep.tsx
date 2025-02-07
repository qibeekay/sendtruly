import { getImageSrc } from "../../utils/imageUtils";

const ReviewsFirstStep = () => {
  return (
    <section className="bg-lightblue text-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-[45px] font-bold">
          Take the First Step in Building and Administering Your Online Reviews
          Today
        </h1>
        <p className="w-full md:w-[90%] text-xl mx-auto py-10">
          Explore how Sendtruly's review management solutions can elevate your
          company's online visibility. Utilize text messaging to solicit reviews
          and propel your business forward at an unprecedented pace.
        </p>

        <div className="flex items-center justify-center">
          <div>
            <button className="button bg-pinks border border-pinks">
              Get Started
              <div>
                <img src={getImageSrc("arrow.png")} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsFirstStep;
