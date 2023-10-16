const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

const indexRouter = require('./backend/routes/index.js');
const apiRouter = require('./backend/routes/api.js');

require('./backend/models/connect');


const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))



app.use('/', indexRouter);
app.use('/api', apiRouter);


app.listen(8000, ()=>{
    console.log('server running')
})
