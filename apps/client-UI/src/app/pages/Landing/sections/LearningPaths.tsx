import SectionShell from '@/app/layouts/SectionShell';
import { ImageCard } from '../../../components/landing/learning-path/ImageCard'
import { learningPathCards } from './learningPaths.config';

const LearningPaths: React.FC = () => {
  return (
    <SectionShell id='learning-paths' className="min-h-screen px-6 py-16 md:py-24" topHeight='h-2/4' bottomHeight='h-2/5'>
      <div className="mx-auto max-w-7xl grid grid-cols-8 grid-rows-2 gap-6">
        {learningPathCards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </SectionShell>
  );
};

export default LearningPaths;
