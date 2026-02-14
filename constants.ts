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
    footerText: "Sobee",
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
    text: "Tesadüf sandıklarımız, Allah'ın bir takdiri ve bize lütfu... Sen bana verilmiş en güzel lütufsun..."
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
  // 7. DEVRE ARASI - GÜNCELLENDİ
  {
    id: 7,
    type: SlideType.MESSAGE,
    title: "Ve biraz devre arası",
    text: "Bazen araya ayrılıklar girse de, varsa nasipte kavuşmak, hiçbir zorluk engel olmazmış..."
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
    text: "Seni sevmek, nefes almak gibi... Öylesine kendiliğinden, öylesine vazgeçilmez. Varlığın ömrüme en güzel hediye."
  },
  // 10. ÇİÇEĞİM FOTOĞRAF
  {
    id: 10,
    type: SlideType.MEMORY,
    title: "Çiçeğim",
    text: "Sen benim hiç solmayan çiçeğimsin.",
    image: IMAGES.flower,
    watermark: "Bahar",
    imageRotate: "-rotate-1"
  },
  // 11. ÇİÇEĞİM YAZI
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
    title: "Güzelliğin",
    text: "Nasıl bu kadar güzel olabilir bir insan? Kelimeler yetmiyor güzelliğini anlatmaya..."
  },
  // 15. TARİH - TEMMUZ (ESKİ 40 - YERİNE TAŞINDI)
  {
    id: 15,
    type: SlideType.MEMORY,
    title: "27 Temmuz 2025",
    text: " ",
    image: IMAGES.july27,
    watermark: "Anı",
    imageRotate: "rotate-1",
    aspectRatio: "aspect-auto"
  },
  // 16. BİRLİKTELİK
  {
    id: 16,
    type: SlideType.MESSAGE,
    title: "Birlikteyken",
    text: "Seninle saçmalamayı, en ciddi konuları konuşmayı ve bazen sadece susmayı seviyorum."
  },
  // 17. GÜLÜŞÜN - GÜLPEMBE
  {
    id: 17,
    type: SlideType.MEMORY,
    title: "Gülüşün",
    text: "Sen gülünce bir orman filizleniyor kalbimde...",
    image: IMAGES.gulpembe,
    watermark: "Gülüşün",
    imageRotate: "rotate-0"
  },
  // 18. MÜZİK MOLASI
  {
    id: 18,
    type: SlideType.MUSIC,
    title: "Melodimiz",
    text: "Kalbinin Ritmi",
    extra: [
      "Dinlediğim en güzel şarkı,",
      "Senin sesin..."
    ]
  },
  // 19. ÖZLEMEK
  {
    id: 19,
    type: SlideType.MESSAGE,
    title: "Özlem",
    text: "Yanımdayken bile seni özlüyorum. Bu nasıl bir aşk?"
  },
  // 20. ŞİİR VE RESİM
  {
    id: 20,
    type: SlideType.MEMORY,
    title: "Sevdiğim",
    text: "Yaslan göğsüme sevdiğim\nBenim gönlüm gök gibidir açık deniz gibidir\nPas tutmaz benim içim yeryüzü gibidir\nToprak gibidir\nSen ki bulut gibisin\nAy gibisin güneş gibi bazen",
    image: IMAGES.poem,
    aspectRatio: "aspect-video",
    imageRotate: "rotate-0",
    textAlign: "text-left",
    author: "Şair Erdem Bayazıt"
  },
  // 21. KÜÇÜK DETAYLAR
  {
    id: 21,
    type: SlideType.MESSAGE,
    title: "Detaylar",
    text: "Kirpiklerinin ucuna kadar ezberimdesin..."
  },
  // 22. TARİH - 6 EYLÜL (ESKİ 15)
  {
    id: 22,
    type: SlideType.MEMORY,
    title: "6 Eylül 2025",
    text: " ",
    image: IMAGES.date,
    secondImage: IMAGES.date2,
    watermark: "Tarih",
    aspectRatio: "aspect-video",
    imageRotate: "rotate-1"
  },
  // 23. İYİ Kİ VARSIN
  {
    id: 23,
    type: SlideType.MESSAGE,
    title: "İyi ki...",
    text: "Hayatıma girdiğin gün, takvimdeki en güzel gündü."
  },
  // 24. DETAYLAR KOLAJI
  {
    id: 24,
    type: SlideType.COLLAGE,
    title: "", 
    text: "Seni senin bile bilmediğin detaylarınla seviyorum...\nHer mimiğini ve her halini seviyorum...",
    collageImages: IMAGES.details,
    collageLayout: 'grid'
  },
  // 25. HAYALLER - GİRİŞ (ESKİ 24)
  {
    id: 25,
    type: SlideType.MESSAGE,
    title: "Geleceğimiz",
    text: "Gözlerimi kapattığımda kurduğum her hayalde ve her duamın başlangıcında sen varsın."
  },
  // 26. HAYALLER LİSTESİ (ESKİ 25)
  {
    id: 26,
    type: SlideType.DREAMS,
    title: "Hayallerimiz",
    extra: [
      "Birlikte dünyayı gezmek",
      "Beraber yaşayacağımız huzurlu bir ev",
      "Beraber yaz yağmurunda ıslanmak",
      "Dünyada ve ahirette seninle beraber mutlu olmak"
    ]
  },
  // 27. FOTOĞRAF - GÖZLER (ESKİ 26)
  {
    id: 27,
    type: SlideType.MEMORY,
    title: "Gözlerin",
    text: "Gece parıldayan yıldızlar ışığını senin gözlerinden mi alıyor?",
    image: IMAGES.eyes,
    imageRotate: "-rotate-1",
    aspectRatio: "aspect-auto" 
  },
  // 28. ZORLUKLAR (ESKİ 27)
  {
    id: 28,
    type: SlideType.MESSAGE,
    title: "Her Şeye Rağmen",
    text: "Hayat bazen zor olabilir ama biz birlikte her şeyin üstesinden geliriz."
  },
  // 29. TARİH - 20 EYLÜL (ESKİ 28)
  {
    id: 29,
    type: SlideType.MEMORY,
    title: "20 Eylül 2025",
    text: " ",
    image: IMAGES.sept20,
    watermark: "Anı",
    imageRotate: "rotate-0",
    aspectRatio: "aspect-auto"
  },
  // 30. DESTEK - GÜNCELLENDİ (ESKİ 29)
  {
    id: 30,
    type: SlideType.MESSAGE,
    title: "Sözüm",
    text: "Parmağımda yüzüğüm, yüzüğümde ismin, kalbimde sevgin... Hiç bitmesin..."
  },
  // 31. TEKLİF (ESKİ 30)
  {
    id: 31,
    type: SlideType.MEMORY,
    title: "Ve o gün",
    text: "Seninle evlenebilir miyim?",
    image: IMAGES.proposal,
    watermark: "Teklif",
    imageRotate: "rotate-3"
  },
  // 32. TARİH - 5 EKİM (ESKİ 31)
  {
    id: 32,
    type: SlideType.COLLAGE,
    title: "", 
    text: "En mutlu günümüz\n5 Ekim 2025",
    collageImages: IMAGES.collage,
    collageLayout: 'grid'
  },
  // 33. SÖZLER 1 (ESKİ 32)
  {
    id: 33,
    type: SlideType.MESSAGE,
    title: "Söz Veriyorum",
    text: "Seni her gün, dünden daha çok seveceğime söz veriyorum."
  },
  // 34. SÖZLER 2 (ESKİ 33)
  {
    id: 34,
    type: SlideType.MESSAGE,
    title: "Daima",
    text: "Saçlarına aklar düşse de, yüzün kırışsa da benim için hep en güzeli sen olacaksın."
  },
  // 35. TARİH - 18 EKİM (ESKİ 34)
  {
    id: 35,
    type: SlideType.MEMORY,
    title: "18 Ekim 2025",
    text: " ",
    image: IMAGES.oct18,
    watermark: "Anı",
    imageRotate: "-rotate-2",
    aspectRatio: "aspect-auto"
  },
  // 36. HEYECAN (ESKİ 35)
  {
    id: 36,
    type: SlideType.MESSAGE,
    title: "Heyecan",
    text: "Seninle 'Evet' diyeceğimiz günü iple çekiyorum."
  },
  // 37. AİLE (ESKİ 36)
  {
    id: 37,
    type: SlideType.MESSAGE,
    title: "Yuvamız",
    text: "Sen benim evimsin. Nereye gidersek gidelim, kalbin benim yuvam."
  },
  // 38. SONSUZLUK (ESKİ 37)
  {
    id: 38,
    type: SlideType.MESSAGE,
    title: "Sonsuzluk",
    text: "Sana denk geldim iyileştim, sebepsiz yere gülümsemelerim arttı. Meğer insanın yarası, doğru insanın varlığıyla kapanırmış..."
  },
  // 39. TEŞEKKÜR (ESKİ 38)
  {
    id: 39,
    type: SlideType.MESSAGE,
    title: "Teşekkür Ederim",
    text: "Beni dünyanın en şanslı insanı yaptığın için teşekkür ederim sevgilim."
  },
  // 40. TARİH - 28 EKİM (ESKİ 39)
  {
    id: 40,
    type: SlideType.COLLAGE,
    title: "28 Ekim 2025",
    text: "Birlikte nice anılara...",
    collageImages: IMAGES.oct28,
    collageLayout: 'row'
  },
  // 41. TARİH - 5 ARALIK (ESKİ 40)
  {
    id: 41,
    type: SlideType.COLLAGE,
    title: "5 Aralık 2025",
    text: "",
    collageImages: IMAGES.dec05,
    collageLayout: 'col'
  },
  // 42. ŞİİR (KARAKOÇ) - BAŞLIK KALDIRILDI (ESKİ 41)
  {
    id: 42,
    type: SlideType.MEMORY,
    title: "", // Başlık kaldırıldı
    text: "Sırat’tan incedir sevda köprüsü\nBeraber geçelim tut ellerimden.\nNiyet ak güvercin, vuslat gökyüzü\nBeraber uçalım tut ellerimden.",
    image: IMAGES.poemKarakoc,
    aspectRatio: "aspect-video",
    imageRotate: "rotate-0",
    textAlign: "text-left",
    author: "Abdurrahim Karakoç"
  },
  // 43. TARİH - 25 OCAK 2026 (ESKİ 42)
  {
    id: 43,
    type: SlideType.MEMORY,
    title: "25 Ocak 2026",
    text: " ",
    image: IMAGES.jan25,
    watermark: "Anı",
    imageRotate: "-rotate-1",
    aspectRatio: "aspect-auto"
  },
  // 44. YAZI (GÜLÜŞÜNÜ SEVİYORUM) (ESKİ 43)
  {
    id: 44,
    type: SlideType.MESSAGE,
    title: "Seviyorum",
    text: "Gülüşünü seviyorum,\nSesini seviyorum,\nSohbetini seviyorum.\nSeni sevebilmek için\ndokunmam şart değil\nki, yüreğimde duruşunu\nseviyorum..."
  },
  // 45. ŞİİR (TARIK TUFAN) (ESKİ 44)
  {
    id: 45,
    type: SlideType.MEMORY,
    title: "Şifalı Gözlerin",
    text: "...ama geçecek hepsi, geçecek.\nşifalı gözlerin her şeyi iyi edecek.\ngözlerimin içine bakmaktan korkma anna.\nsen adımını attığın andan itibaren\nhira dinginliğine dönüşecek ortalık.",
    image: IMAGES.poemTufan,
    aspectRatio: "aspect-video",
    imageRotate: "rotate-0",
    textAlign: "text-left",
    author: "Tarık Tufan"
  },
  // 46. TARİH - 5 ŞUBAT 2026 (ESKİ 45)
  {
    id: 46,
    type: SlideType.MEMORY,
    title: "5 Şubat 2026",
    text: " ",
    image: IMAGES.feb05,
    watermark: "Anı",
    imageRotate: "rotate-1",
    aspectRatio: "aspect-auto"
  },
  // 47. TORUN (ESKİ 46)
  {
    id: 47,
    type: SlideType.MEMORY,
    title: "Hayalim",
    text: "Yıllar geçsin, saçlarımıza ak düşsün, kucağındaki bebek torunumuz olsun istiyorum :)",
    image: IMAGES.grandchild,
    watermark: "Gelecek",
    imageRotate: "-rotate-1",
    aspectRatio: "aspect-auto",
    containerClass: "w-64"
  },
  // 48. SABIR (YENİ EKLENDİ)
  {
    id: 48,
    type: SlideType.MESSAGE,
    title: "Sabır",
    text: "Azcık daha sabredelim bitanem."
  },
  // 49. SAYAÇ / MESAJ (ESKİ 48)
  {
    id: 49,
    type: SlideType.MESSAGE,
    title: "Vuslat",
    text: "Sadece 69 gün kaldı, (inşAllah) bir ömür boyu mutlu olmaya..."
  },
  // 50. HEDİYE NOTU (ESKİ 49)
  {
    id: 50,
    type: SlideType.MESSAGE,
    title: "Küçük Bir Not",
    text: "Bu site belki basit kodlardan ibaret ama her satırında seni düşündüm."
  },
  // 51. FİNAL ÖNCESİ (ESKİ 50)
  {
    id: 51,
    type: SlideType.MESSAGE,
    title: "Ve Şimdi...",
    text: "Sana söylemek istediğim tek bir şey kaldı..."
  },
  // 52. FİNAL (ESKİ 51)
  {
    id: 52,
    type: SlideType.FINAL,
    title: "Seni Çok Seviyorum",
    text: "Sevgililer Günümüz Kutlu Olsun Canım Sevgilim ❤️"
  },
  // 53. VİDEO (YENİ EKLENDİ)
  {
    id: 53,
    type: SlideType.VIDEO,
    title: "",
    videoId: "2WbLvehJ0Ho"
  }
];