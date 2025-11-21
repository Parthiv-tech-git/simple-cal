import React from 'react';
import './App.css';



function App() {

 const gvalue=(event)=>{
  console.log(event.target.value)

}
  
  const re=()=>{
if(gvalue ==""){
    alert("fill the all blanks")

  }
  else{
    alert('sucessfull you goog data')
  }
  }
 

  return (
    <div id='ma'>
      <h1 id='h'>simple interest calculater</h1>
      <div id='mi'>
        <h1 id='v'> parthiv kumsart </h1>
        <input type="numder"  id="p" placeholder='enter your principle amount ' onChange={gvalue}    /> <br /> 
        <input type="number"  id="r" placeholder='rate of interset '  onChange={gvalue}/><br />
        <input type="number" name="" id="t" placeholder='duration' onChange={gvalue} /> <br />
<button id='s' onClick={re} >sumbit</button>
      </div>
    </div>
      
       
        
   
        );
}

export default App;
