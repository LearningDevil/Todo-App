const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors()); 
// cors is being used so when frontend requests for the data it won't give it here without cors, even though it reduces the security of overall code we are using it to test out things for now.

app.post("/todos", async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Please, provide valid input."
        });
        return;
    }
    // put it in db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",async(req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async(req,res)=>{
    const updatePayload = req.body;
    const parseUpdatePayload = updateTodo.safeParse(updatePayload);
    if(!parseUpdatePayload.success){
        res.status(411).json({
            msg: "Please, provide valid input."
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as complete."
    })
})

app.listen(3000);

