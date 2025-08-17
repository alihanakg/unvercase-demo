# UnverCase Static Website

Bu, UnverCase telefon kılıfı mağazasının tamamen statik versiyonudur. Next.js uygulamasının tüm özelliklerini içerir ve herhangi bir web sunucusunda çalıştırılabilir.

## 🚀 Özellikler

### ✨ Ana Özellikler
- **Particles.js Animasyonları** - Etkileyici arka plan animasyonları
- **Gelişmiş Arama Sistemi** - Gerçek zamanlı ürün arama ve filtreleme
- **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- **Ürün Detay Modalları** - Zengin ürün bilgileri ve görselleri
- **Kategori Sistemi** - Organize edilmiş ürün kategorileri
- **İletişim Formu** - Müşteri iletişimi için form
- **Sosyal Medya Entegrasyonu** - Instagram, WhatsApp, Email, Telefon linkleri

### 🎨 Tasarım Özellikleri
- Modern ve şık arayüz
- Gradient renkler ve animasyonlar
- Hover efektleri ve geçişler
- Floating animasyonlar
- Light ray efektleri
- Wave divider animasyonları

### 🔧 Teknik Özellikler
- Vanilla JavaScript (framework gerektirmez)
- CSS3 animasyonları ve geçişler
- Particles.js entegrasyonu
- Responsive grid sistemi
- Modal sistemleri
- Notification sistemi

## 📁 Dosya Yapısı

```
static-version/
├── index.html          # Ana HTML dosyası
├── styles.css          # Tüm CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── assets/
│   └── unverlogo.png   # Logo dosyası
└── README.md           # Bu dosya
```

## 🛠️ Kurulum

1. **Dosyaları İndirin**
   ```bash
   # Tüm static-version klasörünü kopyalayın
   cp -r static-version/ your-project/
   ```

2. **Web Sunucusunda Çalıştırın**
   ```bash
   # Python ile basit sunucu
   python -m http.server 8000
   
   # Node.js ile
   npx serve static-version
   
   # PHP ile
   php -S localhost:8000
   ```

3. **Tarayıcıda Açın**
   ```
   http://localhost:8000
   ```

## 🎯 Kullanım

### Ana Sayfa
- Hero bölümünde particles.js animasyonları
- Arama kutusu ile ürün arama
- Popüler arama etiketleri
- Hızlı öneriler
- İstatistikler ve özellikler

### Ürünler Sayfası
- Gelişmiş filtreleme sistemi:
  - Kategori filtresi
  - Fiyat aralığı
  - Sıralama seçenekleri
  - Arama kutusu
- Grid/List görünüm değiştirme
- Ürün kartları:
  - Hover efektleri
  - Renk seçenekleri
  - Koruma özellikleri
  - Sepete ekleme
  - Detay görüntüleme

### Kategoriler Sayfası
- 8 farklı kategori
- Her kategori için özel görseller
- Ürün sayıları
- Kategori özellikleri

### Hakkımızda Sayfası
- Şirket hikayesi
- Misyon ve değerler
- Ekip bilgileri
- İstatistikler

### İletişim Sayfası
- İletişim bilgileri
- Çalışma saatleri
- İletişim formu
- Adres bilgileri

## 🎨 Özelleştirme

### Renkler
CSS değişkenlerini düzenleyerek renkleri değiştirebilirsiniz:

```css
:root {
    --primary-600: #0284c7;  /* Ana renk */
    --primary-700: #0369a1;  /* Koyu ton */
    --gray-900: #111827;     /* Metin rengi */
}
```

### Ürünler
`script.js` dosyasındaki `siteConfig.products` array'ini düzenleyerek ürünleri değiştirebilirsiniz:

```javascript
const siteConfig = {
    products: [
        {
            id: 1,
            name: "Ürün Adı",
            price: 89.99,
            image: "ürün-resmi.jpg",
            // ... diğer özellikler
        }
    ]
};
```

### Particles.js Ayarları
`script.js` dosyasındaki `initializeParticles()` fonksiyonunu düzenleyerek particles ayarlarını değiştirebilirsiniz.

## 📱 Responsive Tasarım

Website aşağıdaki breakpoint'lerde optimize edilmiştir:

- **Desktop**: 1024px ve üzeri
- **Tablet**: 768px - 1023px
- **Mobile**: 767px ve altı

## 🔧 Teknik Detaylar

### JavaScript Modülleri
- **Navigation System**: Sayfa geçişleri ve URL yönetimi
- **Products System**: Ürün listeleme ve filtreleme
- **Search System**: Arama fonksiyonları
- **Modal System**: Ürün detay modalları
- **Notification System**: Bildirim sistemi
- **Contact Form**: İletişim formu validasyonu

### CSS Özellikleri
- CSS Grid ve Flexbox
- CSS Variables (Custom Properties)
- CSS Animations ve Transitions
- Backdrop Filter efektleri
- Gradient renkler
- Box Shadow efektleri

### Performans Optimizasyonları
- Lazy loading (görüntüler için)
- Debounced search
- Efficient DOM manipulation
- CSS optimizations
- Minimal JavaScript bundle

## 🌐 Tarayıcı Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Destek

Herhangi bir sorun yaşarsanız veya özelleştirme yardımına ihtiyacınız varsa:

- **Email**: info@UnverCase.com
- **Telefon**: +90 555 555 55 55
- **WhatsApp**: +90 555 555 55 55

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🔄 Güncellemeler

### v1.0.0 (2024)
- İlk sürüm
- Tüm temel özellikler
- Particles.js entegrasyonu
- Responsive tasarım
- Ürün yönetim sistemi

---

**UnverCase** - Premium Telefon Kılıfları
