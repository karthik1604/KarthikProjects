var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
//var cors       = require('cors');

var index      = require('./routes/index');

//var patients      = require('./routes/patients');



var app        = express();

// app.use(cors());

// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers','Content-Type');
//     next();
// });

//View Engine
 app.set('views',path.join(__dirname,'views'));
 app.set('view engine','ejs');
 app.engine('html',require('ejs').renderFile);

//set static folder

 app.use(express.static(path.join(__dirname,'client')));

//Body parser MW

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

 app.use('/',index);
 //app.use('/api',patients);

app.listen(5000);
   console.log('server started at' +  5000);

