import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filecomp from './Filecomp'
import axios from 'axios'

function App() {
  const [filedata , setfiledata] = useState([])
  const getDataFromServer = async () =>{
    try {
      const res= await axios.get('http://localhost:8080/api/file/get')
      
      setfiledata(res.data)
    } catch (error) {
      console.log("Error fetching data from server:", error);
      
    }
  }

  useEffect(()=>{
    getDataFromServer()
  },[])
  return (
    <>
      <Filecomp getDataFromServer={getDataFromServer} />
      <hr />
      {/* files show here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {filedata.map((el) => (
          <div key={el._id} className="border p-2 rounded shadow">
            <img src={`http://localhost:8080/${el.filename}`} alt="" 
            height={400} 
            className="w-full h-64 object-cover rounded"/>
          </div>
        ))}
      </div>
     
    </>
  )
}

export default App
