const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        const dbUrl = await mongoose.connect('mongodb://127.0.0.1:27017/fileupload')
        console.log("connected to database");
        
    } catch (error) {
        console.error('Error connecting to the database:', error);
       
    }
}


//schema

const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    }
})

//model

const File = mongoose.model('File', fileSchema)
module.exports = { connectDb,  File }