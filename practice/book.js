// practice/books.js — Books API exercise
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Things Fall Apart", author: "Chinua Achebe" },
  { id: 2, title: "Homegoing", author: "Yaa Gyasi" },
  { id: 3, title: "Arrow of God", author: "Chinua Achebe" },
];
let nextId = 4;

// GET /books — return all books
// CHALLENGE: GET /books?author=achebe returns only matching books
app.get("/books", (req, res) => {
  // TODO
  res.status(501).json({ error: "Not built yet: GET /books" });
});

// GET /books/:id — return one book, or 404
app.get("/books/:id", (req, res) => {
  // TODO
  res.status(501).json({ error: "Not built yet: GET /books/:id" });
});

// POST /books — add a book. title and author are required (400 if missing)
app.post("/books", (req, res) => {
  // TODO
  res.status(501).json({ error: "Not built yet: POST /books" });
});

app.listen(PORT, (error) => {
  if (error) {
    console.error("Could not start the server:", error.message);
    return;
  }
  console.log(`Server running at http://localhost:${PORT}`);
});