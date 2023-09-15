import React from "react";

const Hello = () => {
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello</h1>
    //     </div>
    // );
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'React create element'));
}

export default Hello

//createElement lets you create a React element. It serves as an alternative to writing JSX.