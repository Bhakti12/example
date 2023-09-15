import React, {Component} from "react";

class Welcome extends Component<{name:string}>{
    render(){
        return(
            <h1>Welcome {this.props.name}</h1>
        ) 
    }
}

export default Welcome;

//difference between class and funtional components:
//functional component : simple functions,use functional components as much as possible,absence of 'this' keyword,solution without using state,
//mainly responsible for the UI,stateless/presentational
//class component : more feature rich,maintain their own private data,complex UI-logic,provide lifecycle hooks,statefull/container