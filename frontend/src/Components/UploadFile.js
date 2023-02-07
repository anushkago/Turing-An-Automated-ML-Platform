import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

function UploadFile() {

    const [file, setFile] = useState(null);
    const [user, setUser] = useState("1");
  
    const handleFile = (e) => {
      setFile(e.target.files[0]);
    };

  
    const handleSubmit = async (e) => {
      e.preventDefault();
        
      console.log(file)
      const Data = new FormData();
      Data.append("user", user);
      Data.append("file", file);
  
        
      console.log(Data);
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/uploadData/", Data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFile} /> 
        <Button className = 'btn  btn-block' type="submit" style = {{backgroundColor : 'rgb(53,58,63)'}}>Upload Data <i className="fa-solid fa-upload mx-2"></i></Button>
    </form>
      
    </div>
  )
}

export default UploadFile




