import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type GhostRowProps = {
  text: string;
  wordsPerRow: number;
  direction: 'left' | 'right';
};

const GhostRow: React.FC<GhostRowProps> = ({
  text,
  wordsPerRow,
  direction,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        duration: direction === 'left' ? 26 : 30,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls, direction]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="pointer-events-auto flex gap-4 whitespace-nowrap w-max mask-fade-x"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
            transition: {
              duration: direction === 'left' ? 26 : 30,
              ease: 'linear',
              repeat: Infinity,
            },
          })
        }
      >
        {/* first copy */}
        {Array.from({ length: wordsPerRow }).map((_, i) => (
          <span key={`a-${i}`}>{text}</span>
        ))}

        {/* duplicate for seamless loop */}
        {Array.from({ length: wordsPerRow }).map((_, i) => (
          <span key={`b-${i}`}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default GhostRow;
