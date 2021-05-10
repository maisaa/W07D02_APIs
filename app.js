const express = require("express");
const app = express();
const port = 4000;


const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

// get all todos list
app.get("/todos", (req,res)=>{
    res.status(200);
    res.json(todos);
})

//post new todo
app.post("/create/todo",(req,res)=>{
    
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})