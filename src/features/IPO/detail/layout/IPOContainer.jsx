const IPOContainer = ({ title, children }) => {
  return (
    <section className="relative rounded-2xl border border-secondary/50 p-5">
      {title && (
        <h5 className="mb-4 text-base font-semibold text-primary">{title}</h5>
      )}
      {children}
    </section>
  );
};

export default IPOContainer;
