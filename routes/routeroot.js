
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'My World Europe' });
};
exports.servisler = function(req, res){
  res.render('servisler', { title: 'Servisler' });
};
exports.iletisim = function(req, res){
  res.render('iletisim', { title: 'İletişim' });
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