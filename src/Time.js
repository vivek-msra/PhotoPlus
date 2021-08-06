import React from 'react'
class Time extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()   //getting data and string it in state initialization
      };
    }
    //invoke only on client
    //a kind of constructor which get called once
    componentDidMount() {
      //setInterval is a method that calls a function or runs some code after specific intervals of time, as specified through the second parameter.
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    //componentWillMount is done before the INITIAL render of a component
    //invoke both on client and server.. 
    componentWillUnmount() {
      clearInterval(this.intervalID); // it will clearIterval
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <div style={{textAlign:"right" , color:"chocolate"}} className="App-clock">
            <small  style={{fontWeight:"bold"}}>
           Today {this.state.time}.
           </small>
        </div>
      );
    }
  }
  export default Time;