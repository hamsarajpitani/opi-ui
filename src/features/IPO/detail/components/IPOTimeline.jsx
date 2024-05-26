import React from "react";
import dayjs from "dayjs";
import Stepper from "components/Stepper";

import IPOContainer from "../layout/IPOContainer";

const stageLabels = {
  bidding_starts: "Bidding Starts",
  bidding_ends: "Bidding Ends",
  allotment_finalization: "Allotment Finalization",
  refund_initiation: "Refund Initiation",
  demat_transfer: "Demat Transfer",
  listing_date: "Listing Date",
};

const IPOTimeline = ({ ipoTimeline }) => {
  const stepperData = ipoTimeline?.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.stage]: curr.date ? dayjs(curr.date).format("DD MMM YYYY") : null,
    }),
    {},
  );
  return (
    <div>
      <IPOContainer title="IPO timeline">
        <Stepper data={stepperData} labels={stageLabels} />
      </IPOContainer>
    </div>
  );
};

export default IPOTimeline;
