import React from "react";

interface propsMessage{
    options : string
}

interface State{
    options : string
}

class Header extends React.Component<propsMessage,State>{
    constructor(props : propsMessage){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.state = {
            options : props.options
        }
    }
    handleAddOptions(options:string){
        if(!options){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(options) > -1){
            return 'This option already exist';
        }
    }
    handlePickOptions(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options:''
            };
        });
    }
}

export default Header