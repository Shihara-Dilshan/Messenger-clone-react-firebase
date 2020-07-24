import React, { Component } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css"; 

import Message from "./Message";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      messages: [
        { username: "sonny", text: "hey guys" },
        { username: "quize", text: "whats up" },
      ],
      user: "",
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
      messages: [
        ...this.state.messages,
        { username: this.state.user, text: this.state.input },
      ],
      input: "",
    });
  };

  componentDidMount() {
    const userName = prompt("Enter your name");
    if (userName !== null) {
      this.setState({ user: userName });
    } else {
      this.setState({ user: "unknown" });
    }
  }

  render() {
    return (
      <div className="App">
        <h3 className="grey-text">Hello {this.state.user}</h3>
        <div>
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
        </div>

        {[...this.state.messages].map((message) => (
          <Message username={this.state.user} message={message} />
        ))}
      </div>
    );
  }
}

export default App;
