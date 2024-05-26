import React, { Fragment, useMemo } from "react";
import IPOContainer from "../layout/IPOContainer";
import TextContainer from "../../components/TextContainer";
import {
  formatToIndianCurrency,
  formatToIndianCurrencyWithLabel,
} from "../../../../utils/helpers/currencyFormatter";
import dayjs from "dayjs";
import { calculatePercentage } from "../../../../utils/helpers/calculatorPercentage";
import useIsMobile from "../../../../utils/hooks/useIsMobile";

const formatCurrencyRange = (min, max) =>
  `${formatToIndianCurrency(min)} - ${formatToIndianCurrency(max)}`;
const formatIssueDate = (start, end) =>
  `${dayjs(start).format("D MMM")} - ${dayjs(end).format("D MMM YY")}`;
const formatDate = (date) => dayjs(date).format("D MMM YY");

const IPODetailInfo = ({ selectedIpo }) => {
  const isMobile = useIsMobile();
  const {
    minPrice,
    maxPrice,
    minInvestment,
    listingPrice,
    listingGain,
    lotSize,
    listedOn,
    issueSize,
    issueStartDate,
    issueEndDate,
  } = selectedIpo;

  const desktopDetails = [
    {
      desc: "Listed on",
      title: formatDate(listedOn),
    },
    {
      desc: "Listed price",
      title: formatToIndianCurrency(listingPrice),
    },
    {
      desc: "Listing gains",
      title: formatToIndianCurrency(listingGain),
      highlightText: `${calculatePercentage(listingGain, minPrice)}%`,
    },
  ];

  const ipoDetails = useMemo(
    () => [
      {
        desc: "Issue size",
        title: `${formatToIndianCurrencyWithLabel(issueSize.min)} - ${formatToIndianCurrencyWithLabel(issueSize.max)}`,
      },
      {
        desc: "Price range",
        title: formatCurrencyRange(minPrice, maxPrice),
      },
      {
        desc: "Min amount",
        title: formatToIndianCurrency(minInvestment),
      },
      {
        desc: isMobile ? "Min quantity" : "Lot size",
        title: `${lotSize} shares ${!isMobile ? "/lots" : ""}`,
      },
      {
        desc: "Issue dates",
        title: formatIssueDate(issueStartDate, issueEndDate),
      },
      ...(isMobile ? [] : desktopDetails),
    ],
    [isMobile],
  );

  return (
    <Fragment>
      <IPOContainer title="IPO details">
        <IPOContainer showBorderOnMobile>
          <section className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ipoDetails.map((detail, index) => (
              <TextContainer
                key={index}
                {...detail}
                className="text-base [&>p]:order-1"
              />
            ))}
          </section>
        </IPOContainer>
      </IPOContainer>
    </Fragment>
  );
};

export default IPODetailInfo;
