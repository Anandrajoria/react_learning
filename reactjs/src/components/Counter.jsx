import { useState } from "react";

function Counter() {
    const [Count,setCount]=useState(0);

    function handleClick(){
        setCount(Count+1)
    }
    function decrement(){
        setCount(Count-1)
    }
  return <div>
    <h1>count value is: {Count}</h1>
    <button onClick={handleClick}>Increment</button>
    <button onClick={decrement}>Dncrement</button>

  </div>;
}

export default Counter;

//in order to save the count value we create the state variable
// for example multiple component can store multiple piece of state these are called state variable