import React,  { useState, useEffect } from 'react';
/** 
The use effect hook accepts a function as an argument.
This function is what we call the effect or the side effect.
So what does that term mean.
Well an effect is just a sequence of one or more steps.
It's a procedure it's a routine that you want the component to execute every time the component renders
or re renders.
If we think back to class based React Components they use effect fact hook acts like a combination of
the component did mount component did update and component will unbound lifecycle methods.
You can think of it this way they use effect fact hook runs the function i.e. the effect that we pass
to it.
Number one right after the component mounts.
Number two right after the component updates or re renders.
For example when it's state or props change and number three.
Right as the component is about to amount or right as it is about to be removed from the dom.
*/
  function App() {
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count - 1)

    // componentWillUpdate - after render
    useEffect(() => {
      console.log(`I'm inside the useEffect function. The current count is ${count}.`)
    })

    return (
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>{count}</h1>
      </div>
    )
  }

export default App;