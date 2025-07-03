const express = require('express')
const cors = require('cors')
const upload = require('./config/multer')
const {connectDb, File} = require('./config/db')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('./uploads')) // Serve static files from the 'uploads' directory

app.get('/',(req,res)=>{
    res.send('Hello from server')
})

app.post('/api/file/upload',upload.single("file"), async(req,res)=>{
    console.log(req.file.filename); // Log the uploaded file information; if you dont write this line,
    //  you will not get the file information in the console nd the file will not be uploaded
    //undefined
    try {
        await File.create({ filename: req.file.filename });
        res.send('File uploaded successfully ')
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file');
    }
})

app.get('/api/file/get', async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).send('Error fetching files');
    }
});

app.listen(8080,async ()=>{
    await connectDb()
    console.log('Server is running on port 8080'); 
})