export enum SlideType {
  INTRO = 'INTRO',
  MEMORY = 'MEMORY',
  MESSAGE = 'MESSAGE',
  MUSIC = 'MUSIC',
  DREAMS = 'DREAMS',
  FINAL = 'FINAL',
  WHATSAPP = 'WHATSAPP',
  COLLAGE = 'COLLAGE'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title?: string; // Used for Sender Name in WhatsApp mode
  text?: string;
  image?: string;
  secondImage?: string; // For slides with two images
  collageImages?: string[]; // For the collage slide
  extra?: string[]; // For lists or lyrics
  watermark?: string;
  imageRotate?: string; // Custom rotation class (e.g., 'rotate-0')
  aspectRatio?: string; // Custom aspect ratio (e.g., 'aspect-video' for landscape)
  messages?: { text: string; time: string; isSender: boolean }[]; // Specific for WhatsApp
  date?: string; // Specific for WhatsApp date separator
  footerText?: string; // Text to display at the bottom of the slide
  textAlign?: string; // 'text-left', 'text-center', etc.
  author?: string; // For quotes/poems
  collageLayout?: 'grid' | 'row' | 'col'; // Layout style for collage
}