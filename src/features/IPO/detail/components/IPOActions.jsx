import React, { useRef } from "react";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import GoBack from "components/GoBack";
import TextContainer from "features/IPO/components/TextContainer";
import usePdfDownload from "utils/hooks/usePdfDownload";

const IPOActions = ({ companyInfo, company, asset }) => {
  const pageRef = useRef(null);
  const { downloadPdf } = usePdfDownload(`${process.env.PUBLIC_URL}/dummy.pdf`);

  return (
    <div
      ref={pageRef}
      className="flex flex-wrap items-center justify-between gap-4"
    >
      {/* COMPANY SECTION */}
      <section className="flex items-center gap-4">
        <GoBack className="hidden md:inline-flex" />
        <div class="flex items-center text-sm">
          <div class="relative mr-2 h-12 w-12 rounded-full md:block">
            <img
              class="h-full w-full rounded-full object-cover"
              src={asset}
              alt=""
              loading="lazy"
            />
          </div>
          <TextContainer title={company} desc={companyInfo.title} />
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="hidden items-center justify-center gap-5 md:flex">
        <BsFileEarmarkArrowDownFill
          onClick={downloadPdf}
          size={40}
          className="cursor-pointer text-primary"
        />
        <button className="btn btn--primary h-14 w-44">Apply now</button>
      </section>
    </div>
  );
};

export default IPOActions;
