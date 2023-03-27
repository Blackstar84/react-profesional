import React, { useEffect, useState } from "react";
import { render } from "react-dom";


const Button = ()=>{
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.log('Me ejecute');
    return ()=>{
      console.log("Adiós");
    }
  },[])
  return(
    <div>
      <p>Presionado: {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Click me!</button>
      <div>
        {showButton && <Button/>}
      </div>
    </div>
  )
  
}

const App = ()=>{
  return <div>
    <Button></Button>
  </div>
}

render (<App/>, document.getElementById('root'));