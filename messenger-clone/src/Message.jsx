import React, { Component } from 'react';

class Message extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <div>
                <h2>{this.props.user} : {this.props.text}</h2>
            </div>
         );
    }
}
 
export default Message;