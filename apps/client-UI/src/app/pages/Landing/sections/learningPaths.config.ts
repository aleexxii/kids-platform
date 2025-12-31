// learningPaths.config.ts
import {
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
} from '@/assets/images/learning-paths';

export interface CardConfig {
  src: string;
  colSpan: string;
  height: string;
  centerVertically?: boolean;
}

export const learningPathCards: CardConfig[] = [
  // Row 1
  { src: cardImg1, colSpan: 'col-span-2', height: 'h-[200px]', centerVertically: true },
  { src: cardImg2, colSpan: 'col-span-4', height: 'h-[380px]' },
  { src: cardImg3, colSpan: 'col-span-2', height: 'h-[200px]', centerVertically: true },

  // Row 2
  { src: cardImg4, colSpan: 'col-span-2', height: 'h-[200px]', centerVertically: true },
  { src: cardImg5, colSpan: 'col-span-2', height: 'h-[200px]', centerVertically: true },
  { src: cardImg6, colSpan: 'col-span-4', height: 'h-[380px]' },
];
