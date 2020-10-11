import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [selectFile,setSelectFile] = useState('');
  const [size,setSize] = useState(0);
  const [sha1,setSha1] = useState('');
  const onClickHandler = async () => {
         const data = new FormData()
         data.append('file', selectFile)
         console.log(data)
        const result = await axios.post("http://localhost:4000/upload", data)
       
        setSize(result.data.fileSize);
        setSha1(result.data.sha1_format);
           
     }

  return (
    <div className="app">
      <p class="form-group files">
        <label>Upload Your File </label>
  {size > 0 ? <p>Your file size is ${size} and sha1 is ${sha1}</p>:null}
        <input type="file" name="file" onChange={(e) => setSelectFile(e.target.files[0])} />
      </p>
    
      <button
        type="button"
        class="btn btn-success btn-block"
        onClick={onClickHandler}
      >
        Upload
      </button>
    </div>
  );
}

export default App;


