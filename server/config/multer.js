//multer--->package for handling multipart/form-data, which is used for uploading files(sometime configuration is required)
const multer = require('multer');

// Set up storage engine
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file);
        
        cb(null,'uploads') // specify the directory to save uploaded files
    },
    filename:(req,file,cb)=>{ 
       const uniqueSuffix =Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
       cb(null,uniqueSuffix) // use the original file name

    }

})

const upload = multer({storage})
module.exports = upload;
