import React,  { useState } from 'react';

function App(){
  //       value  function
  const [activated, setActivated] = (useState(false))
  const buttonText = activated ? 'Activate' : 'Inactive';

  // const onClick = () => setActivated(!activated)
  function onClick() {
    setActivated(!activated);
  }

  return(
    <button onClick={onClick}>
      { buttonText }
    </button>
  )
}

export default App;