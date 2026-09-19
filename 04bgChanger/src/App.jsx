import { useState } from "react"


function App() {
    const [color,setColor] = useState("olive");

    return (
        <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}>

            <div className="flex flex-wrap justify-center w-full fixed bottom-12">

                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-fit">

                    <button className="rounded-full outline-none px-4 bg-red-600 text-white shadow-lg" onClick={()=> setColor('red')}>
                        Red</button>
                    
                    <button className="rounded-full outline-none px-4 bg-green-500 text-white shadow-lg" onClick={()=> setColor('green')}>
                        Green</button>

                    <button className="rounded-full outline-none px-4  text-white shadow-lg" style={{backgroundColor: 'olive'}} onClick={()=> setColor('olive')}>
                        olive</button>

                    <button className="rounded-full outline-none px-4 bg-blue-500 text-white shadow-lg" onClick={()=> setColor('blue')}>
                        Blue</button>
                    
                    <button className="rounded-full outline-none px-4 bg-black text-white shadow-lg" onClick={()=> setColor('black')}>
                        Black</button>
                    

                </div>

            </div>

        </div>
    )
}

export default App
