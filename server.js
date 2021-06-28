const express =require ('express');
const dotenv = require('dotenv');
const path =require('path')
const bodyParser = require('body-parser')
const app = express();

//files require
const connectioDB =require('./connection/connection')
const PostUser =require('./Routes/Route')




dotenv.config({path:'.env'})
const PORT = process.env.PORT

//mongoDB connection 
connectioDB()
//middlaware
app.use(bodyParser.json());

//route
app.get('/',(req,res) =>{
    res.send('we are in home')
})

app.use('/api/user',PostUser)




app.listen(PORT,()=>{console.log(
    `connected on ${PORT}`)})