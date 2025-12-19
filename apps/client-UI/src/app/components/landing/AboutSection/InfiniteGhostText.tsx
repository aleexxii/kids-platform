import GhostRow from './GhostRow';

type InfiniteGhostTextProps = {
  text?: string;
  rows?: number;
  wordsPerRow?: number;
  className?: string;
};

const InfiniteGhostText: React.FC<InfiniteGhostTextProps> = ({
  text = 'KIDDO',
  rows = 12,
  wordsPerRow = 8,
  className = '',
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 
                  flex flex-col justify-center gap-6 
                  overflow-hidden select-none ${className}`}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <GhostRow
          key={rowIndex}
          text={text}
          wordsPerRow={wordsPerRow}
          direction={rowIndex % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default InfiniteGhostText;
