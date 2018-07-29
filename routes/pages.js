
/*
 * GET home page.
 */

var pageData = {
  index:{
    title:'My World Europe',
    description:'Ağaoğlu My World Europe Site Sakinleri - Bilgi Platformu',
    canonical:'http://www.myworldeurope.net'
  },
  servisler:{
    title:'Servis Saatleri - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi\'nden Geçen Servislerin Saatleri',
    canonical:'http://www.myworldeurope.net/servisler'
  },
  iett:{
    title:'İETT Saatleri - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi\'nden Geçen Otobüslerin Saatleri',
    canonical:'http://www.myworldeurope.net/iett'
  },
  dukkanlar:{
    title:'Çarşı Dükkanları - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi, Çarşı Alanı İrtibat Numaraları',
    canonical:'http://www.myworldeurope.net/dukkanlar'
  },
  iletisim:{
    title:'İletişim - My World Europe',
    description:'Ağaoğlu My World Europe Web Sitesi Yöneticilerine Ulaşın',
    canonical:'http://www.myworldeurope.net/iletisim'
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