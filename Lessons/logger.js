import express from "express";

const app = express()
const PORT = 3000;

// MIDDLEWARE: a function with (req, res, next)
// ✎ A middleware function takes three parameters: req , res and next .
 function logger(req, res, next) {
// ✎ Print the method and URL of every request, e.g. GET /notes .

const time = new Date().toISOString() 
console.log(`[${time}] ${req.method} ${req.url}`);
// ✎ Very important: pass the request on. Without this, the request never reaches a route.
  next(); // pass the request on to the next step
  
 }
 
// Run the logger on EVERY request

// app.use(logger) runs it on every request, for every route below it.
app.use(logger);

//  Normal routes, exactly like last week. They don't log anything themselves.
 app.get("/", (req, res) => {

res.send("Look at your terminal: the logger printed this request.");
 });
 
 app.get("/notes", (req, res) => {
  
res.json([{ id: 1, text: "Buy groceries" }]);
 });

 app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
});