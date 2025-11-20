
import './App.css';
import { useState } from 'react';


function App() {
 const[datali,setdatli]=useState('')
 const gvalue=(event)=>{
  console.log(event.target.value)
 }

  return (
    <div id='ma'>
      <h1 id='h'>simple interest calculater</h1>
      <div id='mi'>
        <h1 id='v'> parthiv kumsart </h1>
        <input type="numder"  id="p" placeholder='enter your principle amount ' onChange={gvalue}   /> <br /> 
        <input type="number"  id="r" placeholder='rate of interset ' /><br />
        <input type="number" name="" id="t" placeholder='duration' /> <br />
<button id='s' >sumbit</button>
      </div>
    </div>
      
       
        
   
        );
}

export default App;
