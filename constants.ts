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
  // 1. MASAL GİRİŞİ
  {
    id: 1,
    type: SlideType.MESSAGE,
    title: "Masal",
    text: "Şimdi sana bir masal anlatacağım..."
  },
  // 2. SAKLAMBAÇ HİKAYESİ
  {
    id: 2,
    type: SlideType.MESSAGE,
    title: "Saklambaç",
    text: "Evvel zaman içinde, kalbur saman içinde... Saklambaç oynayan iki çocuk varmış. Ve saklanma sırası kıza geldiğinde kız öyle bir saklanmış ki... Erkek çocuk onu tam 17 yıl sonra bulabilmiş..."
  },
  // 3. WHATSAPP MESAJI
  {
    id: 3,
    type: SlideType.WHATSAPP,
    title: "Akif ALTINTAŞ", // Şeyma'nın telefonunda kayıtlı isim
    date: "27 Nisan 2023",
    footerText: "Sobee...",
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
  // 4. KADER
  {
    id: 4,
    type: SlideType.MESSAGE,
    title: "Kader",
    text: "Tesadüfe değil kadere inanırım. Sen benim kaderimmişsin..."
  },
  // 5. O İLK AN
  {
    id: 5,
    type: SlideType.MESSAGE,
    title: "O İlk An",
    text: "Seni ilk gördüğümde, hayatımın geri kalanının değişeceğini hissetmiştim."
  },
  // 6. FOTOĞRAF - TANIŞMA/İLK ZAMANLAR
  {
    id: 6,
    type: SlideType.MEMORY,
    title: "İlk Buluşmamız",
    text: "İlk buluşmamızı hatırlıyor musun?\nTatlı tatlı konuşuyordun da hayran hayran seni izliyordum ya hani :)",
    image: IMAGES.memory, 
    watermark: "O Gün"
  },
  // 7. DEVRE ARASI
  {
    id: 7,
    type: SlideType.MESSAGE,
    title: "Ve biraz devre arası",
    text: "Bazen araya ayrılıklar girse de birbirini seven iki kalp ne olursa olsun buluşurmuş."
  },
  // 8. İKİNCİ DEVRE FOTOĞRAF
  {
    id: 8,
    type: SlideType.MEMORY,
    title: "Yeniden Başlangıç",
    text: "İkinci devrenin ilk buluşması",
    image: IMAGES.secondDate,
    watermark: "Vuslat",
    imageRotate: "rotate-2"
  },
  // 9. SEVGİ NEDENİ 1
  {
    id: 9,
    type: SlideType.MESSAGE,
    title: "Hayranlık",
    text: "Sana hayranım ve her gün hayranlığım artıyor..."
  },
  // 10. ÇİÇEĞİM FOTOĞRAF (YENİ)
  {
    id: 10,
    type: SlideType.MEMORY,
    title: "Çiçeğim",
    text: "Sen benim hiç solmayan çiçeğimsin.",
    image: IMAGES.flower,
    watermark: "Bahar",
    imageRotate: "-rotate-1"
  },
  // 11. ÇİÇEĞİM YAZI (YENİ)
  {
    id: 11,
    type: SlideType.MESSAGE,
    title: "Güzellik",
    text: "Dünyanın bütün çiçekleri senin güzelliğini kıskandığı için soluyor olsa gerek..."
  },
  // 12. SEVGİ NEDENİ 2
  {
    id: 12,
    type: SlideType.MESSAGE,
    title: "Gülüşün",
    text: "Sen güldüğünde dünya daha yaşanılır bir yer oluyor sevgilim."
  },
  // 13. FOTOĞRAF - GÜLÜMSEME/MUTLULUK
  {
    id: 13,
    type: SlideType.MEMORY,
    title: "Mutluluk Kaynağım",
    text: "Yüzündeki o tebessüm olmak için her şeyi yaparım.",
    image: IMAGES.smile,
    watermark: "Huzur",
    imageRotate: "-rotate-2"
  },
  // 14. DUYGU 
  {
    id: 14,
    type: SlideType.MESSAGE,
    title: "Huzur",
    text: "Senin yanın, dünyanın en güvenli limanı. Fırtınalar kopsa da seninle güvendeyim."
  },
  // 15. BİRLİKTELİK
  {
    id: 15,
    type: SlideType.MESSAGE,
    title: "Birlikteyken",
    text: "Seninle saçmalamayı, en ciddi konuları konuşmayı ve bazen sadece susmayı seviyorum."
  },
  // 16. FOTOĞRAF - EL ELE / ROMANTİK
  {
    id: 16,
    type: SlideType.MEMORY,
    title: "Hiç Bırakma",
    text: "Elimi tuttuğun an, tüm dertlerimi unuttuğum andır.",
    image: IMAGES.hands,
    watermark: "Biz",
    imageRotate: "rotate-1"
  },
  // 17. MÜZİK MOLASI
  {
    id: 17,
    type: SlideType.MUSIC,
    title: "Melodimiz",
    text: "Kalbinin Ritmi",
    extra: [
      "Dinlediğim en güzel şarkı,",
      "Senin sesin..."
    ]
  },
  // 18. ÖZLEMEK
  {
    id: 18,
    type: SlideType.MESSAGE,
    title: "Özlem",
    text: "Yanımdayken bile seni özlüyorum. Bu nasıl bir büyü?"
  },
  // 19. KÜÇÜK DETAYLAR
  {
    id: 19,
    type: SlideType.MESSAGE,
    title: "Detaylar",
    text: "Kirpiklerinin ucuna kadar ezberimdesin..."
  },
  // 20. FOTOĞRAF - KAHVE/GÜNLÜK HAYAT
  {
    id: 20,
    type: SlideType.MEMORY,
    title: "Sıradan Anlar",
    text: "Seninle içilen bir kahve bile dünyanın en lüks ziyafetinden daha değerli.",
    image: IMAGES.coffee,
    watermark: "Keyif",
    imageRotate: "rotate-3"
  },
  // 21. İYİ Kİ VARSIN
  {
    id: 21,
    type: SlideType.MESSAGE,
    title: "İyi ki...",
    text: "Hayatıma girdiğin gün, takvimdeki en güzel gündü."
  },
  // 22. HAYALLER - GİRİŞ
  {
    id: 22,
    type: SlideType.MESSAGE,
    title: "Geleceğimiz",
    text: "Gözlerimi kapattığımda kurduğum her hayalde sen varsın."
  },
  // 23. HAYALLER LİSTESİ
  {
    id: 23,
    type: SlideType.DREAMS,
    title: "Hayallerimiz",
    extra: [
      "Birlikte dünyayı gezmek",
      "Beraber yaşayacağımız huzurlu bir ev",
      "Beraber yaz yağmurunda ıslanmak",
      "Dünyada ve ahirette seninle beraber mutlu olmak"
    ]
  },
  // 24. FOTOĞRAF - GÖZLER
  {
    id: 24,
    type: SlideType.MEMORY,
    title: "Gözlerin",
    text: "Gece parıldayan yıldızlar ışığını senin gözlerinden mi alıyor?",
    image: IMAGES.eyes,
    imageRotate: "-rotate-1"
  },
  // 25. ZORLUKLAR
  {
    id: 25,
    type: SlideType.MESSAGE,
    title: "Her Şeye Rağmen",
    text: "Hayat bazen zor olabilir ama biz birlikte her şeyin üstesinden geliriz."
  },
  // 26. DESTEK
  {
    id: 26,
    type: SlideType.MESSAGE,
    title: "Gücüm",
    text: "Düştüğümde beni kaldıran elin, en büyük dayanağım."
  },
  // 27. SÖZLER 1
  {
    id: 27,
    type: SlideType.MESSAGE,
    title: "Söz Veriyorum",
    text: "Seni her gün, dünden daha çok seveceğime söz veriyorum."
  },
  // 28. SÖZLER 2
  {
    id: 28,
    type: SlideType.MESSAGE,
    title: "Daima",
    text: "Saçlarına aklar düşse de, yüzün kırışsa da benim için hep en güzeli sen olacaksın."
  },
  // 29. NİŞAN/ÖZEL GÜN
  {
    id: 29,
    type: SlideType.MEMORY,
    title: "Büyük Gün Yaklaşıyor",
    text: "Şeymanur & Akif\n05 Ekim 2025\nBu tarih bizim miladımız.",
    image: IMAGES.invitation,
    watermark: "Davet",
    imageRotate: "rotate-0"
  },
  // 30. HEYECAN
  {
    id: 30,
    type: SlideType.MESSAGE,
    title: "Heyecan",
    text: "Seninle 'Evet' diyeceğimiz günü iple çekiyorum."
  },
  // 31. AİLE
  {
    id: 31,
    type: SlideType.MESSAGE,
    title: "Yuvamız",
    text: "Sen benim evimsin. Nereye gidersek gidelim, kalbin benim yuvam."
  },
  // 32. SONSUZLUK
  {
    id: 32,
    type: SlideType.MESSAGE,
    title: "Sonsuzluk",
    text: "Bu hikayenin sonu yok, çünkü aşkımız sonsuz..."
  },
  // 33. TEŞEKKÜR
  {
    id: 33,
    type: SlideType.MESSAGE,
    title: "Teşekkür Ederim",
    text: "Beni dünyanın en şanslı insanı yaptığın için teşekkür ederim sevgilim."
  },
  // 34. HEDİYE NOTU
  {
    id: 34,
    type: SlideType.MESSAGE,
    title: "Küçük Bir Not",
    text: "Bu site belki basit kodlardan ibaret ama her satırında seni düşündüm."
  },
  // 35. FİNAL ÖNCESİ
  {
    id: 35,
    type: SlideType.MESSAGE,
    title: "Ve Şimdi...",
    text: "Sana söylemek istediğim tek bir şey kaldı..."
  },
  // 36. FİNAL
  {
    id: 36,
    type: SlideType.FINAL,
    title: "Seni Çok Seviyorum",
    text: "Sevgililer Günümüz Kutlu Olsun Canım Sevgilim ❤️"
  }
];