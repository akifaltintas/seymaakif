export enum SlideType {
  INTRO = 'INTRO',
  MEMORY = 'MEMORY',
  MESSAGE = 'MESSAGE',
  MUSIC = 'MUSIC',
  DREAMS = 'DREAMS',
  FINAL = 'FINAL',
  WHATSAPP = 'WHATSAPP'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title?: string; // Used for Sender Name in WhatsApp mode
  text?: string;
  image?: string;
  extra?: string[]; // For lists or lyrics
  watermark?: string;
  imageRotate?: string; // Custom rotation class (e.g., 'rotate-0')
  messages?: { text: string; time: string; isSender: boolean }[]; // Specific for WhatsApp
  date?: string; // Specific for WhatsApp date separator
  footerText?: string; // Text to display at the bottom of the slide
}