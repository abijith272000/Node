const express=require('express')
const app=express()
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Hospital')
  .then(() => console.log('Connected!'));

  const db=mongoose.connection

  app.post('/insert',async(req,res)=>{
    let response=await db.collection('doctor').insertOne({name:'abc',department:'cardiology'})
    console.log(response);
    res.json(response)
})

app.get('/find',async (req,res)=>{
    let response=await db.collection('doctor').find().toArray()
    console.log(response);
    res.json(response)
})

app.put('/update',async(req,res)=>{
    let response=await db.collection('doctor').updateOne({name:"abi"},{$set:{name:"kgh"}})
    console.log(response);
    res.json(response)
})
app.delete('/delete',async(req,res)=>{
    let response=await db.collection('doctor').deleteOne({name:"abi"})
    res.json(response)
})

 app.listen(4000)