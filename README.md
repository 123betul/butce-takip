# 💰 Bütçe Takip Uygulaması

Gelir ve giderlerinizi gerçek zamanlı olarak takip etmenizi sağlayan, modern tasarımlı ve kullanıcı dostu bir bütçe yönetim uygulamasıdır. Bu proje **React**, **Vite** ve **Firebase Firestore** kullanılarak geliştirilmiştir.

---

## 🚀 Özellikler

- **Gerçek Zamanlı Veri Takibi:** Firebase Firestore entegrasyonu sayesinde bütçe verileriniz tüm cihazlarda anlık olarak senkronize olur.
- **Gelir & Gider Yönetimi:** İşlem adı, miktarı ve türünü (Gelir/Gider) belirterek bütçe hareketlerinizi kolayca ekleyebilir veya silebilirsiniz.
- **Anlık Bakiye Özeti:** Toplam Gelir, Toplam Gider ve Kalan Net Bakiye bilgilerinizi dinamik grafikler ve kartlar üzerinden anlık olarak görebilirsiniz.
- **Kullanıcı Dostu Bildirimler (Toast):** İşlem başarıyla eklendiğinde, silindiğinde veya hata oluştuğunda şık bildirimler ile bilgilendirilirsiniz.
- **Modern ve Duyarlı (Responsive) Arayüz:** Mobil ve masaüstü cihazlar ile tam uyumlu, göz yormayan modern tasarım.

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React (v19)
- **Derleyici & Geliştirme Ortamı:** Vite (v8)
- **Veritabanı:** Firebase Firestore (Gerçek zamanlı NoSQL)
- **Stil & İkonlar:** Bootstrap (v5.3), Bootstrap Icons & Özel CSS3 Tasarımı

---

## 💻 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu Klonlayın
```bash
git clone <depo-adresi>
cd bütçe-takip
```

### 2. Gerekli Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Uygulamayı Başlatın
```bash
npm run dev
```
Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyebilirsiniz.

---

## ⚙️ Firebase Yapılandırması

Uygulama hazır bir Firebase projesine bağlıdır. Kendi Firebase veritabanınızı kullanmak isterseniz `src/firebase.js` dosyasındaki `firebaseConfig` nesnesini kendi Firebase API anahtarlarınızla güncelleyebilirsiniz:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için lisans dosyasına göz atabilirsiniz.
