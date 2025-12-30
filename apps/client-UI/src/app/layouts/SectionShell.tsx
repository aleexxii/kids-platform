type SectionShellProps = {
  as?: "section" | "main" | "div";
  className?: string;
  topHeight?: string;    // e.g. "h-2/4", "h-1/6"
  bottomHeight?: string; // e.g. "h-2/5", "h-1/6"
  children: React.ReactNode;
};

const SectionShell: React.FC<SectionShellProps> = ({
  as: Tag = "section",
  className = "",
  topHeight = "h-1/6",
  bottomHeight = "h-1/6",
  children,
}) => {
  return (
    <Tag className={`relative overflow-hidden bg-[#E5203A] text-white ${className}`}>
      {/* TOP vignette */}
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 bg-gradient-to-b from-black/90 to-transparent ${topHeight}`}
      />
      {/* BOTTOM vignette */}
      <div
        className={`pointer-events-none absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/90 to-transparent ${bottomHeight}`}
      />
      {/* content */}
      <div className="relative">
        {children}
      </div>
    </Tag>
  );
};

export default SectionShell;
