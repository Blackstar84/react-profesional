import React, { useState } from "react";
import { render } from "react-dom";

const Button = ()=>{
  const [counter, setCounter] = useState(0);
  return(
    <div>
      <p>Presionado: {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Click me!</button>
    </div>
  )
  
}

const App = ()=>{
  return <div>
    <Button></Button>
  </div>
}

render (<App/>, document.getElementById('root'));