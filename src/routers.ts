import { Router } from "express";
import HomeController from "./controllers/HomeController";
import BookController from "./controllers/BookController";
const router = Router();

router.get("/", HomeController.index);
router.get("/v1/books", BookController.findAll);
router.post("/v1/books", BookController.addBook);

export default router;