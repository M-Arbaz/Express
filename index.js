const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const key = "content";
const user={
    name:"arbaz",
    age:23,
    education:"BS 4-year"
}
app.use(express.json());

app.post('/login',(req,res)=>{
    const token = jwt.sign({user},key,)
        res.send({token});
})

app.post('/result',(req,res)=>{
    jwt.verify(req.body.token,key,(err,result)=>{
        if(err){
            res.status(404).send("user not found")
        }else{
            res.send(result);
        }
    }) 
})
app.listen(3000,()=>{
    console.log('running on port 3000')
})