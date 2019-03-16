import React,  { useState } from 'react';

function useInput(){
  const [value, setValue] = useState('')

  function onChange(event){
    setValue(event.target.value);
  }


  return {
    value,
    onChange
  }
}

function App(){
  // const{value: name, onChange: handleNameChange } = useInput()
  // const{value: surname, onChange: handleSurnameChange } = useInput()
  // const{value: age, onChange: handleAgeChange } = useInput()

  return(
    <form>
      <input 
        type="text"
        placeholder="Name"
        // value={name}
        // onChange={handleNameChange}
        { ...useInput() }
      />
      <input 
        type="text"
        placeholder="Surname"
        // value={surname}
        // onChange={handleSurnameChange}
        { ...useInput() }
      />
      <input 
        type="number"
        placeholder="Age"
        // value={age}
        // onChange={handleAgeChange}
        { ...useInput() }
      />
    </form>
  )
}

export default App;