import express from "express";

const app = express();
const PORT = 3000;

// Only lets the request through if it has an Authorization header
//✎ Same shape as the logger: (req, res, next) .
function requireAuth(req, res, next) {
//✎ Is there an Authorization header in the request?
if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not authenticated" })
}

if(req.header.authorization !== secret-token){
    res.status(403).json({error: "Wrong token"})
}
//✎ No → stop here with 401 Not authenticated. return makes sure next() doesn't also run.
  next()
}

 // Public: anyone can see this
//✎ A public route: no middleware, anyone can see it.
 app.get("/notes", (req, res) => {
  
res.json([{ id: 1, text: "Buy groceries" }]);
 });
 
 // Private: requireAuth runs first, only for this route
//✎ Put the middleware between the path and the handler. It only runs for this route.
 app.get("/notes/private", requireAuth, (req, res) => {
  
res.json({ message: "Secret notes" });
 });

  
    
  
app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }

    console.log(`Server running at http://localhost:${PORT}`);
});