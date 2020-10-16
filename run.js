var PORT = process.env.PORT || 5050;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(PORT, function(){
    console.log('Server running on 5050...');
});