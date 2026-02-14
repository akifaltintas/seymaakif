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
  eyes: EYES_URL
};