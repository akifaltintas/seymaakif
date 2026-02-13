import { SlideType, SlideContent } from './types';
import { IMAGES } from './images';

// YouTube Video ID for background music
// Video: https://www.youtube.com/watch?v=GnJjJDlk7_g
export const YOUTUBE_VIDEO_ID = "GnJjJDlk7_g";

export const SLIDES: SlideContent[] = [
  // 1. GİRİŞ
  {
    id: 0,
    type: SlideType.INTRO,
    title: "Bizim Hikayemiz",
    text: "Sadece ikimiz için..."
  },
  // 2. BAŞLANGIÇ HİSSİ
  {
    id: 1,
    type: SlideType.MESSAGE,
    title: "Başlangıç",
    text: "Her güzel hikaye bir tesadüfle başlar ama bizimki kaderdi..."
  },
  // 3. İLK GÖRÜŞ
  {
    id: 2,
    type: SlideType.MESSAGE,
    title: "O İlk An",
    text: "Seni ilk gördüğümde, hayatımın geri kalanının değişeceğini hissetmiştim."
  },
  // 4. FOTOĞRAF - TANIŞMA/İLK ZAMANLAR
  {
    id: 3,
    type: SlideType.MEMORY,
    title: "İlk Günlerimiz",
    text: "Zaman ne çabuk geçiyor... Ama seninle geçen her saniye çok kıymetli.",
    image: IMAGES.memory, 
    watermark: "Başlangıç"
  },
  // 5. SEVGİ NEDENİ 1
  {
    id: 4,
    type: SlideType.MESSAGE,
    title: "Neden Sen?",
    text: "Çünkü sen, karanlık günlerimde bile güneşi doğurabilen tek kişisin."
  },
  // 6. SEVGİ NEDENİ 2
  {
    id: 5,
    type: SlideType.MESSAGE,
    title: "Gülüşün",
    text: "Sen güldüğünde dünya daha yaşanılır bir yer oluyor sevgilim."
  },
  // 7. FOTOĞRAF - GÜLÜMSEME/MUTLULUK
  {
    id: 6,
    type: SlideType.MEMORY,
    title: "Mutluluk Kaynağım",
    text: "Yüzündeki o tebessüm olmak için her şeyi yaparım.",
    image: IMAGES.smile,
    watermark: "Huzur",
    imageRotate: "-rotate-2"
  },
  // 8. DUYGU 
  {
    id: 7,
    type: SlideType.MESSAGE,
    title: "Huzur",
    text: "Senin yanın, dünyanın en güvenli limanı. Fırtınalar kopsa da seninle güvendeyim."
  },
  // 9. BİRLİKTELİK
  {
    id: 8,
    type: SlideType.MESSAGE,
    title: "Birlikteyken",
    text: "Seninle saçmalamayı, en ciddi konuları konuşmayı ve bazen sadece susmayı seviyorum."
  },
  // 10. FOTOĞRAF - EL ELE / ROMANTİK
  {
    id: 9,
    type: SlideType.MEMORY,
    title: "Hiç Bırakma",
    text: "Elimi tuttuğun an, tüm dertlerimi unuttuğum andır.",
    image: IMAGES.hands,
    watermark: "Biz",
    imageRotate: "rotate-1"
  },
  // 11. MÜZİK MOLASI
  {
    id: 10,
    type: SlideType.MUSIC,
    title: "Melodimiz",
    text: "Kalbinin Ritmi",
    extra: [
      "Dinlediğim en güzel şarkı,",
      "Senin sesin..."
    ]
  },
  // 12. ÖZLEMEK
  {
    id: 11,
    type: SlideType.MESSAGE,
    title: "Özlem",
    text: "Yanımdayken bile seni özlüyorum. Bu nasıl bir büyü?"
  },
  // 13. KÜÇÜK DETAYLAR
  {
    id: 12,
    type: SlideType.MESSAGE,
    title: "Detaylar",
    text: "Kirpiklerinin ucuna kadar ezberimdesin..."
  },
  // 14. FOTOĞRAF - KAHVE/GÜNLÜK HAYAT
  {
    id: 13,
    type: SlideType.MEMORY,
    title: "Sıradan Anlar",
    text: "Seninle içilen bir kahve bile dünyanın en lüks ziyafetinden daha değerli.",
    image: IMAGES.coffee,
    watermark: "Keyif",
    imageRotate: "rotate-3"
  },
  // 15. İYİ Kİ VARSIN
  {
    id: 14,
    type: SlideType.MESSAGE,
    title: "İyi ki...",
    text: "Hayatıma girdiğin gün, takvimdeki en güzel gündü."
  },
  // 16. HAYALLER - GİRİŞ
  {
    id: 15,
    type: SlideType.MESSAGE,
    title: "Geleceğimiz",
    text: "Gözlerimi kapattığımda kurduğum her hayalde sen varsın."
  },
  // 17. HAYALLER LİSTESİ
  {
    id: 16,
    type: SlideType.DREAMS,
    title: "Hayallerimiz",
    extra: [
      "Birlikte dünyayı gezmek",
      "Yağmurda ıslanmak",
      "Küçük, huzurlu bir ev",
      "Sonsuza dek el ele olmak"
    ]
  },
  // 18. FOTOĞRAF - DOĞA/TATİL
  {
    id: 17,
    type: SlideType.MEMORY,
    title: "Yollar",
    text: "Yolun nereye çıktığı önemli değil, yoldaşım sen ol yeter.",
    image: IMAGES.nature,
    watermark: "Macera",
    imageRotate: "-rotate-1"
  },
  // 19. ZORLUKLAR
  {
    id: 18,
    type: SlideType.MESSAGE,
    title: "Her Şeye Rağmen",
    text: "Hayat bazen zor olabilir ama biz birlikte her şeyin üstesinden geliriz."
  },
  // 20. DESTEK
  {
    id: 19,
    type: SlideType.MESSAGE,
    title: "Gücüm",
    text: "Düştüğümde beni kaldıran elin, en büyük dayanağım."
  },
  // 21. SÖZLER 1
  {
    id: 20,
    type: SlideType.MESSAGE,
    title: "Söz Veriyorum",
    text: "Seni her gün, dünden daha çok seveceğime söz veriyorum."
  },
  // 22. SÖZLER 2
  {
    id: 21,
    type: SlideType.MESSAGE,
    title: "Daima",
    text: "Saçlarına aklar düşse de, yüzün kırışsa da benim için hep en güzeli sen olacaksın."
  },
  // 23. NİŞAN/ÖZEL GÜN
  {
    id: 22,
    type: SlideType.MEMORY,
    title: "Büyük Gün Yaklaşıyor",
    text: "Şeymanur & Akif\n05 Ekim 2025\nBu tarih bizim miladımız.",
    image: IMAGES.invitation,
    watermark: "Davet",
    imageRotate: "rotate-0"
  },
  // 24. HEYECAN
  {
    id: 23,
    type: SlideType.MESSAGE,
    title: "Heyecan",
    text: "Seninle 'Evet' diyeceğimiz günü iple çekiyorum."
  },
  // 25. AİLE
  {
    id: 24,
    type: SlideType.MESSAGE,
    title: "Yuvamız",
    text: "Sen benim evimsin. Nereye gidersek gidelim, kalbin benim yuvam."
  },
  // 26. SONSUZLUK
  {
    id: 25,
    type: SlideType.MESSAGE,
    title: "Sonsuzluk",
    text: "Bu hikayenin sonu yok, çünkü aşkımız sonsuz..."
  },
  // 27. TEŞEKKÜR
  {
    id: 26,
    type: SlideType.MESSAGE,
    title: "Teşekkür Ederim",
    text: "Beni dünyanın en şanslı insanı yaptığın için teşekkür ederim sevgilim."
  },
  // 28. HEDİYE NOTU
  {
    id: 27,
    type: SlideType.MESSAGE,
    title: "Küçük Bir Not",
    text: "Bu site belki basit kodlardan ibaret ama her satırında seni düşündüm."
  },
  // 29. FİNAL ÖNCESİ
  {
    id: 28,
    type: SlideType.MESSAGE,
    title: "Ve Şimdi...",
    text: "Sana söylemek istediğim tek bir şey kaldı..."
  },
  // 30. FİNAL
  {
    id: 29,
    type: SlideType.FINAL,
    title: "Seni Çok Seviyorum",
    text: "Sevgililer Günümüz Kutlu Olsun Canım Sevgilim ❤️"
  }
];