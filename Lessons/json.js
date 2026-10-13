import express from "express";

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Try visiting /users, /about or /menu");
});
//  A new path: GET /users .
 app.get("/users", (req, res) => {

// res.json() turns your JavaScript array into JSON text and tells the client “this is JSON”.
// ✎ You give it normal JavaScript; Express does the converting.
  
res.json([
{ id: 1, name: "Ama" },
{ id: 2, name: "Kojo" },
]);
 });
 
// ✎ Objects work too: any array or object.
 app.get("/about", (req, res) => {
 
res.json({ school: "Codetrain Africa", course: "Node.js & Express", week: 1 });
 });

 app.get("/menu", (req, res) => {
    res.json ([{"id":1, "name":"Waakye","price":25},{"id":2,"name":"Jollof","price":40},{"id":3,"name":"Banku &Tilapia","price":60}])
 });

 app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
});