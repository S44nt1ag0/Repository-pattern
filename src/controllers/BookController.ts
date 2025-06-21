import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRespository";

class BookController {
  private bookRepository = new BookRepository();

  findAll = async (req: Request, res: Response) => {
    const books = await this.bookRepository.findAll();
    res.json(books);
  }

  addBook = async (req: Request, res: Response) => {
    const book = await this.bookRepository.create(req.body);
    res.json(book);
  }

}

export default new BookController();
