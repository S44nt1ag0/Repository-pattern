import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRespository";

class BookController {
  private bookRepository = new BookRepository();

  findAll = async (req: Request, res: Response) => {
    const books = await this.bookRepository.findAll();
    res.json(books);
  };

  addBook = async (req: Request, res: Response) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.price) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const book = await this.bookRepository.create(req.body);
      res.json(book);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  updateBook = async (req: Request, res: Response) => {

    if(req.body.title && await this.bookRepository.findByTitle(req.body.title)) {
      return res.status(400).json({ error: "Book already exists" });
    }

    const book = await this.bookRepository.update(req.params.id, req.body);
    res.json(book);
  };

  deleteBook = async (req: Request, res: Response) => {
    try{
      const book = await this.bookRepository.delete(req.params.id);
      res.json({success: book});
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}

export default new BookController();
