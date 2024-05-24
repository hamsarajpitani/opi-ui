import React, { useContext } from "react";
import { DetailPageContext } from "..";
import DetailContainer from "../shared/IPOContainer";
import ReadMore from "../../../../components/Readmore";

const IPOAbout = () => {
  const { companyInfo } = useContext(DetailPageContext);

  return (
    <DetailContainer title="About the company">
      {/* USE ONLY HERE FOR MAIN PRODUCT PROPER MARKDOWN EDITOR */}
      <ReadMore>
        <div
          className="text-secondary"
          style={{ WebkitLineClamp: 2 }}
          dangerouslySetInnerHTML={{ __html: companyInfo.summary }}
        />
      </ReadMore>
    </DetailContainer>
  );
};

export default IPOAbout;
