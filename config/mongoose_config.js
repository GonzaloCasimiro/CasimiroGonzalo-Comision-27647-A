
const mongoose = require('mongoose');
const MONGO_DB_URI=process.env.MONGO_DB_URI;
const conectar_mongo=async()=>{
    try{
        await mongoose.connect(MONGO_DB_URI)
        console.log('exito')
    }
    catch(error){
        console.log('Error',error);
    }
}
module.exports=conectar_mongo;
