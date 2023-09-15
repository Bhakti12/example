import React from "react";

//simple function component
function Greet() {
    return <h1>This is Functional Component</h1>
}

//arrow function component
const ArrowExample = (props: any) => {
    console.log(props);
    return (
        <div>
        <h1>Hello {props.name}</h1>
        <p>Hello</p>
        </div>
    )
} 

export {Greet , ArrowExample}