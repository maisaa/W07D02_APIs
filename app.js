const { json } = require("express");
const express = require("express");
const app = express();
const port = 4000;


app.use(express.json());

const todos = [{ todo: "wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

// get all todos list
app.get("/todos", (req,res)=>{
    res.status(200);
    res.json(todos);
})

//post new todo
app.post("/create/todo", (req,res) =>{
    console.log("req.body.todo",req.body.todo);
    const newTodo = {todo: req.body.todo , isCompleted: req.body.isCompleted};
    todos.push(newTodo)
    res.status(201);
    res.json(newTodo);
});

//put todo
app.put('/update/todo/:name', (req,res)=>{
    let index;
    const todo = req.params.name;
    const found = todos.find((ele,i)=>{
        index = i;
        return ele.todo === todo; 
    })
    if(found){
        // todos[index] = {todo : req.body.todo, isCompleted: req.body.isCompleted };
        todos[index].isCompleted =  req.body.isCompleted ;
        res.status(200);
        res.json(todos[index]);
    } else {
        res.status(404);
        res.json("todo not found");
    }
});

//delete todo
app.delete('/delete/todo/:name', (req,res)=>{
    let index;
    const todo = req.params.name;
    const found = todos.find((ele,i)=>{
        index = i;
        return ele.todo === todo;
    });
    if(found){
        todos.splice(index,1);
        res.status(200);
        res.json(todos);
    } else {
        res.status(404);
        res.json("todo not exist");
    }
} )

//completed todo
app.put('/complete/todo/:name', (req,res)=>{
    let index;
    const todo = req.params.name;
    const found = todos.find((ele,i)=>{
        index = i;
        return ele.todo === todo;
    });
    if(found){
        todos[index].isCompleted = "true";
        res.status(200);
        res.json(todos);
    } else {
        res.status(404);
        res.json("todo not found ")
    }
});

//

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})