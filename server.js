// server.js — the ENTRY POINT of our Notes API (a complete CRUD API, no database yet)
import express from "express";

const app = express();
const PORT = 3000;

// Middleware: turn incoming JSON into req.body
app.use(express.json());

// Our "database" for this week: an array in memory.
// It resets every time the server restarts.
let notes = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Finish assignment" },
];
let nextId = 3; // the id the next new note will get

// A friendly home page, so the browser shows something
app.get("/", (req, res) => {
  res.json({ message: "Notes API is running. Try GET /notes" });
});

// READ ALL — GET /notes (optional search: GET /notes?search=buy)
app.get("/notes", (req, res) => {
  const { search } = req.query;

  if (search) {
    const matches = notes.filter((note) =>
      note.text.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(matches);
  }

  res.json(notes);
});

// READ ONE — GET /notes/:id
app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.json(note);
});

// CREATE — POST /notes body: { "text": "..." }
app.post("/notes", (req, res) => {
  const { text } = req.body || {};

  if (typeof text !== "string" || text.trim() === "") {
    return res.status(400).json({ error: "Text is required" });
  }

  const newNote = { id: nextId, text: text.trim() };
  nextId = nextId + 1;
  notes.push(newNote);

  res.status(201).json(newNote);
});

// UPDATE — PUT /notes/:id body: { "text": "..." }
app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  const { text } = req.body || {};

  if (typeof text !== "string" || text.trim() === "") {
    return res.status(400).json({ error: "Text is required" });
  }

  note.text = text.trim();
  res.json(note);
});

// DELETE — DELETE /notes/:id
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = notes.some((n) => n.id === id);

  if (!exists) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes = notes.filter((n) => n.id !== id);
  res.status(204).send();
});

app.listen(PORT, (error) => {
  if (error) {
    console.error("Could not start the server:", error.message);
    return;
  }
  console.log(`Server running at http://localhost:${PORT}`);
});