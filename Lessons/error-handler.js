import express from "express";

const app = express();
const PORT = 3000;

//✎ The handler now also receives next .
 app.get("/notes/:id", (req, res, next) => {
  
const note = notes.find((n) => n.id === Number(req.params.id));
  
if (!note) {
//✎ Make a real Error object with a message…
    
const error = new Error("Note not found");
//✎ …and attach the status code we want  
error.status = 404;
}
next(error) //skips every normal route and jumps straight to the error handler.
return next(error); // jump straight to the error handler
res.json(note);
});

 // A route with a bug in it, to see what happens when code crashes
//✎ A route with a bug on purpose: user is undefined , so line 27 crashes.
 app.get("/broken", (req, res) => {
  
  
const user = undefined;
res.json({ name: user.name }); // TypeError: can't read 'name' of 
undefined
 });
 
 // ERROR HANDLER: 4 parameters, and always registered LAST
 app.use((err, req, res, next) => {  
//✎ Four parameters: err comes first. That's how Express knows this is an error handler.
//✎ Use the error's own status if it has one; otherwise it's a bug, so 500.
const status = err.status || 500;
console.error(`[${status}] ${err.message}`);
//✎ Log it for you (line 33), then send a clean JSON error to the client.
res.status(status).json({ error: err.message });
});

app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
});
