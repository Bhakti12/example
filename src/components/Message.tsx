//props vs state
//props get passed to the component
//state is managed within the component.
//props are function parameter
//state is variable declared in the function body.
//props are immutable
//states are changable
//props - functional component , this.props - class component
//useState Hook - functional components,
//this.state - class components,

import React, { Component } from "react";

interface MessageProps{
    message : string
}

interface MessageState{
    message : string
}

class Message extends Component<MessageProps,MessageState>{
    
    constructor(state:MessageProps){
        super(state)
        this.state = {
            message : 'Hello States'
        }
    }
    
    changeMessage(){
        this.setState({
            message : 'Thank you for subscribing'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message;