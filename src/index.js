import React from "react";
import { render } from "react-dom";

const Saludo = ()=>{
  const nombre = 'Uriel';

  //return <p>Hola { 2 + 3} </p>
  //return <p>Hola {nombre}</p>

  return <p>Hola { `${nombre}` }</p>

}

const App = () => {
  return <h1><Saludo/></h1>

} 

render (<App/>, document.getElementById('root'));