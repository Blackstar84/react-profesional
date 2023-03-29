import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const Form = ()=>{
  const [title, setTitle]=useState("");
  const [body, setBody]=useState("");

  const sendForm = (ev)=>{
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: title,
    body: body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{

    setTitle("");
    setBody("");
    console.log(json);
  });
  }

  return(
    <form onSubmit={(ev)=>sendForm(ev)}>
      <div>
        <label htmFor="title">Título</label>
        <input type="text" id="title" value={title} onChange={(ev)=>setTitle(ev.target.value)} />
      </div>
      <div>
        <label htmFor="body">Publicación</label>
        <textarea id="body" value={body} onChange={(ev)=>setBody(ev.target.value)}></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  )
}


const App = ()=>{
  return <div>
    <Form/>
  </div>
}

render (<App/>, document.getElementById('root'));