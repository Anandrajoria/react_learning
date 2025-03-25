import { useState } from "react";

function Counter() {
    const [Count,setCount]=useState(0);

    const [increment,setIncrement]=useState(1);

    function handleClick(){
        setCount(Count+increment)
    }
    function decrement(){
        setCount(Count-increment)
    }

    function increaseIncrement(){
      setIncrement(increment+1)
    }

    function decreaseIncrement(){
      setIncrement(increment-1)
    }
  return <div>
    <h1>count value is: {Count}</h1>
    <button onClick={handleClick}>Increment</button>
    <button onClick={decrement}>Dncrement</button>

    <h1>we are incrementing the value by:{increment}</h1>
    <button onClick={increaseIncrement}>increase the increment</button>
    <button onClick={decreaseIncrement}>decrease the increment</button>

  </div>;
}

export default Counter;

//in order to save the count value we create the state variable
// for example multiple component can store multiple piece of state these are called state variable

