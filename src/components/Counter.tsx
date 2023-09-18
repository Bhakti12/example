import React,{Component} from "react";

interface countProps{
    count : number
}

interface countState{
    count : number
}

export class Counter extends Component<countProps,countState>{
    
    constructor(props:countProps){
        super(props)

        this.state = {
            count : 0
        }
    }
    
    Increment() {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state.count);
        });
    }

    render(){
        return(
            <div>
                <div>
                    count - {this.state.count}
                </div>
            <button onClick={()=>this.Increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter