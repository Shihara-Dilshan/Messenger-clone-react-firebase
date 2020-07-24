import React, { Component } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";  

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      messages: [],
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

    db.collection("messages").add({
      username: this.state.user,
      text: this.state.input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    this.setState({
      input: "",
    });
  };

  componentDidMount() {
    db.collection("messages").orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
      this.setState({ messages: snapshot.docs.map((doc) => doc.data()) });
    });

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
