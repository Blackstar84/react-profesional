import React, { useState, useEffect } from "react";
import { render } from "react-dom";

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]); // Solo se ejecuta si count cambió entre un render y otro

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



const App = ()=>{
  return <div>
    <Example />
  </div>
}

render (<App/>, document.getElementById('root'));