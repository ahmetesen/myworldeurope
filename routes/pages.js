
/*
 * GET home page.
 */

var pageData = {
  index:{
    title:'My World Europe',
    description:'Ağaoğlu My World Europe Site Sakinleri - Bilgi Platformu',
    canonical:'http://www.myworldeurope.net',
    keywords:'ağaoğlu, ağaoğlu my world europe, my world europe, myworldeurope'
  },
  servisler:{
    title:'Servis Saatleri - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi\'nden Geçen Servislerin Saatleri',
    canonical:'http://www.myworldeurope.net/servisler',
    keywords:'ağaoğlu, my world europe, servis, myworldeurope servis'
  },
  iett:{
    title:'İETT Saatleri - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi\'nden Geçen Otobüslerin Saatleri',
    canonical:'http://www.myworldeurope.net/iett',
    keywords:'ağaoğlu, my world europe, iett, myworldeurope iett, otobüs, my world europe otobüs'
  },
  dukkanlar:{
    title:'Çarşı Dükkanları - My World Europe',
    description:'Ağaoğlu My World Europe Sitesi, Çarşı Alanı İrtibat Numaraları',
    canonical:'http://www.myworldeurope.net/dukkanlar',
    keywords:'ağaoğlu, my world europe, çarşı, dükkan, alış veriş'
  },
  iletisim:{
    title:'İletişim - My World Europe',
    description:'Ağaoğlu My World Europe Web Sitesi Yöneticilerine Ulaşın',
    canonical:'http://www.myworldeurope.net/iletisim',
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