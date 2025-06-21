import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRespository";

class BookController {
  private bookRepository = new BookRepository();

  findAll = async (req: Request, res: Response) => {
    const books = await this.bookRepository.findAll();
    res.json(books);
  }

  addBook = async (req: Request, res: Response) => {

    if(!req.body.title || !req.body.author || !req.body.price) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    
    const book = await this.bookRepository.create(req.body);
    res.json(book);
  }

}

export default new BookController();
