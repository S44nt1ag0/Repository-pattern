import { Router } from "express";
import HomeController from "./controllers/HomeController";
import BookController from "./controllers/BookController";
const router = Router();

router.get("/", HomeController.index);
router.get("/books", BookController.findAll);

export default router;