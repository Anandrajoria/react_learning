import { useState } from "react";

function App() {
  const [length,setLength] =useState(8)
  const [noAllowed,setNoAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [passward,setPassward]=useState("")

  const passwardGenerator=()=>{
    
  }
return <>
    <h1 className="text-4xl text-white text-center">passward generator</h1>
  </>;
}

export default App;
