// practice/movies.js — Movie Ratings API challenge
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let movies = [
  { id: 1, title: "The Lion King", ratings: [5, 4] },
  { id: 2, title: "Black Panther", ratings: [] },
];
let nextId = 3;

// GET /movies — all movies
// GET /movies/:id — one movie, 404 if missing
// POST /movies { "title" } — create, 400 if title missing
// POST /movies/:id/rate { "rating": 4 } — 404 if no movie, 400 unless rating is a whole number 1–5
// BONUS: include an "average" using .reduce()

app.listen(PORT, (error) => {
  if (error) {
    console.error("Could not start the server:", error.message);
    return;
  }
  console.log(`Server running at http://localhost:${PORT}`);
});