const mongoose =require ('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true},
    age:{
        type:Number},
    post:{ 
        type:String,
       },
    departement:{
        type:String}
})
const users = mongoose.model('users',userSchema)
module.exports=users;