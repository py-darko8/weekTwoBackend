import express from "express"
const app = express()
const PORT = 4001


//server route
app.get("/users/:id", (req,res)=>{
    // const id = req.params.id
    const id = req.params.id
    res.json({message:`you asked for user ${id}`, type: typeof id})

})

// Query string: /search?q=react&limit=10  →  req.query is { q: 
// app.get("/search", (req, res) => {
//     const { q, limit } = req.query;
//     res.json({ searchTerm: q, limit: limit });
// });

//✎ No : here. Query strings come after a ? and don't change the path.
//  app.get("/greet/:name", (req, res) => {
// const name = req.params.name;
// res.json({ message: `Akwaaba, ${name}!` } );
//  });

//   app.get("/add", (req, res) => {
// const  a  = Number(req.query.a)
// const b = Number(req.query.b)
// res.json({ result: a + b });
//  });
 

 //server listening
 app.listen(PORT, (error)=>{
    if(error){
        console.error("Could not start the server", error.message)
        return
    }
    console.log(`Server running at https://localhost:${PORT}`)

 })
