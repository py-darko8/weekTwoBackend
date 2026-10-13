import express from "express";

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Hello, world! My first Express server is alive.!");
});

app.get("/me", (req, res) => {
    res.send("<h1>HOME PAGE</h1>,<h2>Hi, I am Papa Yaw Nyantakyi-Darko and I'm learning Express!</h2>");
});


app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
});
