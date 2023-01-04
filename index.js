//..............Include Express..................................//
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

//..............Create an Express server object..................//
const app = express();

//..............Apply Express middleware to the server object....//
app.use(express.json()); //Used to parse JSON bodies (needed for POST requests)
app.use(express.urlencoded());
app.use(express.static('public')); //specify location of static assests
app.set('views', __dirname + '/views'); //specify location of templates
app.set('view engine', 'ejs'); //specify templating library

//.............Define server routes..............................//
//Express checks routes in the order in which they are defined

app.get('/', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("index");
});

const port = 3000;
app.listen(port, function() {
  console.log('Server started at http://localhost:'+port+'.')
});

/*
My dearest Benjamin, 
It has been well over forty-eight hours since we last interfaced and I miss you intensely. I find myself on this cool December evening yearning to tell you about these last few days, and in particular, this morning. At around seven, ante-meridiem, and not long after the rooster crows, I awoke from my rather brisk slumber with a profound sense of hope. Hankering, even, as some might chime, to begin crafting this project on which we settled. Without delay, I encountered a can of worms, a predicament. For ages, I have been 
*/
