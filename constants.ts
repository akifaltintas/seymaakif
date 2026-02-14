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
    date: "27 Nisan 2025",
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
  // YENİ EKLENEN SLAYT
  {
    id: 4,
    type: SlideType.MESSAGE,
    title: "Bizim Masalımız",
    text: "O masal nasıl bitmiş bilinmez. Ama bizim masalımız yeni başlıyor..."
  },
  // 4. KADER (ID Kaydı -> 5)
  {
    id: 5,
    type: SlideType.MESSAGE,
    title: "Kader",
    text: "Rabbimizin nimetlerini saymakla bitmez elbet. Ama sen bana bu hayatta verilmiş en güzel nimetsin bitanem"
  },
  // 5. O İLK AN (ID -> 6)
  {
    id: 6,
    type: SlideType.MESSAGE,
    title: "O İlk An",
    text: "Seni ilk gördüğümde, hayatımın geri kalanının değişeceğini hissetmiştim."
  },
  // 6. FOTOĞRAF - TANIŞMA/İLK ZAMANLAR (ID -> 7)
  {
    id: 7,
    type: SlideType.MEMORY,
    title: "İlk Buluşmamız",
    text: "İlk buluşmamızı hatırlıyor musun?\nTatlı tatlı konuşuyordun da hayran hayran seni izliyordum ya hani :)",
    image: IMAGES.memory, 
    watermark: "O Gün"
  },
  // 7. DEVRE ARASI - GÜNCELLENDİ (ID -> 8)
  {
    id: 8,
    type: SlideType.MESSAGE,
    title: "Ve biraz devre arası",
    text: "Bazen araya ayrılıklar girse de, nasipte kavuşmak varsa, hiçbir zorluk engel olamazmış..."
  },
  // YENİ WHATSAPP SLAYTI (ID -> 9)
  {
    id: 9,
    type: SlideType.WHATSAPP,
    title: "Akif ALTINTAŞ",
    date: "29 Haziran 2025",
    footerText: "Kalplerimizin birlikte titrediği ilk an buydu belki de...",
    messages: [
      {
        text: "Şeymanur Hanım, bu mesajı size yazmamak için kendimle çok uğraştım ama kafamı susturmak için bunları yazmak zorundayım. Sizi rahatsız ettiysem kusuruma bakmayın. Mesajımı dikkatlice okumanızı ve söyleyeceklerimin aramızda kalmasını rica ediyorum.\n\nSizinle görüştüğümüzden beri sürekli kafamı kurcalayan bir soru var. Acaba ben size hastalığımı fazla mı abartarak anlattım. Çünkü sizinle konuşmamız tam hastalandığım ve doktorların beni gelecek hakkında korkuttuğu zamana denk gelmişti. Ben de haliyle korktum, psikolojim de pek iyi değildi, o haldeyken evlenmek için kendime pek güvenemedim, sizi de korkutmuş olabilirim. O tarihten birkaç ay önce veya sonra konuşsaydık bunları bu şekilde anlatmazdım belki de. Belki de böyle olması hayırlıydı, Allah bilir.\n\nO zamandan beri kendimi çok sorguladım. Evet biraz hassas bir bünyeye sahibim ama bu süreçte farkettim ki şükredecek çok şeyim varmış. Çok şükür elim ayağım tutuyor, kendi kendime bakabiliyorum. Kendi işlerimi kendim görüyorum. Birkaç ilacım var ve bunları kullanınca sağlıklı birinden çok da farkım olmuyor. Kısaca Allah'ın bana verdiği onca nimete ne kadar şükretsem az...\n\nO zamandan beri çok dua ettim, çok yalvardım Rabbime. Aklıma her geldiğinizde size dua ederim demiştim ya. Doğrusu sizi aklımdan hiç çıkaramadım. Hem kendime hem de size bolca dua ettim. (İki cihanda mutlu olursunuz inşAllah.)\n\nAma anladım ki sadece dua etmek yetmiyor Şeymanur Hanım. Duanın kabul olacağına inanmak da gerekiyor. Rabbimiz birçok ayette kendisine güvenmemiz gerektiğini söylüyor. Derdi de dermanı da Allâhü azîmü’ş-şan veriyor, hastalığı da şifayı da.. Doktorlar bazen bunu unutuyor, bizler de bazen unutabiliyoruz...\n\nYani demem o ki, belki de bütün sır inanmakta. Yağmur duasına şemsiyeyle gitmek gibi... Ben de böyle yapıyorum artık. Kötüyü düşünüp kendimi üzmüyorum. Allah kimseye taşıyamayacağı yükü yüklemez, biliyorum. Vardır bir hayır diyorum ve daima hamd ediyorum, şükrediyorum, yaradan vermişse bir imtihan sabrediyorum. Çünkü biliyorum ki sabrın sonu selamettir...\n\nŞimdi bunları size neden anlattım diyorsunuz muhtemelen. Ben sizi unutamadım Şeymanur Hanım. Kısa bir süre konuşmuş olsak da gayet iyi anlaştık. Sizinle konuşurken sanki yıllardır tanıdığım biriyle konuşuyor gibiydim. Yıllarca konuşabileceğim biri gibiydiniz. Hemen hemen her özelliğiniz tam bana göreydi. Az zamanda kimseye vermediğim kadar değer verdim size. Ve bu elimde olan bir şey değildi. Ne kadar uğraşsam da sizi unutamadım.\n\nEvet sizinle güzel bir final yapamadık. Ama ben savaşçı biriyim. Hayatın önüme getirdiği finalleri hayırlısı buymuş diyerek kabul etmek istemiyorum. Gerekirse finalde boş kağıt verir, bütten geçmek için ne gerekiyorsa yaparım. Bugüne kadar hep öyle yaptım. Belki de hayırlısını haketmek için savaşmak gerekiyordur diye düşünüyorum...\n\nUzun lafın kısası sizden bana bir şans daha vermenizi istiyorum. Belki fiziksel görünüşümü beğenmediniz, belki huyumu, belki de sadece hastalığım sizi korkuttu tam olarak bilmiyorum. Olumsuz kararınız sizin düşüncenizse eğer ben tekrar konuşmak isterim. Yok eğer babanızın sizi caydırmasıysa babanızla bir de ben veya üçüncü kişiler konuşur derdimi anlatırım. Zira ben babanıza da hak veriyorum, herkes kızı için en iyisini ister. Ben olsam ben de öyle yapardım. Ama dediğim gibi tam olarak sağlık durumumu size anlatamadığım, veya yanlış anlattığım kanaatindeyim. Aslında bakarsanız birkaç ilacı (buhar, inhaler, vs.) kullandığım sürece arkadaşlarımdan geri kaldığım olmuyor. Yememe içmeme dikkat edince, kendimi fazla yormaktan, stresten, üşütmekten vs. koruyunca çok da hasta olmuyorum...\n\nYine de size hastalıksız, dertsiz, tasasız bir hayat vaat edemem. Gaybı Allah bilir. Zira burası imtihan dünyası. Neylen imtihan edileceğimizi bilemeyiz. Ama sizi daima koruyup gözeteciğime, her koşulda size saygı ve sevgi duyacağımı bilmenizi isterim. Hayatımı evvela Allah'ın rızasını kazanmak için yaşamayı, sonra da sizin iki cihanda mutlu olmanız için çabalamayı, Allah'ın nimetlerine sizinle beraber şükretmeyi, imtihanlara sizinle beraber sabretmeyi arzuluyorum. Sizin her daim mutlu olmanız beni de mutlu edecektir...\n\nKendimi çok kez sizin yerinize de koydum. Evet, sizi zor bir duruma soktuğumun farkındayım. Siz bu evliliği bir risk olarak görüyor olabilirsiniz. Daha ilk evlilik görüşmem, daha iyisi illaki karşıma çıkar diye düşünüyor bile olabilirsiniz. Ama korkunuz hastalıksa, ölümse veya hasta birine bakamamaksa (Rabbim bizi her türlü beladan uzak eylesin) burası imtihan dünyası ve ne zaman neyle imtihan edileceğimizi bilemeyiz düşüncesindeyim. Korkunuz sizin zayıf olmanız ise, Allah kimseye taşıyamayacağı yük yüklemez Şeymanur Hanım. (Bknz. Bakara 286)\n\nYukarıda söylediğim her şeyi de göz önüne alarak bana düşüncelerinizi söylerseniz sevinirim. Ama şimdilik bu dediklerimi herhangi birine söylemeyin lütfen, bu mesajı yazarken bile ne kadar utandığımı anlatamam.\n\nSizden sadece kendi düşünceniz olan cevabı duymak istiyorum. İsterseniz herhangi bir sebep belirtmeden sadece olumsuzum diyebilirsiniz. Siz istemediğiniz sürece sizi bu işe zorlayamam. Benim için üzülmenizi de istemem. Ben dualarımı hep 'hayırlısıysa olsun' diyerek ettim. Cevabınız ne olursa olsun hayırlısı olması için yine dua ederim. Ama ben olumsuz olacaksa da çabalamadan pes etmek istemediğim için bu mesajı size atmak zorundaydım. Yoksa rahat uyuyamam, uyuyamıyorum. Diyeceklerim bu kadar. 49 gündür düşündüğüm, size söylemek isteyip de söylemediklerim bunlardı. Tekrardan rahatsız ettiğim için özür dilerim. Sizin kararınız olumsuz ise bir daha bu konu hakkında sizi rahatsız etmeyeceğimi bilmenizi isterim. Hakkınızı helal edin.",
        time: "23:12",
        isSender: false
      },
      {
        text: "Öncelikle hakkım size helal olsun. Ne diyeceğimi bilemiyorum şu an çok şaşkınım, titriyorum.",
        time: "23:22",
        isSender: true
      },
      {
        text: "Ben de öyle...",
        time: "23:22",
        isSender: false
      }
    ]
  },
  // 8. İKİNCİ DEVRE FOTOĞRAF (ID -> 10)
  {
    id: 10,
    type: SlideType.MEMORY,
    title: "Yeniden Başlangıç",
    text: "İkinci ilk buluşmamız :)",
    image: IMAGES.secondDate,
    watermark: "Vuslat",
    imageRotate: "rotate-2"
  },
  // 9. SEVGİ NEDENİ 1 (ID -> 11)
  {
    id: 11,
    type: SlideType.MESSAGE,
    title: "Hayranlık",
    text: "Seni sevmek, nefes almak gibi... Öylesine kendiliğinden, öylesine vazgeçilmez. Varlığın ömrüme en güzel hediye."
  },
  // 10. ÇİÇEĞİM FOTOĞRAF (ID -> 12)
  {
    id: 12,
    type: SlideType.MEMORY,
    title: "Çiçeğim",
    text: "Sen benim hiç solmayan çiçeğimsin.",
    image: IMAGES.flower,
    watermark: "Bahar",
    imageRotate: "-rotate-1"
  },
  // 11. ÇİÇEĞİM YAZI (ID -> 13)
  {
    id: 13,
    type: SlideType.MESSAGE,
    title: "Güzellik",
    text: "Dünyanın bütün çiçekleri senin güzelliğini kıskandığı için soluyor olsa gerek..."
  },
  // 12. SEVGİ NEDENİ 2 (ID -> 14)
  {
    id: 14,
    type: SlideType.MESSAGE,
    title: "Gülüşün",
    text: "Sen güldüğünde dünya daha yaşanılır bir yer oluyor sevgilim."
  },
  // 13. FOTOĞRAF - GÜLÜMSEME/MUTLULUK (ID -> 15)
  {
    id: 15,
    type: SlideType.MEMORY,
    title: "Mutluluk Kaynağım",
    text: "Yüzündeki o tebessüm olmak için her şeyi yaparım.",
    image: IMAGES.smile,
    watermark: "Huzur",
    imageRotate: "-rotate-2"
  },
  // 14. DUYGU (ID -> 16)
  {
    id: 16,
    type: SlideType.MESSAGE,
    title: "Güzelliğin",
    text: "Nasıl bu kadar güzel olabilir bir insan? Kelimeler yetmiyor güzelliğini anlatmaya..."
  },
  // 15. TARİH - TEMMUZ (ID -> 17)
  {
    id: 17,
    type: SlideType.MEMORY,
    title: "27 Temmuz 2025",
    text: " ",
    image: IMAGES.july27,
    watermark: "Anı",
    imageRotate: "rotate-1",
    aspectRatio: "aspect-auto"
  },
  // 16. BİRLİKTELİK (ID -> 18)
  {
    id: 18,
    type: SlideType.MESSAGE,
    title: "Birlikteyken",
    text: "Seninle saçmalamayı, en ciddi konuları konuşmayı ve bazen sadece susmayı seviyorum."
  },
  // 17. GÜLÜŞÜN - GÜLPEMBE (ID -> 19)
  {
    id: 19,
    type: SlideType.MEMORY,
    title: "Gülüşün",
    text: "Sen gülünce bir orman filizleniyor kalbimde...",
    image: IMAGES.gulpembe,
    watermark: "Gülüşün",
    imageRotate: "rotate-0"
  },
  // 18. MÜZİK MOLASI (ID -> 20)
  {
    id: 20,
    type: SlideType.MUSIC,
    title: "Melodimiz",
    text: "Kalbinin Ritmi",
    extra: [
      "Dinlediğim en güzel şarkı,",
      "Senin sesin..."
    ]
  },
  // 19. ÖZLEMEK (ID -> 21)
  {
    id: 21,
    type: SlideType.MESSAGE,
    title: "Özlem",
    text: "Yanımdayken bile seni özlüyorum. Bu nasıl bir aşk?"
  },
  // 20. ŞİİR VE RESİM (ID -> 22)
  {
    id: 22,
    type: SlideType.MEMORY,
    title: "Sevdiğim",
    text: "Yaslan göğsüme sevdiğim\nBenim gönlüm gök gibidir açık deniz gibidir\nPas tutmaz benim içim yeryüzü gibidir\nToprak gibidir\nSen ki bulut gibisin\nAy gibisin güneş gibi bazen",
    image: IMAGES.poem,
    aspectRatio: "aspect-video",
    imageRotate: "rotate-0",
    textAlign: "text-left",
    author: "Şair Erdem Bayazıt"
  },
  // 21. KÜÇÜK DETAYLAR (ID -> 23)
  {
    id: 23,
    type: SlideType.MESSAGE,
    title: "Detaylar",
    text: "Kirpiklerinin ucuna kadar ezberimdesin..."
  },
  // 22. TARİH - 6 EYLÜL (ID -> 24)
  {
    id: 24,
    type: SlideType.MEMORY,
    title: "6 Eylül 2025",
    text: " ",
    image: IMAGES.date,
    secondImage: IMAGES.date2,
    watermark: "Tarih",
    aspectRatio: "aspect-video",
    imageRotate: "rotate-1"
  },
  // 23. İYİ Kİ VARSIN (ID -> 25)
  {
    id: 25,
    type: SlideType.MESSAGE,
    title: "İyi ki...",
    text: "Hayatıma girdiğin gün, takvimdeki en güzel gündü."
  },
  // 24. DETAYLAR KOLAJI (ID -> 26)
  {
    id: 26,
    type: SlideType.COLLAGE,
    title: "", 
    text: "Seni senin bile bilmediğin detaylarınla seviyorum...\nHer mimiğini ve her halini seviyorum...",
    collageImages: IMAGES.details,
    collageLayout: 'grid'
  },
  // 25. HAYALLER - GİRİŞ (ID -> 27)
  {
    id: 27,
    type: SlideType.MESSAGE,
    title: "Geleceğimiz",
    text: "Gözlerimi kapattığımda kurduğum her hayalde ve her duamın başlangıcında sen varsın."
  },
  // 26. HAYALLER LİSTESİ (ID -> 28)
  {
    id: 28,
    type: SlideType.DREAMS,
    title: "Hayallerimiz",
    extra: [
      "Birlikte dünyayı gezmek",
      "Beraber yaşayacağımız huzurlu bir ev",
      "Beraber yaz yağmurunda ıslanmak",
      "Dünyada ve ahirette seninle beraber mutlu olmak",
      "Ve daha niceleri..."
    ]
  },
  // 27. FOTOĞRAF - GÖZLER (ID -> 29)
  {
    id: 29,
    type: SlideType.MEMORY,
    title: "Gözlerin",
    text: "Gece parıldayan yıldızlar ışığını senin gözlerinden mi alıyor?",
    image: IMAGES.eyes,
    imageRotate: "-rotate-1",
    aspectRatio: "aspect-auto" 
  },
  // 28. ZORLUKLAR (ID -> 30)
  {
    id: 30,
    type: SlideType.MESSAGE,
    title: "Her Şeye Rağmen",
    text: "Hayat bazen zor olabilir ama biz birlikte her şeyin üstesinden geliriz."
  },
  // 29. TARİH - 20 EYLÜL (ID -> 31)
  {
    id: 31,
    type: SlideType.MEMORY,
    title: "20 Eylül 2025",
    text: " ",
    image: IMAGES.sept20,
    watermark: "Anı",
    imageRotate: "rotate-0",
    aspectRatio: "aspect-auto"
  },
  // 30. DESTEK - GÜNCELLENDİ (ID -> 32)
  {
    id: 32,
    type: SlideType.MESSAGE,
    title: "Sözüm",
    text: "Parmağımda yüzüğüm, yüzüğümde ismin, kalbimde sevgin... Hiç bitmesin..."
  },
  // 31. TEKLİF (ID -> 33)
  {
    id: 33,
    type: SlideType.MEMORY,
    title: "Ve o gün",
    text: "Seninle evlenebilir miyim?",
    image: IMAGES.proposal,
    watermark: "Teklif",
    imageRotate: "rotate-3"
  },
  // 32. TARİH - 5 EKİM (ID -> 34)
  {
    id: 34,
    type: SlideType.COLLAGE,
    title: "", 
    text: "En mutlu günümüz\n5 Ekim 2025",
    collageImages: IMAGES.collage,
    collageLayout: 'grid'
  },
  // 33. SÖZLER 1 (ID -> 35)
  {
    id: 35,
    type: SlideType.MESSAGE,
    title: "Söz Veriyorum",
    text: "Seni her gün, dünden daha çok seveceğime söz veriyorum."
  },
  // 34. SÖZLER 2 (ID -> 36)
  {
    id: 36,
    type: SlideType.MESSAGE,
    title: "Daima",
    text: "Saçlarına aklar düşse de, yüzün kırışsa da benim için hep en güzeli sen olacaksın."
  },
  // 35. TARİH - 18 EKİM (ID -> 37)
  {
    id: 37,
    type: SlideType.MEMORY,
    title: "18 Ekim 2025",
    text: " ",
    image: IMAGES.oct18,
    watermark: "Anı",
    imageRotate: "-rotate-2",
    aspectRatio: "aspect-auto"
  },
  // 36. HEYECAN (ID -> 38)
  {
    id: 38,
    type: SlideType.MESSAGE,
    title: "Heyecan",
    text: "Seninle 'Evet' diyeceğimiz günü iple çekiyorum."
  },
  // 37. AİLE (ID -> 39)
  {
    id: 39,
    type: SlideType.MESSAGE,
    title: "Yuvamız",
    text: "Sen benim evimsin. Nereye gidersek gidelim, kalbin benim yuvam."
  },
  // 38. SONSUZLUK (ID -> 40)
  {
    id: 40,
    type: SlideType.MESSAGE,
    title: "Sonsuzluk",
    text: "Sana denk geldim iyileştim, sebepsiz yere gülümsemelerim arttı. Meğer insanın yarası, doğru insanın varlığıyla kapanırmış..."
  },
  // 39. TEŞEKKÜR (ID -> 41)
  {
    id: 41,
    type: SlideType.MESSAGE,
    title: "Teşekkür Ederim",
    text: "Beni dünyanın en şanslı insanı yaptığın için teşekkür ederim sevgilim."
  },
  // 40. TARİH - 28 EKİM (ID -> 42)
  {
    id: 42,
    type: SlideType.COLLAGE,
    title: "28 Ekim 2025",
    text: "Birlikte nice anılara...",
    collageImages: IMAGES.oct28,
    collageLayout: 'row'
  },
  // 41. TARİH - 5 ARALIK (ID -> 43)
  {
    id: 43,
    type: SlideType.COLLAGE,
    title: "5 Aralık 2025",
    text: "",
    collageImages: IMAGES.dec05,
    collageLayout: 'col'
  },
  // 42. ŞİİR (KARAKOÇ) (ID -> 44)
  {
    id: 44,
    type: SlideType.MEMORY,
    title: "", 
    text: "Sırat’tan incedir sevda köprüsü\nBeraber geçelim tut ellerimden.\nNiyet ak güvercin, vuslat gökyüzü\nBeraber uçalım tut ellerimden.",
    image: IMAGES.poemKarakoc,
    aspectRatio: "aspect-video",
    imageRotate: "rotate-0",
    textAlign: "text-left",
    author: "Abdurrahim Karakoç"
  },
  // 43. TARİH - 25 OCAK 2026 (ID -> 45)
  {
    id: 45,
    type: SlideType.MEMORY,
    title: "25 Ocak 2026",
    text: " ",
    image: IMAGES.jan25,
    watermark: "Anı",
    imageRotate: "-rotate-1",
    aspectRatio: "aspect-auto"
  },
  // 44. YAZI (GÜLÜŞÜNÜ SEVİYORUM) (ID -> 46)
  {
    id: 46,
    type: SlideType.MESSAGE,
    title: "Seviyorum",
    text: "Gülüşünü seviyorum,\nSesini seviyorum,\nSohbetini seviyorum.\nSeni sevebilmek için\ndokunmam şart değil\nki, yüreğimde duruşunu\nseviyorum..."
  },
  // 45. ŞİİR (TARIK TUFAN) (ID -> 47)
  {
    id: 47,
    type: SlideType.MEMORY,
    title: "Şifalı Gözlerin",
    text: "...ama geçecek hepsi, geçecek.\nşifalı gözlerin her şeyi iyi edecek.\ngözlerimin içine bakmaktan korkma anna.\nsen adımını attığın andan itibaren\nHira dinginliğine dönüşecek ortalık.",
    image: IMAGES.poemTufan,
    aspectRatio: "aspect-video",
    imageRotate: "rotate-0",
    textAlign: "text-left",
    author: "Tarık Tufan"
  },
  // 46. TARİH - 5 ŞUBAT 2026 (ID -> 48)
  {
    id: 48,
    type: SlideType.MEMORY,
    title: "5 Şubat 2026",
    text: " ",
    image: IMAGES.feb05,
    watermark: "Anı",
    imageRotate: "rotate-1",
    aspectRatio: "aspect-auto"
  },
  // 47. TORUN (ID -> 49)
  {
    id: 49,
    type: SlideType.MEMORY,
    title: "Hayalim",
    text: "Yıllar geçsin, saçlarımıza ak düşsün, kucağındaki bebek torunumuz olsun istiyorum :)",
    image: IMAGES.grandchild,
    watermark: "Gelecek",
    imageRotate: "-rotate-1",
    aspectRatio: "aspect-auto",
    containerClass: "w-64"
  },
  // 48. SABIR (ID -> 50)
  {
    id: 50,
    type: SlideType.MESSAGE,
    title: "Sabır",
    text: "Azcık daha sabredelim bitanem."
  },
  // 49. SAYAÇ / MESAJ (ID -> 51)
  {
    id: 51,
    type: SlideType.MESSAGE,
    title: "Vuslat",
    text: "Sadece 69 gün kaldı, (inşAllah) bir ömür boyu mutlu olmaya..."
  },
  // 50. HEDİYE NOTU (ID -> 52)
  {
    id: 52,
    type: SlideType.MESSAGE,
    title: "Küçük Bir Not",
    text: "Bu site belki basit kodlardan ibaret ama her satırında seni düşündüm."
  },
  // 51. FİNAL ÖNCESİ (ID -> 53)
  {
    id: 53,
    type: SlideType.MESSAGE,
    title: "Ve Şimdi...",
    text: "Sana söylemek istediğim tek bir şey kaldı..."
  },
  // 52. FİNAL (ID -> 54)
  {
    id: 54,
    type: SlideType.FINAL,
    title: "Seni Çok Seviyorum",
    text: "Sevgililer Günümüz Kutlu Olsun Canım Sevgilim ❤️"
  },
  // 53. VİDEO (ID -> 55)
  {
    id: 55,
    type: SlideType.VIDEO,
    title: "",
    videoId: "2rsSI99jH6Q"
  }
];