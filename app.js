// Ürün Arama Uygulaması

let urun1 = {
  isim: "Acer Swift",
  kategori: "Teknoloji",
  fiyat: 9.999,
};

let urun2 = {
  isim: "Acer Nitro5",
  kategori: "Teknoloji",
  fiyat: 20.899,
};

let urun3 = {
  isim: "Acer Gaming",
  kategori: "Teknoloji",
  fiyat: 17.989,
};

let urun4 = {
  isim: "Lenovo V15",
  kategori: "Teknoloji",
  fiyat: 12.999,
};

let urun5 = {
  isim: "Lenovo V14",
  kategori: "Teknoloji",
  fiyat: 12.399,
};

let urun6 = {
  isim: "Lenovo Ideapad",
  kategori: "Teknoloji",
  fiyat: 4.989,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz : ");

function filtreliUrunleriDoldur(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
      filtreliUrunler.push(urun);
    }
  });
}

function filtreliUrunleriYazdir(urunler) {
  urunler.forEach(function (urun) {
    console.log("-------------------------------------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
    console.log("-------------------------------------------------------");
  });
}

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);
