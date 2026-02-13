import { SlideType, SlideContent } from './types';
import { IMAGES } from './images'; // Resimleri artık buradan çekiyoruz

// YouTube Video ID for background music
// Video: https://www.youtube.com/watch?v=GnJjJDlk7_g
export const YOUTUBE_VIDEO_ID = "GnJjJDlk7_g";

export const SLIDES: SlideContent[] = [
  {
    id: 0,
    type: SlideType.INTRO,
    title: "Bizim Hikayemiz",
    text: "Sadece ikimiz için..."
  },
  {
    id: 1,
    type: SlideType.MEMORY,
    title: "Unutulmaz Anlar",
    text: "Seninle geçen her saniye, hayatımın en güzel fotoğraf karesi gibi.",
    image: IMAGES.memory, // images.ts dosyasından geliyor
    watermark: "Anılar"
  },
  {
    id: 2,
    type: SlideType.MEMORY,
    title: "Nişan Davetiyemiz",
    text: "Şeymanur & Akif\n05 Ekim 2025",
    image: IMAGES.invitation, // images.ts dosyasından geliyor
    watermark: "Davet",
    imageRotate: "rotate-0"
  },
  {
    id: 3,
    type: SlideType.MESSAGE,
    title: "Sana Dair",
    text: "Varlığın, karmaşık dünyamdaki en huzurlu melodi. Seni kelimelerin ötesinde seviyorum."
  },
  {
    id: 4,
    type: SlideType.MUSIC,
    title: "Bizim Şarkımız",
    text: "River Flows In You",
    extra: [
      "Huzurun sesi...",
      "Seninle sonsuzluğa",
      "Akan zaman gibi"
    ]
  },
  {
    id: 5,
    type: SlideType.DREAMS,
    title: "Gelecek Hayallerimiz",
    extra: [
      "Birlikte dünyayı gezmek",
      "Küçük, huzurlu bir ev",
      "Yağmurda birlikte yürümek",
      "Sonsuza dek el ele olmak"
    ]
  },
  {
    id: 6,
    type: SlideType.FINAL,
    title: "İyi ki Varsın",
    text: "Sevgililer Günümüz Kutlu Olsun Sevgilim ❤️"
  }
];