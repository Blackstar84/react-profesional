import React, { Component } from "react";
import { render } from "react-dom";

/* function App(){
  return <h1>Hola Mundo</h1>
} */

/* const App = ()=>{
  return <h1>Hola Mundo</h1>
} */

/* class App extends Component{
  render(){
    return <h1>Hola Mundo</h1>
  }
} */
 

//const App = () => <h1>Hola Mundo</h1>

/* const Saludar = (props)=>{
  return <p>Hola {props.nombre}</p>
} */

/* const Saludar = ({nombre})=>{
  return <p>Hola {nombre}</p>
} */

const Saludar = ({nombre, idioma='en'})=>{
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return <p>{saludo} {nombre}</p>
}

Saludar.defaultProps = {
  idioma: 'en'
}

const App = ()=>{
  return <div>
    <Saludar nombre='Uriel' idioma='en'></Saludar>
  </div>
}

render (<App/>, document.getElementById('root'));