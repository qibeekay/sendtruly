import React from "react";
import {
  Employ,
  Promote,
  TwoWayHeader,
  TwoWayMessage,
  Utilize,
} from "../../components";

const TwoWayPage = () => {
  return (
    <div>
      <TwoWayHeader />
      <Utilize />
      <Employ />
      <Promote />
      <TwoWayMessage />
    </div>
  );
};

export default TwoWayPage;
