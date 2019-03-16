import React,  { useState } from 'react';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1})
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       }
//     })

//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.handleClick}>Increase</button>
//         <h1>{this.state.count}</h1>
//       </div>
//     )
//   }
// }

function App(){
  const [count, setCount] = useState(0)
  // const handleClick = () => setCount(count + 1);
  const handleClick = () => setCount((prevCount) => {
    return prevCount + 1;
  });
  return (
      <div>
        <button onClick={handleClick}>Increase</button>
        <h1>{count}</h1>
      </div>  
  )
}

export default App;