import React from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <section className="font-monts ">
      <div className="max-w-[1440px] px-4 mx-auto">
        <h1 className="font-bold text-[20px] md:text-[36px] mb-4">
          Frequently Asked Questions
        </h1>

        <div className="bg-white rounded-t-[20px]  p-4 md:p-10 flex items-center flex-col lg:flex-row justify-center gap-5 lg:gap-10">
          <div className="w-full text-[20px] flex flex-col gap-5 lg:gap-2">
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                How do i get started?
              </h1>
              <p className="text-sm sm:text-base">
                Getting started is easy! You can install{" "}
                <Link to={"sendtruly.com"} className="underline">
                  sendtruly.com
                </Link>{" "}
                from the add-on store for free or click any of the Get Started
                buttons on the site.
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                How does a free trial work?
              </h1>
              <p className="text-sm sm:text-base">
                Try sendtruly Pro risk-free for your business with a 100 free
                SMS trial. No commitments.{" "}
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">How do I pay?</h1>
              <p className="text-sm sm:text-base">
                We accept all major credit cards and you can enter or update
                your payment details on your account page at any time
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                Will the Free plan give me access to all the features of your
                paid plans?
              </h1>
              <p className="text-sm sm:text-base">
                While on a Free plan, you can explore all the features of our
                paid plans, as well as a variety of channels, including SMS,
                Text2Pay, Product Reviews, Loyalty
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                I have more questions. How can I reach you?
              </h1>
              <p className="text-sm sm:text-base">
                Simply send us an email at 
                <span className="font-bold">
                  info@sendtruly.com or call & WhatsApp us up on +2348122102999
                </span>{" "}
                We’re checking it 24/7 and we’ll be happy to answer any of your
                questions.
              </p>
            </div>
          </div>

          <div className="w-full text-[20px] flex flex-col gap-2">
            <div className="">
              <h1 className="text-sm xs:text-base font-bold">
                Can I import subscribers from another service?{" "}
              </h1>
              <p className="text-sm sm:text-base">
                Absolutely! If you are migrating from another SMS or email
                service, please get in touch with us and we would be happy to
                assist you. In addition, sendtruly SMS & Email offers a wide
                variety of subscription tools that will help you grow your
                subscriber lists even further.
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                Does sendtruly support multiple domains?
              </h1>
              <p className="text-sm sm:text-base">
                Yes, sendtruly supports multiple domains. Talk to us and we can
                set up a customised plan. Additional fees may apply.
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                How am I billed?{" "}
              </h1>
              <p className="text-sm sm:text-base">
                Brands load funds into the sendtruly.com app and are billed
                according to the billing period creating budget predictability.
                Funds are then subtracted as messages are sent through campaigns
                and flows according to the price per message outlined in the
                selected plan.
              </p>
            </div>
            <div>
              <h1 className="text-sm xs:text-base font-bold">
                Why is the VAT not included in the price?
              </h1>
              <p className="text-sm sm:text-base">
                  VAT’s aren’t included because VAT’s vary from country to
                country. For example, it may sometimes vary from 5% to 25%, so
                to be more accurate about the price, the VAT is excluded. For
                example – Germany has a 19% VAT, Nigeria 7.5%, while France has
                a 20% VAT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
