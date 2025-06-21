import { Router } from "express";
import HomeController from "./controllers/HomeController";
import BookController from "./controllers/BookController";
const router = Router();

router.get("/", HomeController.index);
router.get("/v1/books", BookController.findAll);
router.post("/v1/books", BookController.addBook);
router.put("/v1/books/:id", BookController.updateBook);
router.delete("/v1/books/:id", BookController.deleteBook);

export default router;
