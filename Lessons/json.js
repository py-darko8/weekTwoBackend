import express from "express";

//SERVER
const app = express();

//door port
const PORT = 3000;

//ROUTE
app.get("/", (req,res)=>{
    res.send("Try visiting /users or /about")
})
//  A new path: GET /users .
 app.get("/users", (req, res) => {
    res.json([
        {name:"Kofi", id:1},
        {name:"Ama",id:2}
    ])

 });
 
// ✎ Objects work too: any array or object.
 app.get("/about",(req,res)=>{
    res.json({school:"Codetrain Africa", course:"Node.js & Express", week:1})
 })

 app.get("/menu",(req,res)=>{
    res.json(
        [{id:1,name:"Waakye",price:50},{"id":2,"name":"Jollof","price":40},{"id":3,"name":"Banku & Tilapia","price":60}]
    )
 })

app.listen(PORT,(error)=>{
    if(error){
        console.error("Could not start the server", error.message)
        return
    }
    console.log(`Server running at https://localhost:${PORT}`)
})