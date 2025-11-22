import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
 const [principal,setPrincipal]=useState('');
 const[rate,setRate]=useState('');
 const[time,setTime]=useState(''); 
    const [simpleInterest, setSimpleInterest] = useState(null);

  const calculate =()=>{
    const p = parseInt(principal);
    const r = parseInt(rate);
    const t = parseInt(time);
   if(!isNaN(p)&&!isNaN(r)&&!isNaN(t)&& p>=0 && r>=0 && t>=0 ) {
    
    const result =(p*r*t)/100;
    setSimpleInterest(calculate); 
   }
   else{
     alert('Please enter valid positive numbers for Principal, Rate, and Time.');
      setSimpleInterest(null);
   }
  }
 

  return (
    <div id='ma'>
      <h1 id='h'>simple interest calculater</h1>
      <div id='mi'>
        <h1 id='v'> parthiv kumsart </h1>
        <input type="numder"  value={prinicpal} id="p" placeholder='enter your principle amount ' onChange= {(e)=>{setPrincipal(e.target.value)}    /> <br /> 
        <input type="number"  value={rate} id="r" placeholder='rate of interset '  onChange={(e)=>{setRate(e.target.value)}/> <br />
        <input type="number" name="" id="t" value={time} placeholder='duration' onChange={(e)=>{setTime(e.target.value)} /> <br />
<button id='s' onClick={calculate} >sumbit</button>
      </div>
    </div>
      
       
        
   
        );
}

export default App;
