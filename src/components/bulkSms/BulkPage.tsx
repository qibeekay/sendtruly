import React from "react";
import {
  Connect,
  CreateSet,
  MassText,
  Maximize,
  SmsHeader,
} from "../../components";

const BulkPage = () => {
  return (
    <div>
      <SmsHeader />
      <MassText />
      <Connect />
      <CreateSet />
      <Maximize />
    </div>
  );
};

export default BulkPage;
