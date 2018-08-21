const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


//var express = require('express');
var exphbs = require('express-handlebars');

var app = express();


app.engine('handlebars', exphbs({defaultLAyout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => res.render('home'));

//app.set('port', process.env.PORT || 3000);


app.listen(PORT, () => console.log(`express on location ${ PORT }`));
