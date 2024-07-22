import motelController from '../app/controllers/MotelController.js';

import express from 'express';
const motelroute = express.Router();


motelroute.get('/:id',motelController.detail);
motelroute.get('/',motelController.index);

export default motelroute;