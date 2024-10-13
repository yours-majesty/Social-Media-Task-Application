const mongoose = require('mongoose');

const connectDb = async(req,res)=>{

    try{
      await  mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected");
      
    }catch(error){
        console.log("Error connecting to the database");
        res.status(400).json({error:"Error connecting to the database"});
    }

}
module.exports=connectDb;
