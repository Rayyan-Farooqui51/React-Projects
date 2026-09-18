import React from "react";

function Test2(props){
    // console.log(props);
    
    return(
        <>
            <h1>hi {props.obj.name} {props.obj.last} from Test2</h1>
        </>
    );
}

export default Test2;