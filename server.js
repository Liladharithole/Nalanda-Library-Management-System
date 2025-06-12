import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";

// config dotenv
dotenv.config();
// connect to database
connectDB();
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Nalanda Library Management System");
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api", borrowRoutes);
app.use("/api/reports", reportRoutes);

// GraphQL endpoint
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
