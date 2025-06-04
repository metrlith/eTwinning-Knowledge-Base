# NOT (04/06/2025 itibariyle)

Bu proje daha bitirilmemiştir! Şu anda yayında olan web sitesi, bu projenin beta sürümünü yansıtmaktadır.

Planlanan değişiklikler için [yol haritasına](ROADMAP.md) göz atın.
Bilinen hatalar için [Hatalar](https://github.com/metrlith/eTwinning-Knowledge-Base/issues) sayfasını ziyaret edin.

# eTwinning Bilgi Tabanı

Avrupa Birliği'nin eTwinning projesi için basit bir bilgi tabanı uygulaması. Proje, her hangi bir Twinspace'den bağımsız olarak platformdaki herkes tarafından kullanılabilir.

Proje, React ve Node.js kullanılarak yapılmıştır. Maddeler, bir JSON dosyasında saklanır.

## Özellikler

- Maddeleri listeleyip görüntüleyin
- İstediğiniz maddeyi arayın, ID ya da isim vasıtasıyla
- Madde içeriklerini okuyun

## Projeyi Kullanmak

### Ön Koşullar

- [Git](https://git-scm.com/) (depoyu klonlamak için)
- [Visual Studio Code](https://code.visualstudio.com/) (önerdiğim kod düzenleyici)
- [Node.js](https://nodejs.org/) (sürüm 14 veya üzeri)
- [npm](https://www.npmjs.com/) (Node.js ile birlikte gelir)

### Kurulum

1. Depoyu klonlayın:

Depoyu klonlamak için, Git yüklediğinizden emin olun. Sonra, bir konsol açın ve sırayla şu komutları yazın:

   ```bash
   git clone https://github.com/metrlith/eTwinning-Knowledge-Base.git
   cd eTwinning-Knowledge-Base
   ```

   SSH kullanmayı tercih ederseniz:

   ```bash
   git clone git@github.com:metrlith/eTwinning-Knowledge-Base.git
   cd eTwinning-Knowledge-Base
   ```

2. Bağımlılıkları yükleyin:

Proje, "bağımlılıklar" adı verilen bazı modüllerde depolanır. Bu modüller `node_modules` denilen bir klasörde saklanacaktır. Modülleri yüklemek için bu komutu yazın:

   ```bash
   npm install
   ```

### Yerel Olarak Çalıştırma

Geliştirme sunucusunu başlatın:

```sh
npm start
```

Uygulamayı tarayıcınızda görüntülemek için [http://localhost:3000](http://localhost:3000) adresini açın.

### Projeyi Dağıtıma Açmak

Bu proje, bir uygulamaya dönüştürülebilir. Bunu yapmayı önermem. Ancak test amaçlı yapmayı düşünebilirsiniz. Bunu yapmak için şu komutu yazın:

```sh
npm run build
```

Uygulamanız `build/` klasöründe olacaktır.

### GitHub Sayfalarına Dağıtım

Bu proje [GitHub Pages](https://pages.github.com/)'a dağıtılmak üzere yapılandırılmıştır. Ancak bunun için bir GitHub hesabı açmanız gerekecektir. Ayrıca bir hesap açarak hem Git hem de Visual Studio Code, daha kullanışlı hale gelecektir.

1. [`package.json`](package.json) içindeki `homepage` alanının deponuzun GitHub Pages URL'sine ayarlandığından emin olun. Örneğin:

   ```json
   "homepage": "https://<your-github-username>.github.io/eTwinning-Knowledge-Base"
   ```

`<your-github-username>` kısmını gerçek GitHub kullanıcı adınızla değiştirdiğinizden emin olun. Örnek olarak: (https://metrlith.github.io/eTwinning-Knowledge-Base) sitesi.

> Not: <> bu işaretlere açılı parantezler denir. Karşılaştığınız hiçbir web sitesi adresinde açılı parantezler bulunmaz! O yüzden GitHub isminizi koyarken onları web sitesi adresinden kaldırın.

2. Bu komut ile dağıtıma sunun:

   ```bash
   npm run deploy
   ```

Siteniz `https://<your-github-username>.github.io/eTwinning-Knowledge-Base` adresinden erişilebilir olacaktır.

## Veri

Makaleler [`public/data/articles.json`](public/data/articles.json) dosyasında saklanır. Dosya, her biri aşağıdaki yapıya sahip bir makale nesneleri dizisi içerir:

```json
{
  "id": "1",
  "title": "Makale ismi",
  "content": "Makale içeriği",
  "author": "Kişi ismi"
}
```

Değerler:
- `id`: arama sırasında listelenecek makalenin kimliği. Lütfen makale için kimliğinizi belirlerken sırayla ilerleyin. Ayrıca depolama amacıyla da kullanılır.
- `title`: makalenin başlığıdır. Anasayfada listenenirken görürsünüz.
- `content`: makalenin içeriğidir. Bir makaleye tıkladığınızda göreceğiniz yazıdır.
- `author`: makaleyi yazan kişinin adıdır. Bu proje için varsayılan değer, "eTwinning KB Team"dir.

## Projeye Katkıda Bulunun

eTwinning Bilgi Tabanı'na katkılarınızı beklerim! Katkıda bulunmak isterseniz lütfen şu adımları izleyin:

1. Depoyu çatallandırın. Bu şekilde size özel bir klon elde edersiniz.
2. Özelliğiniz veya hata düzeltmeniz için yeni bir dal oluşturun. Böylelikle ana proje ve yaptığınız değişiklikler ayrı kalır.
3. Değişikliklerinizi yapın ve kaydedin.
4. Değişikliklerinizi çatallanmış deponuza gönderin.
5. İşlem bittiği zaman bir çekme isteği oluşturun. Böylelikle ben de değişikliklerinizi ana projeye aktarabilirim.

## Lisans

eTwinning Bilgi Tabanı, MİT Lisansı altında lisanslanmıştır. Lisansa [buradan](LICENSE) ulaşabilirsiniz.
