import React,  { useState } from 'react';

function useCounter(startingValue){
  const [count, setCount] = useState(startingValue)
  const increase = () => setCount(count + 1 )
  const decrease= () => setCount(count - 1)

  return {
    count,
    increase,
    decrease,
  }
}

function Display(props){
  const { count, increase, decrease } = useCounter(props.start)

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h1>{count}</h1>
    </div>  
  )
}

function FancyDisplay(props){
  const { count, increase, decrease } = useCounter(props.start)

  return (
    <section>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h2>{count}</h2>
    </section>  
  )
}

function App(){
  return (
    <div>
      <Display start={10} />
      <Display start={20} />
      <FancyDisplay start={30}/>
    </div>
  )
}

export default App;