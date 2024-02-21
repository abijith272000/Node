const express=require('express')
const app=express()


app.post('/login',(req,res)=>{
    res.json({status:'login'})

})
app.get('/register',(req,res)=>{
    res.send('register')

})

app.listen(4000)