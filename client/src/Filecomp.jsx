
import React, { useState } from 'react'
import axios from 'axios'

const Filecomp = ({getDataFromServer}) => {
    const[file, setFile] = useState(null)

    const handleSubmit = async() =>{
        
        
        try {
            const res = await axios.post('http://localhost:8080/api/file/upload', { file }, {
                headers:{
                    'Content-Type': 'multipart/form-data',
                },
            })
            getDataFromServer(); // Call the function to refresh the file list
            console.log('File uploaded successfully', res.data);
        } catch (error) {
            console.log("Error uploading file:", error);
            
        }
    }
       

  return (
    <div>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Filecomp