import React from "react";

function Test4(props){
    // console.log(props);

    return(
        <>
            <h1>{props.username} {props.hello.name} {props.hello.last} {props.arr} from Test4</h1>
        </>
    );
}

export default Test4