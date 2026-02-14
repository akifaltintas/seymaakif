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

const EYES_URL = "https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=600&auto=format&fit=crop"; // Göz temalı resim

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
  collage: [COLLAGE_1, COLLAGE_2, COLLAGE_3, COLLAGE_4]
};