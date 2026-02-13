export enum SlideType {
  INTRO = 'INTRO',
  MEMORY = 'MEMORY',
  MESSAGE = 'MESSAGE',
  MUSIC = 'MUSIC',
  DREAMS = 'DREAMS',
  FINAL = 'FINAL'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title?: string;
  text?: string;
  image?: string;
  extra?: string[]; // For lists or lyrics
  watermark?: string;
  imageRotate?: string; // Custom rotation class (e.g., 'rotate-0')
}