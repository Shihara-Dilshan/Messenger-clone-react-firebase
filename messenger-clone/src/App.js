import React, { Component } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      messages: ["a", "b", "c"],
    };
  }

  update = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  sendMessage = (event) => {
    event.preventDefault();
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Programmers</h1>

        <form>
          <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            <Input value={this.state.input} onChange={this.update} />
            <Button
              disabled={!this.state.input}
              variant="outlined"
              color="primary"
              type="submit"
              onClick={this.sendMessage}
            >
              Send Message
            </Button>
          </FormControl>
        </form>

        {[...this.state.messages].map((message) => (
          <p>{message}</p>
        ))}
      </div>
    );
  }
}

export default App;
