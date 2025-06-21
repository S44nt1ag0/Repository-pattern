# 📚 API de Gerenciamento de Livros

Uma API RESTful para gerenciamento de livros desenvolvida em **Node.js** e **TypeScript**, implementando o padrão Repository para uma arquitetura limpa e escalável.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido seguindo o padrão Repository, que separa a lógica de acesso a dados do resto da aplicação, proporcionando:

- **Separação de responsabilidades** clara
- **Código mais testável** e manutenível
- **Flexibilidade** para trocar implementações de banco de dados
- **Arquitetura limpa** e organizada

> 💡 **Baseado no artigo**: [Implementing Repository Pattern in Node.js and TypeScript](https://4markdown.com/understanding-repository-pattern-in-nodejs-and-typescript/)

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd repository-project

# Instale as dependências
npm install

# Execute as migrações do banco
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

## 📡 Endpoints da API

### 📖 Listar Todos os Livros
```http
GET /books
```

**Resposta:**
```json
[
  {
    "id": "1",
    "title": "O Senhor dos Anéis",
    "author": "J.R.R. Tolkien",
    "price": 49.90
  }
]
```

### ➕ Criar Novo Livro
```http
POST /books
```

**Body:**
```json
{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "price": 49.90
}
```

**Resposta de Sucesso:**
```json
{
  "id": "1",
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "price": 49.90
}
```

**Resposta de Erro:**
```json
{
  "error": "Book already exists"
}
```

### ✏️ Atualizar Livro
```http
PUT /books/:id
```

**Body:**
```json
{
  "title": "O Senhor dos Anéis - Edição Especial",
  "author": "J.R.R. Tolkien",
  "price": 59.90
}
```

### 🗑️ Deletar Livro
```http
DELETE /books/:id
```

**Resposta:**
```json
{
  "success": true
}
```

## 🏗️ Estrutura do Projeto

```
src/
├── controllers/          # Controladores da aplicação
│   └── BookController.ts
├── entities/            # Entidades do domínio
│   └── Book.ts
├── interface/           # Interfaces do padrão Repository
│   └── IBookRepository.ts
├── repositories/        # Implementações dos repositories
│   └── BookRepository.ts
├── database/           # Configuração do banco de dados
│   └── database.ts
└── app.ts              # Arquivo principal da aplicação
```

## 🔧 Padrão Repository Implementado

O projeto segue fielmente o padrão Repository conforme descrito no artigo de referência:

1. **Interface Repository** (`IBookRepository.ts`) - Define os contratos para operações CRUD
2. **Implementação Repository** (`BookRepository.ts`) - Implementa a lógica de acesso a dados
3. **Separação de Responsabilidades** - Controllers focam na lógica de negócio, repositories no acesso a dados

## 📝 Exemplo de Uso

```typescript
// O controller usa o repository sem se preocupar com detalhes do banco
class BookController {
  private bookRepository = new BookRepository();

  async findAll(req: Request, res: Response) {
    const books = await this.bookRepository.findAll();
    res.json(books);
  }
}
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ seguindo as melhores práticas de arquitetura de software** 