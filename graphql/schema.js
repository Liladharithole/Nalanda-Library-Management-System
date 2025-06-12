import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} from "graphql";

import Book from "../models/Book.js";
import User from "../models/User.js";
import BorrowRecord from "../models/BorrowRecord.js";

// 📚 Book Type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    ISBN: { type: GraphQLString },
    genre: { type: GraphQLString },
    publicationDate: { type: GraphQLString },
    copies: { type: GraphQLInt },
  }),
});

// 👤 User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
  }),
});

// 🔁 Borrow Type
const BorrowType = new GraphQLObjectType({
  name: "Borrow",
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.user);
      },
    },
    book: {
      type: BookType,
      resolve(parent) {
        return Book.findById(parent.book);
      },
    },
    borrowDate: { type: GraphQLString },
    returnDate: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Get all books
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book.find();
      },
    },

    // Get all users (admin usage)
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find();
      },
    },

    // Get borrow history by userId
    borrowHistory: {
      type: new GraphQLList(BorrowType),
      args: { userId: { type: GraphQLID } },
      resolve(_, args) {
        return BorrowRecord.find({ user: args.userId });
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
