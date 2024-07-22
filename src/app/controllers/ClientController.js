import express from 'express';
import motelController from './MotelController';

class ClientController {
    read(req, res, next) {
        res.send(' clients');
    }
    create(req, res, next) {
    }
    update(req, res, next) {
    }
    delete(req, res, next) {
    }
    home(req, res, next) {
    }
}

const clientController = new ClientController();
export default clientController;