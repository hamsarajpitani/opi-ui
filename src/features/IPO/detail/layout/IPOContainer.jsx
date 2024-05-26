import { tw } from "utils/helpers/tw";

const IPOContainer = ({ title, showBorderOnMobile, className, children }) => {
  return (
    <section
      className={tw(
        "relative rounded-2xl border-secondary/50 p-0 md:border md:p-5",
        {
          border: showBorderOnMobile,
        },
        className,
      )}
    >
      {title && (
        <h5 className="mb-4 text-base font-semibold text-primary">{title}</h5>
      )}
      {children}
    </section>
  );
};

export default IPOContainer;
