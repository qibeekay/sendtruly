import React from "react";
import {
  PaymentHeader,
  PaymentAccelerate,
  PaymentWork,
  PaymentBenefits,
  PaymentWhatMakes,
  PaymentGetStarted,
} from "../../components";
const PaymentPage = () => {
  return (
    <div>
      <PaymentHeader />
      <PaymentWork />
      <PaymentAccelerate />
      <PaymentBenefits />
      <PaymentWhatMakes />
      <PaymentGetStarted />
    </div>
  );
};

export default PaymentPage;
