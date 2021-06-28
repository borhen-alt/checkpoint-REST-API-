const express =require('express');
const router =express.Router();
const Users =require('../models/User')
//RETURN ALL USERS 
router.get('/All',async(req,res)=>{
    try {
        const users = await Users.find();
        res.send(users)

    } catch (error) {
        console.log(err)
  
    }
})

//ADD A NEW USER TO THE DATABASE 

router.post('/Add', async(req,res) =>{
    const users = new Users ({
        name:"dali",
        age:28,
        post:"photographe",
        departement:"desing"
    })
try {
    const result = await users.save();
    res.send(result)
} catch (err) {
    console.log(err)
}


})



router.put('/:id',async(req,res)=>{
    try {
        const user = await Users.updateOne({
            _id:req.params.id},{$set:{age:20}})
            res.send(user)

    } catch (err) {
        console.log(err)

    }
})

//REMOVE A USER BY ID 
router.delete('/:Userid',async(req,res)=>{
  try {
    const user = await  Users.remove({_id:req.params.Userid})
    res.send(user) 
  } catch (err) {
    console.log(err)

  }
})
module.exports=router;