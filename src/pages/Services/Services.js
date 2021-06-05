import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour } from "./Services-data";

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;
