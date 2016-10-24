var express = require('express')
var path = require('path')
var app = express()

app.use('/public', express.static(path.join(__dirname, '/public')));
        
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});