var express = require('express')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path')
  , util = require('util');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//setting routes
app.get('/api/test', api.test);

//since this is a single-page-app, 404 is redirected to root
app.use(function(req,res){
  res.redirect('/');
});


var startOptmization = function() {
  util.log('RequireJS optimization started...');
  require('requirejs').optimize({
    baseUrl: 'public/js',
    name: 'main',
    out: 'public/js/main-build.js',
    optimize: 'uglify2'
  }, function (buildResponse) {
    util.log('RequireJS optimization done!');
    startListening();
  });
};

var startListening = function(){
  app.listen(app.get('port'), function(){
    util.log('Express server listening on port ' + app.get('port') + '!');
  });
};

var startServer = function(){
  util.log('Express server started...');
  startOptmization();
};

//start instance
startServer();