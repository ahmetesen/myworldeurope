
/*
 * GET home page.
 */

var pageData = {
  index:{
    title:'My World Europe | Siteden Geçen Otobüsler - AVM Servisleri - Çarşı Alanı - Yönetim',
    description:'Başakşehir Ziya Gökalp Mahallesi\'nde bulunan Ağaoğlu My World Europe Sitesi sakinleri için bilgi paylaşım platformudur. Sitemiz, Ayazma, Kredi ve Yurtlar Kurumu, Kanuni Sultan Süleyman Yurdu yanındadır.',
    canonical:'https://myworldeurope.net',
    keywords:'my world europe, ağaoğlu my world europe, ağaoğlu, myworldeurope, my world europe otobüs, ziya gökalp otobüs, ziya gökalp servis, ziya gökalp ağaoğlu, kanuni sultan süleyman yurdu'
  },
  servisler:{
    title:'Servis Saatleri - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi\'nden Geçen AVM Servislerinin Saatleri',
    canonical:'https://myworldeurope.net/servisler',
    keywords:'ağaoğlu, my world europe, servis, arenapark, moi, mall of istanbul, kanuni sultan süleyman, myworldeurope servis, venezia, 212 avm',
    data:{
      "Mall Of İstanbul":{
          "id":"moi",
          "Site'den Kalkış":["10:15","11:15","12:15","13:15","14:15","15:15","16:15"],
          "MOİ'den Kalkış":["11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
          "Notlar":["Hafta sonları hizmet vermemektedir."]
      },
      "Arenapark":{
          "id":"arenapark",
          "Arenapark'tan Kalkış":["11:45","13:30","16:00"],
          "Notlar":["Arenapark'tan kalktıktan tahmini 8 dakika sonra siteden geçer."]
  
      },
      "Başak Pazar":{
          "id":"basakpazar",
          "Site'den Kalkış":["11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30"],
          "Başak Pazar'dan Kalkış":["11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"],
          "Notlar":["Perşembe ve Pazar günleri hizmet vermektedir.", "Belirtilen saatlerde Site'nin A, B ve C Kapılarından geçer."]
      },
      "Venezia AVM":{
          "id":"venezia",
          "Site'den Kalkış":["10:00","12:00","14:00","16:00","18:00"],
          "Venezia AVM'den Kalkış":["11:00","13:00","15:00","17:00","19:00"],
          "Notlar":[]
      }
    }
  },
  iett:{
    title:'İETT Saatleri - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi\'nden Geçen IETT Otobüslerinin Saatleri',
    canonical:'https://myworldeurope.net/iett',
    keywords:'ağaoğlu, my world europe, iett, myworldeurope iett, otobüs, my world europe otobüs, 79K, MK19, 31Y, yurt, kyk'
  },
  dukkanlar:{
    title:'Çarşı Dükkanları - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi, Çarşı Alanı İrtibat Numaraları',
    canonical:'https://myworldeurope.net/dukkanlar',
    keywords:'ağaoğlu, my world europe, çarşı, dükkan, alış veriş, A101, Migros, Robert\'s Coffee, Turyap, Remax, Alf Alliance'
  },
  yonetim:{
    title:'Site Yönetimi - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi, Site Yönetimi İrtibat Numaraları',
    canonical:'https://myworldeurope.net/yonetim',
    keywords:'ağaoğlu, my world europe, yonetim, site yönetimi, güvenlik, teknik servis'
  },
  iletisim:{
    title:'İletişim - My World Europe',
    description:'Ağaoğlu My World Europe Web Sitesi Yöneticilerine Ulaşın',
    canonical:'https://myworldeurope.net/iletisim',
    keywords:'ağaoğlu, my world europe, iletişim'
  }
}

exports.index = function(req, res){
  res.render('index', pageData.index);
};
exports.servisler = function(req, res){
  res.render('servisler', pageData.servisler);
};
exports.iett = function(req, res){
  res.render('iett', pageData.iett);
};
exports.dukkanlar = function(req, res){
  res.render('dukkanlar', pageData.dukkanlar);
};
exports.yonetim = function(req, res){
  res.render('yonetim', pageData.yonetim);
};
exports.iletisim = function(req, res){
  res.render('iletisim', pageData.iletisim);
};
exports.save = function(req, res){
  const fs = require('fs');

  currentDate = new Date().toString() + " ";

  currentDate+=req.body.log+"\r\n";
  fs.appendFile('./public/history/log.txt', currentDate, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
};