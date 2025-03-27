import { Link } from "react-router-dom";
import { getImageSrc } from "../../utils/imageUtils";

const Footer = () => {
  return (
    <footer className=" bg-darkblue text-white p-4 lg:p-10 ">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-10">
        <div className="font-monts">
          <h1 className="font-bold text-center text-[40px] xs:text-[50px] sm:text-[70px] lg:text-[100px] xl:text-[128px]">
            sendtruly
          </h1>
          <p className="font-bold text-base lg:text-xl xl:text-2xl text-center">
            SMS | Email | Whatsapp | Loyalty | Review | Text2Pay
          </p>
        </div>

        <div className=" flex flex-col gap-3">
          {/* social links */}
          <div className="flex items-center justify-center gap-4">
            {/* linkedin */}
            <div>
              <Link to={""}>
                <img src={getImageSrc("insta.png")} alt="linkedin link" />
              </Link>
            </div>
            {/* instagram */}
            <div>
              <Link to={""}>
                <img src={getImageSrc("Link.png")} alt="instagram link" />
              </Link>
            </div>
            {/* twiter */}
            <div>
              <Link to={""}>
                <img src={getImageSrc("tweet.png")} alt="twitter link" />
              </Link>
            </div>
            {/* facebook */}
            <div>
              <Link to={""}>
                <img src={getImageSrc("face.png")} alt="facebook link" />
              </Link>
            </div>
            {/* youtube */}
            <div>
              <Link to={""}>
                <img src={getImageSrc("tube.png")} alt="youtube link" />
              </Link>
            </div>
          </div>

          {/* copyright/info */}
          <div className="text-center font-poppins flex flex-col gap-3">
            <p className=" text-[14px]">
              Copyright © 2024, Sendtruly — built in Nigeria
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4">
              <Link to={""} className=" text-[14px]">
                Terms of Services
              </Link>
              <Link to={""} className=" text-[14px]">
                Privacy Policy
              </Link>
            </div>

            <h2 className="font-bold  text-[14px]">Need help?</h2>

            <div className="flex items-center justify-center flex-wrap gap-4">
              <Link className=" text-[14px]" to={"mailto: info@sendtruly.com"}>
                info@sendtruly.com
              </Link>
              <Link className=" text-[14px]" to={""}>
                +234 812 210 2999
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
