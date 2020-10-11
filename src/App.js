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
// class App extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         selectFile: null
//       }

//   }
//   onChangeHandler=event=>{
//     this.setState({
//       selectFile: event.target.files[0],
//       loaded: 0,
//     })
//   }

//   onClickHandler = () => {
//     const data = new FormData()
//     data.append('file', this.state.selectFile)
//     console.log(data)
//     axios.post("http://localhost:4000/upload", data, {
//       })
//       .then(res => {
//        // console.log(res.statusText)
//       })
// }

//   render(){
//     return (
//       <React.Fragment>
//             <div class="row">

//             <p class="form-group files">
//               <label>Upload Your File </label>
//               <input type="file" name="file" onChange={this.onChangeHandler}/>
//             </p>
//             </div>
//             <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
//             </React.Fragment>

// );
//   }

// }

