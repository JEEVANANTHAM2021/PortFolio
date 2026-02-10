const CurvedSection = ({ children, curve = "bl", className ='' }) => {
  const curveMap = {
    bl: "rounded-bl-[120px]",
    br: "rounded-br-[120px]",
    tl: "rounded-tl-[120px]",
    tr: "rounded-tr-[120px]",
  };

  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 ${curveMap[curve]} ${className}`} />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default CurvedSection;