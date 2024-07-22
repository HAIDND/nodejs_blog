import express from 'express';
import adminController from '../app/controllers/AdminController.js';
import motelController from '../app/controllers/MotelController.js';
const adminroute = express.Router();



adminroute.get('/add/post', adminController.addPost);
adminroute.get('/add/product', adminController.addAfilate);
adminroute.get('/add/motel', adminController.addMotel);
adminroute.get('/add/any', adminController.addAny);
adminroute.post('/save/motel', motelController.savePost);
adminroute.get('/save/motel', motelController.save);
adminroute.get('/edit', adminController.edit);
adminroute.get('/:slug', adminController.slug);
adminroute.get('/', adminController.index);


export default adminroute;
