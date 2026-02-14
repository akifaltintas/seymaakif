import { SlideType, SlideContent } from './types';
import { IMAGES } from './images';

// YouTube Video ID for background music
// Video: https://www.youtube.com/watch?v=GnJjJDlk7_g
export const YOUTUBE_VIDEO_ID = "GnJjJDlk7_g";

export const SLIDES: SlideContent[] = [
  // 0. GİRİŞ (ŞİFRE EKRANI)
  {
    id: 0,
    type: SlideType.INTRO,
    title: "Bizim Hikayemiz",
    text: "Sadece ikimiz için..."
  },
  // 1. MASAL GİRİŞİ (YENİ)
  {
    id: 1,
    type: SlideType.MESSAGE,
    title: "Masal",
    text: "Şimdi sana bir masal anlatacağım..."
  },
  // 2. WHATSAPP MESAJI (GÜNCELLENDİ)
  {
    id: 2,
    type: SlideType.WHATSAPP,
    title: "Akif ALTINTAŞ", // Şeyma'nın telefonunda kayıtlı isim
    date: "27 Nisan 2023",
    footerText: "İlk mesajlaşmamızı hatırlıyor musun?",
    messages: [
      {
        text: "Selamun aleykum Şeymanur Hanım. Ben Akif. Numaranızı annemden aldım. Müsait misiniz?",
        time: "18:48",
        isSender: false // Akif (Sol)
      },
      {
        text: "Aleykum selam Akif Bey. Buyrun; müsaitim",
        time: "18:59",
        isSender: true // Şeyma (Sağ)
      },
      {
        text: "Öncelikle nasılsınız?",
        time: "18:59",
        isSender: false // Akif (Sol)
      },
      {
        text: "Teşekkür ederim. İyiyim siz nasılsınız?",
        time: "19:01",
        isSender: true // Şeyma (Sağ)
      },
      {
        text: "Hamdolsun, ben de iyiyim.",
        time: "19:01",
        isSender: false // Akif (Sol)
      },
      {
        text: "Nerden başlanıyor bilmiyom ama tanış olma niyetiyle yazmıştım. Biraz kendimi tanıtıyım dilerseniz. Sonra sormak istediklerinizi sorarsınız. Biraz yardımcı olursanız sevinirim zira ilk defa bu niyetle birine yazıyorum şuan.",
        time: "19:05",
        isSender: false // Akif (Sol)
      },
      {
        text: "Ben de aynı şekilde.",
        time: "19:06",
        isSender: true // Şeyma (Sağ)
      }
    ]
  },
  // 3. BAŞLANGIÇ HİSSİ (ESKİ 1)
  {
    id: 3,
    type: SlideType.MESSAGE,
    title: "Başlangıç",
    text: "Her güzel hikaye bir tesadüfle başlar ama bizimki kaderdi..."
  },
  // 4. İLK GÖRÜŞ
  {
    id: 4,
    type: SlideType.MESSAGE,
    title: "O İlk An",
    text: "Seni ilk gördüğümde, hayatımın geri kalanının değişeceğini hissetmiştim."
  },
  // 5. FOTOĞRAF - TANIŞMA/İLK ZAMANLAR (GÜNCELLENDİ)
  {
    id: 5,
    type: SlideType.MEMORY,
    title: "İlk Buluşmamız",
    text: "İlk buluşmamızı hatırlıyor musun?\nTatlı tatlı konuşuyordun ve hayran hayran seni izliyordum hani..",
    image: IMAGES.memory, 
    watermark: "O Gün"
  },
  // 6. SEVGİ NEDENİ 1 (GÜNCELLENDİ)
  {
    id: 6,
    type: SlideType.MESSAGE,
    title: "Hayranlık",
    text: "Sana hayranım ve her gün hayranlığım artıyor..."
  },
  // 7. SEVGİ NEDENİ 2
  {
    id: 7,
    type: SlideType.MESSAGE,
    title: "Gülüşün",
    text: "Sen güldüğünde dünya daha yaşanılır bir yer oluyor sevgilim."
  },
  // 8. FOTOĞRAF - GÜLÜMSEME/MUTLULUK
  {
    id: 8,
    type: SlideType.MEMORY,
    title: "Mutluluk Kaynağım",
    text: "Yüzündeki o tebessüm olmak için her şeyi yaparım.",
    image: IMAGES.smile,
    watermark: "Huzur",
    imageRotate: "-rotate-2"
  },
  // 9. DUYGU 
  {
    id: 9,
    type: SlideType.MESSAGE,
    title: "Huzur",
    text: "Senin yanın, dünyanın en güvenli limanı. Fırtınalar kopsa da seninle güvendeyim."
  },
  // 10. BİRLİKTELİK
  {
    id: 10,
    type: SlideType.MESSAGE,
    title: "Birlikteyken",
    text: "Seninle saçmalamayı, en ciddi konuları konuşmayı ve bazen sadece susmayı seviyorum."
  },
  // 11. FOTOĞRAF - EL ELE / ROMANTİK
  {
    id: 11,
    type: SlideType.MEMORY,
    title: "Hiç Bırakma",
    text: "Elimi tuttuğun an, tüm dertlerimi unuttuğum andır.",
    image: IMAGES.hands,
    watermark: "Biz",
    imageRotate: "rotate-1"
  },
  // 12. MÜZİK MOLASI
  {
    id: 12,
    type: SlideType.MUSIC,
    title: "Melodimiz",
    text: "Kalbinin Ritmi",
    extra: [
      "Dinlediğim en güzel şarkı,",
      "Senin sesin..."
    ]
  },
  // 13. ÖZLEMEK
  {
    id: 13,
    type: SlideType.MESSAGE,
    title: "Özlem",
    text: "Yanımdayken bile seni özlüyorum. Bu nasıl bir büyü?"
  },
  // 14. KÜÇÜK DETAYLAR
  {
    id: 14,
    type: SlideType.MESSAGE,
    title: "Detaylar",
    text: "Kirpiklerinin ucuna kadar ezberimdesin..."
  },
  // 15. FOTOĞRAF - KAHVE/GÜNLÜK HAYAT
  {
    id: 15,
    type: SlideType.MEMORY,
    title: "Sıradan Anlar",
    text: "Seninle içilen bir kahve bile dünyanın en lüks ziyafetinden daha değerli.",
    image: IMAGES.coffee,
    watermark: "Keyif",
    imageRotate: "rotate-3"
  },
  // 16. İYİ Kİ VARSIN
  {
    id: 16,
    type: SlideType.MESSAGE,
    title: "İyi ki...",
    text: "Hayatıma girdiğin gün, takvimdeki en güzel gündü."
  },
  // 17. HAYALLER - GİRİŞ
  {
    id: 17,
    type: SlideType.MESSAGE,
    title: "Geleceğimiz",
    text: "Gözlerimi kapattığımda kurduğum her hayalde sen varsın."
  },
  // 18. HAYALLER LİSTESİ (GÜNCELLENDİ)
  {
    id: 18,
    type: SlideType.DREAMS,
    title: "Hayallerimiz",
    extra: [
      "Birlikte dünyayı gezmek",
      "Beraber yaşayacağımız huzurlu bir ev",
      "Beraber yaz yağmurunda ıslanmak",
      "Dünyada ve ahirette seninle beraber mutlu olmak"
    ]
  },
  // 19. FOTOĞRAF - GÖZLER (GÜNCELLENDİ)
  {
    id: 19,
    type: SlideType.MEMORY,
    title: "Gözlerin",
    text: "Gece parıldayan yıldızlar ışığını senin gözlerinden mi alıyor?",
    image: IMAGES.eyes,
    // watermark kaldırıldı
    imageRotate: "-rotate-1"
  },
  // 20. ZORLUKLAR
  {
    id: 20,
    type: SlideType.MESSAGE,
    title: "Her Şeye Rağmen",
    text: "Hayat bazen zor olabilir ama biz birlikte her şeyin üstesinden geliriz."
  },
  // 21. DESTEK
  {
    id: 21,
    type: SlideType.MESSAGE,
    title: "Gücüm",
    text: "Düştüğümde beni kaldıran elin, en büyük dayanağım."
  },
  // 22. SÖZLER 1
  {
    id: 22,
    type: SlideType.MESSAGE,
    title: "Söz Veriyorum",
    text: "Seni her gün, dünden daha çok seveceğime söz veriyorum."
  },
  // 23. SÖZLER 2
  {
    id: 23,
    type: SlideType.MESSAGE,
    title: "Daima",
    text: "Saçlarına aklar düşse de, yüzün kırışsa da benim için hep en güzeli sen olacaksın."
  },
  // 24. NİŞAN/ÖZEL GÜN
  {
    id: 24,
    type: SlideType.MEMORY,
    title: "Büyük Gün Yaklaşıyor",
    text: "Şeymanur & Akif\n05 Ekim 2025\nBu tarih bizim miladımız.",
    image: IMAGES.invitation,
    watermark: "Davet",
    imageRotate: "rotate-0"
  },
  // 25. HEYECAN
  {
    id: 25,
    type: SlideType.MESSAGE,
    title: "Heyecan",
    text: "Seninle 'Evet' diyeceğimiz günü iple çekiyorum."
  },
  // 26. AİLE
  {
    id: 26,
    type: SlideType.MESSAGE,
    title: "Yuvamız",
    text: "Sen benim evimsin. Nereye gidersek gidelim, kalbin benim yuvam."
  },
  // 27. SONSUZLUK
  {
    id: 27,
    type: SlideType.MESSAGE,
    title: "Sonsuzluk",
    text: "Bu hikayenin sonu yok, çünkü aşkımız sonsuz..."
  },
  // 28. TEŞEKKÜR
  {
    id: 28,
    type: SlideType.MESSAGE,
    title: "Teşekkür Ederim",
    text: "Beni dünyanın en şanslı insanı yaptığın için teşekkür ederim sevgilim."
  },
  // 29. HEDİYE NOTU
  {
    id: 29,
    type: SlideType.MESSAGE,
    title: "Küçük Bir Not",
    text: "Bu site belki basit kodlardan ibaret ama her satırında seni düşündüm."
  },
  // 30. FİNAL ÖNCESİ
  {
    id: 30,
    type: SlideType.MESSAGE,
    title: "Ve Şimdi...",
    text: "Sana söylemek istediğim tek bir şey kaldı..."
  },
  // 31. FİNAL
  {
    id: 31,
    type: SlideType.FINAL,
    title: "Seni Çok Seviyorum",
    text: "Sevgililer Günümüz Kutlu Olsun Canım Sevgilim ❤️"
  }
];