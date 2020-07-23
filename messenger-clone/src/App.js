import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
      messages: ['a', 'b' , 'c']
    };
  }
  
  update = (event) => {
    this.setState({
      input : event.target.value
    });
  }

  sendMessage = (event) => {
    event.preventDefault();
    this.setState({messages: [...this.state.messages, this.state.input] , input: '' })
  }

  render() { 
    return ( <div className="App">
    <h1>Hello Programmers</h1>
    <form action="">
      <input
        value={this.state.input}
        onChange={this.update}
      />
      <button type="submit" onClick={this.sendMessage}>Send Message</button>    
    </form>

    {/* messages themselves */}

    {[...this.state.messages].map((message) => (
      <p>{message}</p>
    ))}
  </div> );
  }
}
 
export default App;



