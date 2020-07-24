import React, { Component } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let isUser = this.props.username === this.props.message.username;
    return (
      <div className={`message ${isUser && "message_user"}`}>
        <Card className={isUser ? "message_userCard" : "message_guestCard "}>
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {this.props.message.username} : {this.props.message.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Message;
