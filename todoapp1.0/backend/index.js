const express=require("express");
const { createTodo, updateTodo } = require("./type");//object destructuring
const { Todo } = require("./db");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

app.post("/todo",async function(req,res){
    // res.send("this is fine");
const createPayload=req.body;
const parsePayload=createTodo.safeParse(createPayload);
if(!parsePayload.success){
    res.status(411).json(
        {
            msg:"you entered wrong input"
        }
    )
    return ;
}
//now put data into the mongo db
//making it async if anyhow db down to handle that
await Todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
})
res.json({
    msg:"to do created"
})
})
//here we know our db can be on us server so we have await this to avoid 
//condition of server down
app.get("/todos",async function(req,res){
    // res.send("server is  i am in get ");
  const todos=await Todo.find({});
    res.json({
        todos
    })
})


app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you enterd the wronng input"
        })
        return;
    }
    //
    await Todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"mark as completed"
    })

})

app.listen(3009 ,function(){
console.log("server is started")
})