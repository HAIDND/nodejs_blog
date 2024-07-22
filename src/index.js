import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import { routes } from './routes/index.js';
import mongoose from 'mongoose';

//conect to mongobd
import bdconnect from './config/bd/index.js'
//import {morgan } from 'morgan';
const app = express();

app.use(express.urlencoded(
{
    extended: true,
    parameterLimit: 10000,
}
));
app.use(express.json());

app.use(express.static('src/public'));
app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
//('view', path.join(__dirname,'resources', 'views'));
app.set('views', './src/resources/views');
//app.use(morgan())\

//route of routes init
routes(app);
const PORT  = process.env.PORT || 3000;
app.listen(PORT);
