import React,  { useState } from 'react';

  class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: 0,
      };
    }
    /*
      This is component did mount and of course I run after the first render or the initial render.
      So again this is a lifecycle method that's going to run when the component is first mounted on the Dom
      it's only going to run once it's going to run when app is going to appear on the screen for the first
      time.
    */
    componentDidMount(){
      console.log("This is componentDidMount. I run after the first render!")
    }
    /*
      I'm also going to define my second lifecycle method right here a component did update just like the
      name suggests this is going to run every single time.
      Something about the component updates or in other words it renders.
      So for example when it's state changes or its prompts prompts change.
      So unlike component did mount component it update can actually run more than once in the existence of
      a component it can technically run an infinite number of times so you can actually pass component did
      Update 2 parameters or two arguments.
    */
   componentDidUpdate(prevProps, prevState){
     console.log("This is a componentDidUpdate. I run after any subsequent render.")
   }

    /*
      The last lifecycle method to discuss is component will amount which is invoked right before a component
      is removed from the DOM right before it disappears from the view.
      Now in terms of component design the standard protocol works something like this the component did mount
      lifecycle method sets up the component to be used for example typically in component in Mount.
      We can do something like make a request to an API for data or set up a subscription or create any event
      listeners.
      After we do that in the component will unbound lifecycle method those initial subscriptions and event
      listeners are torn down component will amount is meant to reverse everything that we setup in component
      did mount the component did mount lifecycle method sets everything up while the component will on Mount
      method puts an end to everything and kind of tightens everything up before the component disappears
      from the screen.
    */
   componentWillUnmount(){
    console.log("This is componentWillUnmount. Hey, I'm about to get romoved from the DOM.") 
   }

    render() {
      console.log("I'm rendering!");
      const { count } = this.state;
      return (
        <div>
          <button onClick={() => this.setState({ count: count + 1})}>Increase</button>
          <button onClick={() => this.setState({ count: count -1})}>Decrease</button>
          <h1>{count}</h1>
        </div>
      )
    }
  }

  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        visible: false,
      }

    }
    render(){
      const { visible } = this.state;
      return(
        <div>
          <button onClick={() => this.setState({ visible: !visible})}>
            Show / Hide the Counter Component
          </button>
          <br/>
          <br/>
          <hr/>
          { visible && <Counter/> }
        </div>
      )
    }
  }

export default App;