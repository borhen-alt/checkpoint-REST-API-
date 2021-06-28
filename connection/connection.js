const mongoose = require('mongoose')
const connection = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://borhen1993:borhen2103@cluster0.83xcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true})
        console.log('connected')
         }
         catch(err) {
            console.log(err)
         }
}
module.exports =connection;