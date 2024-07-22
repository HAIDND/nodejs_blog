import express from "express";
import marketController from "../app/controllers/MarketController.js";

const marketroute = express.Router();

marketroute.get('/',marketController.index);

export default marketroute;