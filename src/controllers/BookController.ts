import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRespository";

class BookController {
  private bookRepository = new BookRepository();

  findAll = async (req: Request, res: Response) => {
    const books = await this.bookRepository.findAll();
    res.json(books);
  }
}

export default new BookController();
