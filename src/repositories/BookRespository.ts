import { IBookRepository } from "../interface/IBookRespository";
import { IBook } from "../entities/Book";
import prisma from "../database/database";

export class BookRepository implements IBookRepository {
  async findById(id: string): Promise<IBook | null> {
    const book = await prisma.book.findUnique({
      where: { id },
    });
    return book;
  }

  async findAll(): Promise<IBook[]> {
    const books = await prisma.book.findMany();
    return books;
  }

  async findByTitle(title: string): Promise<IBook | null> {
    const book = await prisma.book.findFirst({
      where: { title },
    });
    return book;
  }

  async create(book: IBook): Promise<IBook> {
    if (await this.findByTitle(book.title)) {
      throw new Error("Book already exists");
    }

    const newBook = await prisma.book.create({
      data: book,
    });
    return newBook;
  }

  async update(id: string, book: IBook): Promise<IBook | null> {
    const updatedBook = await prisma.book.update({
      where: { id },
      data: book,
    });
    return updatedBook;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await prisma.book.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
}
