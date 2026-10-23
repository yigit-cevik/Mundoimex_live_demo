# Mundoimex Logistics & Customs - GitHub Pages Live Demo

Bu klasör, **Mundoimex Logistics & Customs** kurumsal web platformunun **GitHub Pages** (veya herhangi bir statik hosting: Netlify, Vercel, Cloudflare Pages) üzerinde sıfır konfigürasyonla doğrudan canlıya alınabilmesi için hazırlanmış saf HTML5, Vanilla JavaScript ve Tailwind CSS sürümüdür.

---

## 📁 Dosya Yapısı

```text
Mundoimex_pages/
├── index.html           # Ana Sayfa (Hero, kurumsal yetki vitrini, 6 temel hizmet, metrikler)
├── hizmetler.html       # Hizmetlerimiz (Deniz, Kara, Hava, Gümrükleme, Antrepo, Proje & Incoterms Rehberi)
├── iletisim.html        # İletişim & Lokasyonlar (DTM Merkez, liman masaları ve interaktif mesaj formu)
├── 404.html             # Özel 404 Sayfası
├── .nojekyll            # GitHub Pages Jekyll atlama dosyası
└── assets/
    ├── css/
    │   └── style.css    # Özel stiller ve animasyonlar
    └── js/
        └── main.js      # Mobil menü ve toast bildirim sistemi
```

---

## 🚀 GitHub Pages'e Yükleme ve Yayına Alma Adımları

### 1. Yeni Bir GitHub Reposu Oluşturun
GitHub hesabınızda yeni bir repository açın (örneğin: `mundoimex-demo` veya `mundoimex`).

### 2. Dosyaları Repoya Yükleyin (Terminal veya Git):

Bu klasör (`Mundoimex_pages`) içerisinde terminal açıp şu komutları çalıştırın:

```bash
git init
git add .
git commit -m "feat: Mundoimex static web platform for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<kullanici-adiniz>/<repo-adiniz>.git
git push -u origin main
```

*(Alternatif olarak doğrudan GitHub web arayüzünden "Upload files" diyerek bu klasörün içindeki tüm dosyaları repoya sürükleyebilirsiniz).*

---

### 3. GitHub Pages'i Aktif Edin

1. GitHub'da reponuzun **Settings** (Ayarlar) sekmesine gidin.
2. Sol menüden **Pages** seçeneğine tıklayın.
3. **Build and deployment > Source** kısmını **Deploy from a branch** olarak seçin.
4. **Branch** kısmında `main` ve `/ (root)` seçip **Save** (Kaydet) butonuna basın.

Yaklaşık 30-60 saniye içinde siteniz şu adreste canlı yayında olacaktır:
👉 `https://<kullanici-adiniz>.github.io/<repo-adiniz>/`

---

## ✨ Özellikler

- **Sıfır Bağımlılık:** Sunucu tarafı çalıştırma veya PHP derlemesi gerektirmez, doğrudan tarayıcıda çalışır.
- **Göreceli Bağlantılar (Relative Paths):** Reponuz alt dizinde (`/repo-adi/`) veya özel alan adında (`mundoimex.com`) olsa dahi tüm linkler ve stiller kusursuz çalışır.
- **Mobil Uyumlu:** Akıllı telefon, tablet ve masaüstü ekranlarında %100 responsive.
- **İnteraktif Mesaj Formu:** İletişim sayfasında anlık toast geri bildirimi ile çalışır.
