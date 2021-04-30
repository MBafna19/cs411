import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
function App() {
 const [studentID, setNetID] = useState('');
 const [P_ID, setpid] = useState('');
 const insertPursuing = () => { 
 Axios.post('http://localhost:3002/api/insert', {
 NetID: studentID,
 P_ID: P_ID
 }).then(() => {
 alert('success insert')
 })
 
 };


 const searchPursuing = () => { 
  // Axios.post('http://localhost:3002/api/search', {
  // NetID: studentID,
  // }).then((result) => {
  // let str = 'programs: '
  // for(let i = 0; i < result.data.length; i++) {
  //   str = str + result.data[i].P_ID
  //   if(i != result.data.length - 1) {
  //     str = str + ", "
  //   }
  // }
  // alert(str)
  alert(studentID)
  // })
  
  };


  const deletePursuing = () => { 
    Axios.post('http://localhost:3002/api/delete', {
    NetID: studentID,
    P_ID: P_ID
    }).then(() => {
    alert('success delete')
    })
    
    };

  const updatePursuing = () => { 
    Axios.post('http://localhost:3002/api/update', {
    NetID: studentID,
    P_ID: P_ID
    }).then(() => {
    alert('success update')
    })
      
   };

   const advancedPursuing = () => { 
    Axios.post('http://localhost:3002/api/advanced', {
    }).then((result) => {
      let str = ''
      for(let i = 0; i < result.data.length; i++) {
        str =  str + result.data[i].NetID + " : " + result.data[i].creditHours + ' credit hours\n'
      }
      alert(str)
    })
      
   };
 return (
 <div className="App">
 <h1> CRUD APPLICATIONS</h1>
 <div className="form">
 <h1> Insert</h1>
 <label> NetID:</label>
 <input type="text" name="NetID" onChange={(e) => {
 setNetID(e.target.value)
 } }/>
 <label> Program ID:</label>
 <input type="text" name="P_ID" onChange={(e) => {
 setpid(e.target.value)
 }}/>
 
 <button onClick={insertPursuing}> Submit</button>
 </div>

 <div className="form">
 <h1> Delete</h1>
 <label> NetID:</label>
 <input type="text" name="NetID" onChange={(e) => {
 setNetID(e.target.value)
 } }/>
 <label> Program ID:</label>
 <input type="text" name="P_ID" onChange={(e) => {
 setpid(e.target.value)
 }}/>
 
 <button onClick={deletePursuing}> Submit</button>
 </div>

 <div className="form">
 <h1> Update</h1>
 <label> Old NetID:</label>
 <input type="text" name="NetID" onChange={(e) => {
 setNetID(e.target.value)
 } }/>
 <label> New NetID:</label>
 <input type="text" name="P_ID" onChange={(e) => {
 setpid(e.target.value)
 }}/>
 
 <button onClick={updatePursuing}> Submit</button>
 </div>

 <div className="form">
 <h1> Search NetID</h1>
 <label> NetID:</label>
 <input type="text" name="NetID" onChange={(e) => {
 setNetID(e.target.value)
 } }/>
 
 <button onClick={searchPursuing}> Submit</button>
 </div>
 
 <div className="form">
 <h1> Advanced Query</h1>
 <button onClick={advancedPursuing}> Submit</button>
 </div>

 </div>
 );
}
export default App;
