import { Link } from "react-router-dom";

const TwoWayMessage = () => {
  return (
    <section className="bg-[#E9F3FF] text-black py-20">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-[45px] font-bold">
          Maximize Customer Engagement with Two‑Way SMS
        </h1>
        <p className="w-full md:w-[90%] text-xl mx-auto py-10">
          Start your texting campaigns today and enjoy the flexibility of mass
          texting or the personalized engagement of one-on-one discussions.
          Register now to access our free SMS credits and discover the
          simplicity and rewards of utilizing our all-in-one features
        </p>

        <div className="flex items-center justify-center gap-1">
          <Link
            to={"mailto:support@sendtruly.com"}
            className="text-sm sm:text-xl cursor-pointer font-bold hover:text-pinks"
          >
            support@sendtruly.com
          </Link>
          <p className="font-bold text-sm sm:text-base">|</p>
          <Link
            to={"tel:++2348122102999"}
            className="text-sm sm:text-xl cursor-pointer font-bold hover:text-pinks"
          >
            +2348122102999
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TwoWayMessage;
