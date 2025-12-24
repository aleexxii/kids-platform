const PuzzleChallenge: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#E5203A] text-white px-6 py-16 md:py-24">
      {/* TOP gradient */}
      <div
        className="pointer-events-none absolute top-0 inset-0 h-2/4 
                  bg-gradient-to-b from-black/90 to-transparent"
      />
      {/* BOTTOM gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-2/5 
                  bg-gradient-to-t from-black/90 to-transparent"
      />
    </section>
  );
};

export default PuzzleChallenge;
