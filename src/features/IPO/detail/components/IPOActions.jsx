import React, { useContext, useRef } from "react";
import { MdArrowBackIos } from "react-icons/md";
import {
  BsFileEarmarkArrowDown,
  BsFileEarmarkArrowDownFill,
} from "react-icons/bs";

import { DetailPageContext } from "..";

const IPOActions = () => {
  const { company, companyInfo, asset } = useContext(DetailPageContext);

  const pageRef = useRef(null);

  const downloadPage = () => {
    window.print();
  };

  return (
    <div
      ref={pageRef}
      className="flex flex-wrap items-center justify-between gap-4"
    >
      {/* COMPANY SECTION */}
      <section className="flex items-center gap-4">
        <div className="hidden h-11 w-11 place-content-center rounded-lg border p-2 shadow-md md:grid">
          <MdArrowBackIos />
        </div>
        <div class="flex items-center text-sm">
          <div class="relative mr-2 h-12 w-12 rounded-full md:block">
            <img
              class="h-full w-full rounded-full object-cover"
              src={asset}
              alt=""
              loading="lazy"
            />
            <div
              class="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p class="text-xl font-semibold text-primary">{company}</p>
            <p class="text-base text-secondary">{companyInfo.title}</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="hidden items-center justify-center gap-5 md:flex">
        <BsFileEarmarkArrowDownFill
          onClick={downloadPage}
          size={40}
          className="cursor-pointer text-primary"
        />
        <button className="btn btn--primary h-14 w-44">Apply now</button>
      </section>
    </div>
  );
};

export default IPOActions;
