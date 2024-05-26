import React from "react";
import { twMerge } from "tailwind-merge";

const TextContainer = ({ title, desc, className }) => {
  return (
    <div
      className={twMerge(
        "flex w-fit flex-col text-lg leading-tight",
        className,
      )}
    >
      <p className="flex flex-col gap-1 font-semibold text-primary">{title}</p>
      {desc && <span className="text-gray">{desc}</span>}
    </div>
  );
};

export default TextContainer;
