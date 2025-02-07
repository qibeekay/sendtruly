import { getImageSrc } from "../../utils/imageUtils";

const ReviewsSeekReviews = () => {
  return (
    <section className="py-28 bg-[#E9F3FF]">
      <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl md:text-[40px] font-bold max-w-[60rem] mx-auto">
          Seek reviews across all significant platforms.
        </h1>
        <p className="w-full lg:w-[75%] text-lg md:text-2xl mx-auto pt-6 pb-4">
          Enhance your customer feedback by soliciting reviews from the most
          impactful platforms. With Sendtruly's online review software, you can
          request reviews on:
        </p>
        <div className="flex gap-[2rem] text-pinks text-xl font-bold pb-6 items-center justify-center flex-wrap">
          <p>Google</p>
          <p>TripAdvisor</p>
          <p>SendTruly</p>
          <p>Jumia</p>
          <p>Yelp</p>
          <p>Facebook</p>
        </div>
        <h2 className="text-xl md:text-3xl md:text-[30px] font-semibold max-w-[50rem] mx-auto">
          Tips When Requesting Customer Reviews
        </h2>

        {/* sms text review */}
        <div className="mt-20 flex justify-between gap-10 items-center w-full flex-col-reverse lg:flex-row-reverse ">
          <div className=" lg:max-w-[35rem] flex flex-col gap-[3rem]">
            <div className="flex flex-col gap-4">
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
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  Be Concise & Clear
                </h1>
                <p className=" text-left text-lg md:text-2xl mt-2">
                  Given that text messages are usually read while on the move,
                  it's essential to keep your message concise and clear. Begin
                  with a warm greeting and promptly convey your purpose. Clearly
                  express your request for a review, briefly explaining how it
                  benefits your business or potential customers.
                </p>
              </div>
              <div>
                <h1 className=" text-left text-lg font-bold md:text-2xl">
                  Personalize Your Messages
                </h1>
                <p className=" text-left text-lg md:text-2xl mt-2">
                  Enhancing engagement is greatly achievable through
                  personalization. Incorporate the customer's name for a more
                  personalized approach, and highlight their unique interactions
                  with your business to convey a message that feels tailored
                  rather than generic
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-start ">
            <div className="">
              <img src={getImageSrc("review_3.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSeekReviews;
