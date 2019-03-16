import React,  { Component} from 'react';

function Box(props){
  return(
    <div>
      <h1>This is a stateless function component.</h1>
      <h2>{props.text}</h2>
      <h3>{props.subtitle}</h3>
    </div>
  )
}

function App(){
  return(
    <Box 
    text="Hi, Boris"
    subtitle="I love React!"
    />
  )
}

export default App;