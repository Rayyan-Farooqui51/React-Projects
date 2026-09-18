import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";

function App() {
    const [count, setCount] = useState(0);

    let info={
        name:"rayyan",
        last:"farooqui"
    }

    let arr=[1,2,3]

    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">TailWind Test</h1>
            <Card username="rayyan" btnText='click me'/>
            <Test1 name='rayyan' last='farooqui'/>
            <Test2 obj={info}/>
                
            {/* 
            
            props
                { 
                    name: {
                        name: "rayyan",
                        last: "farooqui"
                    }
                } 
    
            */}
        
            <Test3 {...info}/>
            <Test4 uername="rayyan" hello={info} world={arr}/>
        </>
    );
}

export default App;
