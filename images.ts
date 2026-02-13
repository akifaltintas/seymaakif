// BU DOSYA RESİMLERİ YÖNETMEK İÇİNDİR.
// Resimlerinizi "site hafızasından" (local) kullanmak için:

// 1. Proje ana dizininde "images" adında bir klasör oluşturun.
// 2. Resim dosyalarınızı (jpg, png) bu "images" klasörünün içine atın.
// 3. Aşağıdaki yorum satırlarını açıp (başındaki // işaretlerini silip) kendi dosya isminizi yazın.

// --- ÖRNEK KULLANIM ---
// import nisanFotografi from './images/nisan_davetiye.jpg';
// import aniFotografi from './images/bizim_foto.jpg';

// Şimdilik projenizde dosya olmadığı için hata vermesin diye URL kullanıyoruz.
const MEMORY_PHOTO_URL = "https://picsum.photos/600/800?grayscale";
const INVITATION_PHOTO_URL = "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop";
const HOLDING_HANDS_URL = "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=600&auto=format&fit=crop";
const COFFEE_URL = "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop";
const NATURE_URL = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop";
const SMILE_URL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop";

// Dışarıya aktarılan resimler
export const IMAGES = {
  memory: MEMORY_PHOTO_URL,
  invitation: INVITATION_PHOTO_URL,
  hands: HOLDING_HANDS_URL,
  coffee: COFFEE_URL,
  nature: NATURE_URL,
  smile: SMILE_URL
};