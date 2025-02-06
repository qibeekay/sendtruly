import React from "react";
import {
  Global,
  Header,
  Newsletter,
  Services,
  Solution,
  Solution2,
  Trusted,
} from "../../components";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Trusted />
      <Solution />
      <Services />
      <Solution2 />
      <Global />
      <Newsletter />
    </div>
  );
};

export default HomePage;
