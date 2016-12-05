var express = require('express');
var app = express();

app.use('/src', express.static('src'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/usr', function(req, res) {
	res.render('index', { title: 'Hello World', message: 'It is an Express demo', src:'/src/img/icon-msg.png' });
});

app.use(function(req, res, next) {
    res.end('Sorry can not find that!');
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3002, function() {
    console.log('Example app listening on port 3002');
});
