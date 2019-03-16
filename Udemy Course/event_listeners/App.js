import React,  { useState, useEffect } from 'react';

  function App() {
    return(
      <h1>Hello events</h1>
    )
  }

export default App;

/*
Addevent Listener
  const handleClick = (event) => {
    const { clientX, clientY } = event;
    console.log(`Mouse is at ${clientX}, ${clientY}`);
  }

  window.addEventListener('click', handleClick)

  ---------------------------------
  Remove event listener
  window.removeEventListener('click', handleClick )

*/