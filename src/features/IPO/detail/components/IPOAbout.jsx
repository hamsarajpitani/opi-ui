import React from "react";
import ReadMore from "components/Readmore";
import IPOContainer from "../layout/IPOContainer";

const IPOAbout = ({ companyInfo }) => {
  return (
    <IPOContainer title="About the company">
      {/* USING ONLY HERE FOR MAIN PRODUCT PROPER MARKDOWN EDITOR */}
      <ReadMore>
        <div
          className="text-secondary"
          style={{ WebkitLineClamp: 2 }}
          dangerouslySetInnerHTML={{ __html: companyInfo.summary }}
        />
      </ReadMore>
    </IPOContainer>
  );
};

export default IPOAbout;
