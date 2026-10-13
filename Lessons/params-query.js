import express from "express";

const app = express();
const PORT = 3000;

 // Route parameter: /users/5  →  req.params.id is "5"

//:id is a route parameter: a placeholder that matches anything in that spot, like
//edit/:id in React Router.
 app.get("/users/:id", (req, res) => {
//Whatever was in the URL arrives in req.params.id .
 
const id = req.params.id;
// We send back its type too, to prove a point.
  
res.json({ message: `You asked for user ${id}`, type: typeof id 
});
});

// Query string: /search?q=react&limit=10  →  req.query is { q: 
app.get("/search", (req, res) => {
    const { q, limit } = req.query;
    res.json({ searchTerm: q, limit: limit });
});

//✎ No : here. Query strings come after a ? and don't change the path.
 app.get("/greet/:name", (req, res) => {
const name = req.params.name;
res.json({ message: `Akwaaba, ${name}!` } );
 });

  app.get("/add", (req, res) => {
const  a  = Number(req.query.a)
const b = Number(req.query.b)
res.json({ result: a + b });
 });
  app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
});

