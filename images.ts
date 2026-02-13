// BU DOSYA RESİMLERİ YÖNETMEK İÇİNDİR.
// Resimlerinizi "site hafızasından" (local) kullanmak için:

// 1. Proje ana dizininde "images" adında bir klasör oluşturun.
// 2. Resim dosyalarınızı (jpg, png) bu "images" klasörünün içine atın.
// 3. Aşağıdaki yorum satırlarını açıp (başındaki // işaretlerini silip) kendi dosya isminizi yazın.

// --- ÖRNEK KULLANIM ---
// import nisanFotografi from './images/nisan_davetiye.jpg';
// import aniFotografi from './images/bizim_foto.jpg';

// Şimdilik projenizde dosya olmadığı için hata vermesin diye URL kullanıyoruz.
// Kendi dosyalarınızı 'images' klasörüne ekleyince aşağıdaki satırları silip yukarıdaki gibi import edin.
const MEMORY_PHOTO_URL = "https://picsum.photos/600/800?grayscale";
const INVITATION_PHOTO_URL = "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop";

// Dışarıya aktarılan resimler
// Eğer import yaptıysanız buraya: memory: aniFotografi, invitation: nisanFotografi yazın.
export const IMAGES = {
  memory: MEMORY_PHOTO_URL,
  invitation: INVITATION_PHOTO_URL
};