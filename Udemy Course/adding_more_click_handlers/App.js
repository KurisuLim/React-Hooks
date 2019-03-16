import React,  { useState } from 'react';
/* 
Coding Challenge
1. Add another button with Text Decrease and should decrease the count by 1
2. Add another button with Text Reset and should reset the count to 0
*/
function App(){
  const [count, setCount] = useState(0)
  // const handleClick = () => setCount(count + 1);
  const handleClick = () => setCount((prevCount) => {
    return prevCount + 1;
  });
  const handleDecrease = () => setCount(count -1 )
  const handleReset= () => setCount(0)
  return (
      <div>
        <button onClick={handleClick}>Increase</button>
        <br/>
          <button onClick={handleDecrease}>Decrease</button>
        <br/>
          <button onClick={handleReset}>Reset</button>
        <br/>
        <h1>{count}</h1>
      </div>  
  )
}

export default App;