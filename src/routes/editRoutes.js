import express from 'express';
const editrouter = express.Router();
// import editController from '../app/controller/EditController.js';
// import { editController } from './export.js';
import { editController } from '../app/controllers/EditController.js';

editrouter.get('/add', editController.add);
editrouter.get('/showdata', editController.showdata);
editrouter.get('/:slug', editController.another);
editrouter.get('/', editController.index);

export default editrouter;
