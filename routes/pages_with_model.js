
/*
 * GET home page.
 */

function Page(){
  this.title="";
  this.description="";
  this.canonical="";
  this.keywords="";
}

var index= new Page();
var servisler = new Page();
var iett= new Page();
var dukkanlar = new Page();
var yonetim = new Page();
var iletisim = new Page();

index.title='My World Europe | Siteden Geçen Otobüsler - AVM Servisleri - Çarşı Alanı - Yönetim';
index.description='Başakşehir Ziya Gökalp Mahallesi\'nde bulunan Ağaoğlu My World Europe Sitesi sakinleri için bilgi paylaşım platformudur. Sitemiz, Ayazma, Kredi ve Yurtlar Kurumu, Kanuni Sultan Süleyman Yurdu yanındadır.';
index.canonical='https://myworldeurope.net';
index.keywords='my world europe, ağaoğlu my world europe, ağaoğlu, myworldeurope, my world europe otobüs, ziya gökalp otobüs, ziya gökalp servis, ziya gökalp ağaoğlu, kanuni sultan süleyman yurdu';

servisler.title='Servis Saatleri - My World Europe';
servisler.description='Ağaoğlu My World Europe Sitesi\'nden Geçen AVM Servislerinin Saatleri';
servisler.canonical='https://myworldeurope.net/servisler';
servisler.keywords='ağaoğlu, my world europe, servis, arenapark, moi, mall of istanbul, kanuni sultan süleyman, myworldeurope servis, venezia, 212 avm';

iett.title='İETT Saatleri - My World Europe';
iett.description='Ağaoğlu My World Europe Sitesi\'nden Geçen IETT Otobüslerinin Saatleri';
iett.canonical='https://myworldeurope.net/iett';
iett.keywords='ağaoğlu, my world europe, iett, myworldeurope iett, otobüs, my world europe otobüs, 79K, MK19, 31Y, yurt, kyk';

dukkanlar.title='Çarşı Dükkanları - My World Europe';
dukkanlar.description='Ağaoğlu My World Europe Sitesi, Çarşı Alanı İrtibat Numaraları';
dukkanlar.canonical='https://myworldeurope.net/dukkanlar';
dukkanlar.keywords='ağaoğlu, my world europe, çarşı, dükkan, alış veriş, A101, Migros, Robert\'s Coffee, Turyap, Remax, Alf Alliance';

yonetim.title='Site Yönetimi - My World Europe';
yonetim.description='Ağaoğlu My World Europe Sitesi, Site Yönetimi İrtibat Numaraları';
yonetim.canonical='https://myworldeurope.net/yonetim';
yonetim.keywords='ağaoğlu, my world europe, yonetim, site yönetimi, güvenlik, teknik servis';

iletisim.title='İletişim - My World Europe';
iletisim.description='Ağaoğlu My World Europe Web Sitesi Yöneticilerine Ulaşın';
iletisim.canonical='https://myworldeurope.net/iletisim';
iletisim.keywords='ağaoğlu, my world europe, iletişim';

exports.index = function(req, res){
  res.render('index', index);
};
exports.servisler = function(req, res){
  res.render('servisler', servisler);
};
exports.iett = function(req, res){
  res.render('iett', iett);
};
exports.dukkanlar = function(req, res){
  res.render('dukkanlar', dukkanlar);
};
exports.yonetim = function(req, res){
  res.render('yonetim', yonetim);
};
exports.iletisim = function(req, res){
  res.render('iletisim', iletisim);
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