import React from "react";

const CreateSet = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl md:text-[40px] font-bold max-w-[60rem] mx-auto">
          Create Set-It-and-Forget-It SMS Automated Messages
        </h1>
        <p className="w-full md:w-[75%] text-lg md:text-2xl mx-auto py-6">
          Bulk SMS, also known as mass text messaging, enables the simultaneous
          communication with hundreds or thousands of contacts in a single
          operation
        </p>

        <div className="grid md:grid-cols-2 lgs:grid-cols-3 gap-10 mt-4 md:mt-14 place-items-center">
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Birthday Texts
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              Ensure you never miss another important event! Craft your message,
              tailor it to your liking, schedule it, and watch it send
              automatically. Simplify those special moments with automated
              texts!
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Recurring Campaigns
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              Create and schedule recurring text messages to be sent daily,
              weekly or monthly. You choose the time frame and customize it to
              your liking. Have your message go out as often as you need.
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Conversation Triggers
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              Leveraging trigger messages proves exceptionally valuable for
              automatically addressing recurring customer inquiries, ultimately
              leading to improved conversion rates in all your SMS campaigns.
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Autoresponders
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              Auto reply texts are an excellent way to ensure that you stay on
              top of communication with customers. Setting up auto reply texts
              will make sure you automatically reply immediately.
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Away Messages
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              The away messaging feature offered by Sendtruly is an excellent
              asset for managing availability when you're not at your desk.
              Arrange for automated messages to be sent to contacts when you're
              away from the office
            </p>
          </div>
          <div className="max-w-[23rem]">
            <h1 className="text-lg md:text-2xl mx-auto font-bold">
              Scheduled Texts
            </h1>
            <p className="text-lg md:text-2xl mx-auto mt-4">
              Schedule and arrange the delivery of your messages. Pre-compose
              your message, indicate the desired date and time for sending, and
              allow our texting platform to handle the logistics smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSet;
