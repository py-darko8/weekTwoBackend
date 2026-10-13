
import express from "express";

const app = express();
const PORT = 3000;

// Middleware must come before the routes
app.use(express.json());

const users = [
    { id: 1, name: "Ama" },
    { id: 2, name: "Kojo" },
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log("Received:", newUser);

    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
