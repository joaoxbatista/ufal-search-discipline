import { OffersController } from "../controllers/OffersController";
import { Router } from "express";
import uploads from "../config/multer";

const offerRoutes = Router();
const offerController = new OffersController();
offerRoutes.post('/',uploads.single('offer_file'), offerController.save);

export default offerRoutes;