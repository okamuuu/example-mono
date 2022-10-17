import { createServer } from "@graphql-yoga/node";
import books from "./books.json";

export type Book = {
  isbn: string;
  title: string;
  description?: string;
  imgURL?: string;
  updatedAt?: string;
};

const typeDefs = /* GraphQL */ `
  type Query {
    books: [Book!]!
    book(isbn: String!): Book!
  }
  type Book {
    isbn: String
    title: String
    description: String
    imgURL: String
    reservedCount: Int
    updatedAt: String
  }
`;

const resolvers = {
  Query: {
    async books() {
      return books;
    },

    async book(_: any, { isbn }: { isbn: string }) {
      return books.find((x) => x.isbn === isbn);
    },
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: "/api/graphql",
  graphiql: !process.env.PRODUCTION,
});

export default server;
