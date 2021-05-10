const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const users = [{ name: "sarah", age: 30 },
{ name: "John", age: 25 },
{ name: "Jane", age: 20 },
{ name: "Mark", age: 19 }];


//get all
app.get("/users", (req,res)=>{
    res.status(200);
    res.json(users);
});


//get one user
app.get("/user/:name", (req,res)=>{

    const userName = req.params.name
    const found = users.find((ele)=>{
        return ele.name === userName;
    });
    if(found){
        res.status(200);
        res.json(found.name);
    } else {
        res.status(404);
        res.json("user is not found");
    }

});

//post user
app.post('/create/user',(req,res)=>{
    const newUser = { name:req.body.name , age: req.body.age };

    users.push(newUser);
    res.status(200);
    res.json(newUser);
});

//get first-user



app.listen(port, () => {
    console.log(`server running on port ${port}`);
})