// BU DOSYA RESİMLERİ YÖNETMEK İÇİNDİR.
// Resimlerinizi "site hafızasından" (local) kullanmak için:

// 1. Proje ana dizininde "images" adında bir klasör oluşturun.
// 2. Resim dosyalarınızı (jpg, png) bu "images" klasörünün içine atın.
// 3. Aşağıdaki yorum satırlarını açıp (başındaki // işaretlerini silip) kendi dosya isminizi yazın.

// --- ÖRNEK KULLANIM ---
// import nisanFotografi from './images/nisan_davetiye.jpg';
// import aniFotografi from './images/bizim_foto.jpg';

// Şimdilik projenizde dosya olmadığı için hata vermesin diye URL kullanıyoruz.
const MEMORY_PHOTO_URL = "https://www.leta.com.tr/wp-content/uploads/2022/08/Zennup-1844-Fisekhane-1-kopya-scaled.jpg";
const INVITATION_PHOTO_URL = "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop";
const HOLDING_HANDS_URL = "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=600&auto=format&fit=crop";
const COFFEE_URL = "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop";
const NATURE_URL = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop";
// Google Drive view linki doğrudan img src içinde çalışmaz, bu yüzden doğrudan erişim linkine çevrildi
const SMILE_URL = "https://lh3.googleusercontent.com/d/1DXqvUJivaipKjCikKCo3k-idkIQKU9Ts";
const SECOND_DATE_URL = "https://lh3.googleusercontent.com/d/1WDcSzvrhRmGIobOJ5gB0mXiArMZnfzil";
const FLOWER_URL = "https://lh3.googleusercontent.com/d/1bEtJ1UUw7sdkQqOdCvGLfp44YZA-4LdV";
const DATE_PHOTO_URL = "https://lh3.googleusercontent.com/d/1XYyZM_0GuK9ljMnMzt76b1VdcXp0Pwlo";
const DATE_PHOTO_2_URL = "https://lh3.googleusercontent.com/d/14rjfsbf-VB7Todyde8k-xYH04ktBJuZO";
const GULPEMBE_URL = "https://lh3.googleusercontent.com/d/1XkDqOB8ES0BHIjJQI0TQDx93jmW24u9Q";
const POEM_URL = "https://lh3.googleusercontent.com/d/1VDX-46vW3XkPWjZniEMs1B7CMDWNrShJ";
const PROPOSAL_URL = "https://lh3.googleusercontent.com/d/17joSJqr46uh5g_uHJ5Hwnulxl3Payagv";

// Collage Photos
const COLLAGE_1 = "https://lh3.googleusercontent.com/d/1d4u8pARzNofQjoN_PR_eA2mMuvtUgrEk";
const COLLAGE_2 = "https://lh3.googleusercontent.com/d/1ATZYngfTBwWlxgES0I5R1B-gl5jjZUw9";
const COLLAGE_3 = "https://lh3.googleusercontent.com/d/1WExOTvMo5NIaDpVqLoMce5DeW4Zk7K_s";
const COLLAGE_4 = "https://lh3.googleusercontent.com/d/1F4-BcGbdjcy_x7aMeEG66KZYOPn6cVmB";

// 28 Ekim Photos
const OCT28_1 = "https://lh3.googleusercontent.com/d/1VwRaqCygu6sHPUe6YH8peZVC_CGgTL08";
const OCT28_2 = "https://lh3.googleusercontent.com/d/1oSIveoGA7ZYFsSy7WCYujpXEc9vJM57m";

// 5 Aralık Photos
const DEC05_1 = "https://lh3.googleusercontent.com/d/1Ba2bwhEgvYWvAYGZPzLLw0QiP7JbBbmI";
const DEC05_2 = "https://lh3.googleusercontent.com/d/1y9Xh5MN6XM1mhVlZ6P_mi1YEDqyKlQT2";

// Detaylar Kolajı
const DETAILS_1 = "https://lh3.googleusercontent.com/d/1t8dIcctuqk4hrorzZ4DqWT6BkTVh0KzA";
const DETAILS_2 = "https://lh3.googleusercontent.com/d/1typ5LUdOEy_DIgUYrpDKZp0Ftj25vVQH";
const DETAILS_3 = "https://lh3.googleusercontent.com/d/1UoI5w4LIIeaG-_2xFucxnQ0wgVKwJYCx";
const DETAILS_4 = "https://lh3.googleusercontent.com/d/1oDo91ZEXamSoBIFeez7L4p3q5bD-dINw";
const DETAILS_5 = "https://lh3.googleusercontent.com/d/1NuZC5pgmzK2uBrQgs1_582ymTQICJVVZ";
const DETAILS_6 = "https://lh3.googleusercontent.com/d/1ZuTwgdc0xaB-Ag9i4VsQi3TVAGF_bEjG";


// 20 Eylül Photo
const SEPT20_URL = "https://lh3.googleusercontent.com/d/1YtY9EkEc0qLgHSZqb3XHX7qo7b22WJwS";

// 18 Ekim Photo
const OCT18_URL = "https://lh3.googleusercontent.com/d/103ss_SdmcMwu14CX06mge42xCeOtG1iG";

// 27 Temmuz Photo
const JULY27_URL = "https://lh3.googleusercontent.com/d/1BA8nbMT--vUDGlGsrbO5aeDMx9OWMf6J";

// Yeni Eklenen Resimler
const POEM_KARAKOC_URL = "https://lh3.googleusercontent.com/d/17Kae3AMjXHdXVN_OIe8BJQU_z6585IGA";
const JAN25_URL = "https://lh3.googleusercontent.com/d/1b3tX3eUSZxzysfl8m57Rm25py4xCDUmu";
const POEM_TUFAN_URL = "https://lh3.googleusercontent.com/d/1KN3T0FPDxeLZTwBonLplI3wx8QpGgkuL";
const FEB05_URL = "https://lh3.googleusercontent.com/d/1USBFT36nKXFU-18f6KylkeAYyLdQI0kX";
const GRANDCHILD_URL = "https://lh3.googleusercontent.com/d/1YZXGPQMKz4Oj0MHCZp_3hkeOA9Nw1UlJ";


const EYES_URL = "https://lh3.googleusercontent.com/d/1fClkMfwQOcLS3E3Weh-eUZ4C83razOxK"; // Göz temalı resim - Güncellendi

// Dışarıya aktarılan resimler
export const IMAGES = {
  memory: MEMORY_PHOTO_URL,
  invitation: INVITATION_PHOTO_URL,
  hands: HOLDING_HANDS_URL,
  coffee: COFFEE_URL,
  nature: NATURE_URL,
  smile: SMILE_URL,
  secondDate: SECOND_DATE_URL,
  flower: FLOWER_URL,
  date: DATE_PHOTO_URL,
  date2: DATE_PHOTO_2_URL,
  gulpembe: GULPEMBE_URL,
  poem: POEM_URL,
  proposal: PROPOSAL_URL,
  eyes: EYES_URL,
  collage: [COLLAGE_1, COLLAGE_2, COLLAGE_3, COLLAGE_4],
  oct28: [OCT28_1, OCT28_2],
  dec05: [DEC05_1, DEC05_2],
  details: [DETAILS_1, DETAILS_2, DETAILS_4, DETAILS_5], // 4 adet seçildi, ekrana sığması için
  sept20: SEPT20_URL,
  oct18: OCT18_URL,
  july27: JULY27_URL,
  poemKarakoc: POEM_KARAKOC_URL,
  jan25: JAN25_URL,
  poemTufan: POEM_TUFAN_URL,
  feb05: FEB05_URL,
  grandchild: GRANDCHILD_URL
};