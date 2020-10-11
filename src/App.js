import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [selectFile,setSelectFile] = useState('');
  const onClickHandler = () => {
         const data = new FormData()
         data.append('file', selectFile)
         console.log(data)
         axios.post("http://localhost:4000/upload", data, {
           })
           .then(res => {
           alert("file uploaded successfully");
           })
     }

  return (
    <div className="app">
      <p class="form-group files">
        <label>Upload Your File </label>
     
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


