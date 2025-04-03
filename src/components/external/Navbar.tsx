import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImageSrc } from "../../utils/imageUtils";

const Navbar = () => {
  const [features, setFeatures] = useState(false);
  const [nav, setnav] = useState(false);

  const toggleNav = () => {
    setnav(!nav);
  };

  const handleMouseEnter = () => {
    setFeatures(true);
  };

  const handleMouseLeave = () => {
    setFeatures(false);
  };

  const toggleFeatures = () => {
    setFeatures(!features);
  };

  return (
    <div className="relative">
      <nav className="fixed bg-white w-full left-0 z-[20]  border-b border-b-black/10 ">
        <div className="flex max-w-[1100px] xl:max-w-[1440px] bg-white mx-auto px-4 items-center justify-between min-h-[60px]">
          {/* logo / links */}
          <div className="flex items-center gap-8">
            {/* logo */}
            <div>
              <Link to={"/"}>
                <img
                  src={getImageSrc("sendtruly-logo.png")}
                  alt="website logo"
                />
              </Link>
            </div>

            {/* links */}
            <ul className="hidden lg:flex items-center gap-4">
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-2 link">
                  Features{" "}
                </button>

                {/* features modal */}
                {features && (
                  <div className="absolute top-full w-[15rem] bg-white text-white rounded-md shadow-lg p-4">
                    <div className="flex flex-col items-start gap-4">
                      <Link to={"/bulk-sms"} className="font-bold text-black">
                        Bulk SMS
                      </Link>
                      <Link to={"/2way-sms"} className="font-bold text-black">
                        2way SMS
                      </Link>
                      <Link to={"/reviews"} className="font-bold text-black">
                        Reviews
                      </Link>
                      <Link to={"/payments"} className="font-bold text-black">
                        Payments
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link className="link" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to={
                    "https://documenter.getpostman.com/view/21023738/2s9YywdJvF"
                  }
                >
                  Integration
                </Link>
              </li>
              <li>
                <Link className="link" to={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* auths links */}
          <div className="hidden lg:flex items-center gap-4">
            <p className="link">info@sendtruly.com</p>

            {/* login */}
            <div>
              <Link
                className="link border border-darkblue bg-white rounded-[6px] py-[0.7rem] px-[2.5rem]"
                to={"https://app.sendtruly.com/login"}
              >
                Log in
              </Link>
            </div>

            {/* register */}
            <div className="">
              <Link
                className="link text-white border border-pinks bg-pinks rounded-[6px] py-[0.7rem] px-[2.5rem]"
                to={"https://app.sendtruly.com/register"}
              >
                Register
              </Link>
            </div>
          </div>

          {/* toggle nav */}
          <button className="flex flex-col gap-1 lg:hidden" onClick={toggleNav}>
            <div className="w-4 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </button>
        </div>
      </nav>

      {/* mobile nav */}
      <div
        className={`lg:hidden bg-white w-full h-[calc(100svh-65px)] fixed z-10 px-4 left-0 ease-in-out duration-500 transition-all ${
          nav ? "top-[4rem]" : "-top-[100%]"
        }`}
      >
        {/* links */}
        <ul className="flex flex-col gap-4 mt-7">
          <li className="">
            <button
              onClick={toggleFeatures}
              className="flex items-center gap-2 link cursor-pointer"
            >
              Features{" "}
            </button>

            {/* features modal */}
            {features && (
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  features ? "min-h-full py-2" : "h-0"
                }`}
              >
                <ul>
                  <div className="flex flex-col items-start gap-2 border-l-4 border-darkblue ml-6">
                    <Link
                      to={"/bulk-sms"}
                      onClick={() => {
                        setnav(false);
                      }}
                      className="pl-4 text-darkblue"
                    >
                      Bulk SMS
                    </Link>
                    <Link
                      to={"/2way-sms"}
                      onClick={() => {
                        setnav(false);
                      }}
                      className="pl-4 text-darkblue"
                    >
                      2way SMS
                    </Link>
                    <Link
                      to={"/reviews"}
                      onClick={() => {
                        setnav(false);
                      }}
                      className="pl-4 text-darkblue"
                    >
                      Reviews
                    </Link>
                    <Link
                      to={"/payments"}
                      onClick={() => {
                        setnav(false);
                      }}
                      className="pl-4 text-darkblue"
                    >
                      Payments
                    </Link>
                  </div>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              className="link"
              to={"/pricing"}
              onClick={() => setnav(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={"/https://documenter.getpostman.com/view/21023738/2s9YywdJvF"}
              onClick={() => setnav(false)}
            >
              Integration
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"} onClick={() => setnav(false)}>
              About
            </Link>
          </li>
          <li className="link">info@sendtruly.com</li>

          {/* login */}
          <li className="mt-4">
            <Link
              className="link border border-darkblue bg-white rounded-[6px] py-[0.7rem] px-[2.5rem]"
              to={"https://app.sendtruly.com/login"}
            >
              Log in
            </Link>
          </li>

          {/* register */}
          <li className="mt-8">
            <Link
              className="link text-white border border-pinks bg-pinks rounded-[6px] py-[0.7rem] px-[2.5rem]"
              to={"https://app.sendtruly.com/register"}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
