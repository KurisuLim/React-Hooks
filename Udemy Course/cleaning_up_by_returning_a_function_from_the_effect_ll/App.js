import React,  { useState, useEffect } from 'react';
  function Counter() {
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count - 1)

    useEffect(() => {
      console.log(`I'm inside the useEffect function. The current count is ${count}.`)

      return () => {
        console.log(`I'm removing anything that was setup above! The last count is ${count}`)
      }
    })
    /** 
      And the question is when exactly does react cleanup and affect.
      And the answer is react performs the cleanup when the component on mounts.
      We just saw that in action we just took a look at that literally in the browser.
      However as we learned earlier effects run for every render and not just once.
      This is why react also cleans up the effects from the previous render before running the effects next
      time.
    */
    return (
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>{count}</h1>
      </div>
    )
  }
  function App() {
    const [visible, setVisible] = useState(false)

    return(
      <div>
        <button onClick={() => setVisible(!visible)}>
          Show/Hide the Counter component
        </button>

        { visible && <Counter /> }
      </div>
    )
  }

export default App;