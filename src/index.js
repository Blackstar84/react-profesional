import React from "react";
import { render } from "react-dom";

/* function SaludarEnIdiomas({idioma}){
  //if (idioma === 'es') return <span>Hola</span>;
  //if (idioma === 'en') return <span>Hello</span>;
  if (idioma === 'en') {
    return <span>Hello</span>;
  } else {
    return <span>Hola</span>;
  }
} */

const Saludo = ()=>{
  const nombre = 'Uriel';
  const idioma = 'en';
  //return <p>Hola { 2 + 3} </p>
  //return <p>Hola {nombre}</p>

  //return <p>Hola { `${nombre}` }</p>
  //return <p><SaludarEnIdiomas idioma={'en'}/> { `${nombre}` }</p>
  
  return (
  <div>
    {
      idioma === "en" ? <p>Hello {nombre} </p> : <p>Hola</p>
    }
  </div>
  )
}

const App = () => {
  return <h1><Saludo/></h1>

} 

render (<App/>, document.getElementById('root'));