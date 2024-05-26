import React from "react";
import { tw } from "utils/helpers/tw";

const TextContainer = ({ title, highlightText, desc, className }) => {
  return (
    <div className={tw("flex w-fit flex-col text-lg leading-tight", className)}>
      <p className="flex gap-1 font-semibold text-primary">
        {title}
        {highlightText && (
          <>
            &nbsp;(
            <span className="text-ternary inline-flex h-fit">
              {highlightText}
            </span>
            )
          </>
        )}
      </p>
      {desc && <span className="text-gray">{desc}</span>}
    </div>
  );
};

export default TextContainer;
