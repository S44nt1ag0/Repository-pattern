import { IBook } from "../entities/Book";

export interface IBookRepository {
  findById(id: string): Promise<IBook | null>;
  findAll(): Promise<IBook[]>;
  create(user: IBook): Promise<IBook>;
  update(id: string, user: IBook): Promise<IBook | null>;
  delete(id: string): Promise<boolean>;
}
