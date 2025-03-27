import { PriceTag } from "../../components";
import { getImageSrc } from "../../utils/imageUtils";

const benefits = [
  [
    "100 Free SMS",
    "1 Sub-account",
    "1 User",
    "Contact Reputaion",
    "Unlimted Contacts",
  ],
  [
    "Standard ₦3 Per SMS",
    "Compliance & Deliverability Monitoring",
    "Schedule and segmentation",
    "Access to Reports",
    "Access to Report",
    "API Access",
    "Unlimited Contacts",
  ],
  [
    "2,000 SMS/Monthly",
    "2,000 Reviews & Text2pay",
    "Dashboard & Analytics",
    "Unlimted API Access",
    "Compliance & Deliverability Monitoring",
    "Schedule and segmentation",
    "Unlimited Contacts",
  ],
  [
    "1,000 Free/Monthly",
    "Billed monthly",
    "Spend commitment Required",
    "Charges based on total email sends.",
  ],
  [
    "Custom sites and database size",
    "Customer loyalty program",
    "Points program",
    "Reward redmption",
    "VIP tiers based on points",
    "Loyalty automations",
    "Powerful segmentaion",
    "Referral program",
    "Customer profiles",
    "Customer feedback surveys",
    "Email Campaigns",
    "Marketing Automations",
    "Campaign Media Library",
    "Analytics and reporting",
    "Add-on products",
    "API Access",
    "Dedicated Success Manager",
    "Premium onboarding",
    "Priority technical support",
  ],
];

const PricingPlan = () => {
  console.log(benefits[0]);
  return (
    <section className="py-[6rem]">
      <div className="max-w-[1100px] xl:max-w-[1440px] mx-auto px-4 text-center">
        <h1 className="text-[20px] sm:text-[36px] font-medium">
          Thoughtfully Organised Services Tailored to Your Business
        </h1>
        <p className="font-normal text-[20px] sm:text-[24px]">
          Simple, Low Cost Plans for Everyone
        </p>

        <div className="grid lg:grid-cols-2 lgs:grid-cols-3 items-start gap-10 mt-10">
          {/* free */}
          <PriceTag
            planId="1"
            planName="Free Plan"
            desc="Recommended up to 1,000 contacts"
            benefits={benefits[0]}
            price="100/SMS"
          />
          {/* free */}
          <PriceTag
            planId="2"
            planName="SMS"
            desc="Recommended up to 1,000 contacts"
            benefits={benefits[1]}
            price="N3/SMS"
          />
          {/* free */}
          <PriceTag
            planId="3"
            planName="Enterprise"
            desc="Recommended up to 1,000 contacts"
            benefits={benefits[2]}
            price="N29,999"
          />

          {/* support tier */}
          <div className="rounded-[20px] border border-[#CBD6FF] p-4 md:p-10">
            <h2 className="text-[15px] sm:text-[21px] font-bold">
              Your Support Tier
            </h2>
            <h1 className="text-[20px] sm:text-[38.59px] text-[#325AFF] font-bold">
              Professional Support
            </h1>

            <div>
              <p className="font-bold">Your plan includes:</p>
              <ul className="flex flex-col gap-2 my-5">
                <li className="flex items-center gap-2">
                  <div>
                    <img src={getImageSrc("check.png")} alt="" />
                  </div>
                  Assited onboarding support
                </li>
                <li className="flex items-center gap-2">
                  <div>
                    <img src={getImageSrc("check.png")} alt="" />
                  </div>
                  Access to 24/7/365 customer support
                </li>
              </ul>
            </div>
          </div>

          {/* free */}
          <PriceTag
            planId="4"
            planName="Email"
            desc="Recommended up to 100,000 of emails"
            benefits={benefits[3]}
            price="N19,999"
          />

          {/* loyalty */}
          <PriceTag
            planId="5"
            planName="Loyalty"
            desc="Recommended for retail stores restaurants etc"
            benefits={benefits[4]}
            price="N50,000"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
