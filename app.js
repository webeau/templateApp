var express = require('express')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path');

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


//##########################################
//##### optimze with requirejs #############
//##########################################
require('requirejs').optimize({
    baseUrl: 'public/js',
    name: 'main',
    out: 'public/js/main-build.js',
    optimize: 'uglify2'
}, function (buildResponse) {
	console.log('RequireJS optimization done!', buildResponse);
});
//##########################################
//##########################################

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
