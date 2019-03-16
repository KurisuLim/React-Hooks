import React,  { createContext } from 'react';

  const NameContext = createContext()

  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'Bill Shakespeare',
      }
    }

    render(){
      return(
        <NameContext.Provider value={this.state.name}>
          <Child />
        </NameContext.Provider>
      )
    }
  }


  class Child extends React.Component{
    render(){
      return(
        <section className="child">
          <GrandChild />
        </section>
      )
    }
  }

  class GrandChild extends React.Component{
    render(){
      return(
        <div className="grandchild">
          <Button/>
        </div>
      )
    }
  }
  class Button  extends React.Component{
    render(){
      return(
      <NameContext.Consumer>
        {
          name => <button>{name}</button>
        }
      </NameContext.Consumer>
      )
    }
  }

  // ThemeContext
  // LanguageContext
  // TimezoneContext
  // <ThemeContext.Consumer>
  //   { theme => {
  //       <LanguageContext.Consumer>
  //         {
  //           language => { 
  //             <TimeContext.Consumer>
  //               {
  //                 timezone => {
  //                   return <div style={{color: theme}}>{language}{timezone}</div>
  //                 }
  //               }
  //             </TimeContext.Consumer> 
  //           }
  //           }
  //         }
  //       </LanguageContext.Consumer>
  //     }
  //   }
  // </ThemeContext.Consumer>

export default App;

