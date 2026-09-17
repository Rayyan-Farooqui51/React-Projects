import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () =>{
    if(counter < 20){
        // this will increse the counter by 1
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);

        // this will increase the counter by 4
    //   setCounter(counter => counter+1);
    //   setCounter(counter => counter+1);
    //   setCounter(counter => counter+1);
    //   setCounter(counter => counter+1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      
      <br />
      
      <button
      onClick={removeValue}
      >Subtract Value {counter}</button>
    </>
  )
}

export default App
