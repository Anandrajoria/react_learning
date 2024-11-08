import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passward, setPassward] = useState("");

  //ref hook
  const passwardRef=useRef(null)

  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (noAllowed) str += "0123456789";
    if (charAllowed) str += "!{}[]'~@#$%^&*()+=-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassward(pass);
  }, [length, noAllowed, charAllowed,setPassward]);

  const copyPasswardToClipBoard=useCallback(()=>{
    passwardRef.current?.select();
    // passwardRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(passward)
  },[passward])


  useEffect(()=>{
    passwardGenerator()
  },[length,noAllowed,charAllowed,passwardGenerator])

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-xl
    rounded-lg px-4 my-8 py-8 text-orange-500 bg-gray-800"
      >
        <h1 className="text-white text-center my-3">Passward generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passward}
            className="outline-none w-full py-1 px-3"
            placeholder="passward"
            readOnly
            ref={passwardRef}
          />
          <button onClick={copyPasswardToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length : {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={noAllowed}
              id="numberInput"
              onChange={() => {
                setNoAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
