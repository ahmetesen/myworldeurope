
/**
 * Module dependencies.
 */

var express = require('express')
  , mailsender = require('./mailsender')
  , pageRoutes = require('./routes/pages')
  , user = require('./routes/user')
  //, json = require('./routes/json')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', pageRoutes.index);
app.get('/servisler',pageRoutes.servisler);
app.get('/iett',pageRoutes.iett);
app.get('/dukkanlar',pageRoutes.dukkanlar);
app.get('/yonetim',pageRoutes.yonetim);
app.get('/iletisim',pageRoutes.iletisim);
//app.get('/json/servisdata',json.servisdata);
app.get('/users', user.list);
app.post('/sendmail', mailsender.mailsender);
app.post('/savevisits',pageRoutes.save);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});