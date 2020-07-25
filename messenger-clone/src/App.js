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
    window.scrollTo(0, document.body.scrollHeight);
    db.collection("messages").add({
      username: this.state.user,
      text: this.state.input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    this.setState({
      input: "",
    });
  };

  getStyle = () => {
    return {
      position: "fixed",
      bottom: "0px",
      width: "100%",
      backgroundColor: "transparent",
      paddingTop: "30px",
      borderRadius: "30px",
    };
  };

  componentDidMount() {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
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
      <React.Fragment>
        <div style={{ marginBottom:"10%"}}>
          {[...this.state.messages].map((message) => (
            <Message username={this.state.user} message={message} />
          ))}
        </div>

        <div className="App" style={this.getStyle()}>
          <div>
            <form>
              <div className="row">
                <div className="col s8">
                  <input value={this.state.input} onChange={this.update} />
                </div>
                <div className="col s4">
                  <button
                    className="btn teal"
                    disabled={!this.state.input}
                    type="submit"
                    onClick={this.sendMessage}
                    style={{ width: "100%", verticalAlign: "-15px" }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
