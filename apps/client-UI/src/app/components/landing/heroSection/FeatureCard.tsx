type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  showRings?: boolean;
};

const FeatureCard = ({
  title,
  description,
  image,
  ctaText,
  showRings = true,
}: FeatureCardProps) => {
  return (
    <div className="relative w-52 h-64 rounded-2xl bg-white/90 p-4 shadow-xl overflow-hidden">
      {/* Radial rings (background layer) */}
      {showRings && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[280px] h-[280px] rounded-full border-x-2 border-red-200/80" />
          <div className="absolute w-[220px] h-[220px] rounded-full border-x-2 border-red-200/80" />
          <div className="absolute w-[160px] h-[160px] rounded-full border-x-2 border-red-200/80" />
        </div>
      )}

      {/* Text content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="font-semibold text-[#e9344c]">{title}</h3>

        <p className="mt-2 text-xs text-gray-700">{description}</p>

        {ctaText && (
          <span className="absolute bottom-4 left-1 text-xs font-semibold text-[#e9344c] z-20">
            {ctaText}
          </span>
        )}
      </div>
      {/* Avatar */}
      <div className="absolute bottom-0 right-0 w-24 h-36 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
