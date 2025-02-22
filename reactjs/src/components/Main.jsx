// ! functional based component

import Hello from "./Hello";

// function displayMessage(){
//     return 'wow'
// }

function Main() {
  const name = "ADITYA";
  return (
    <>
      <h1>from the heaven and the earth {name} alone is honored one</h1>
      <Hello name="boss" message="hi" />
      <Hello name="jinhoo" message="hello" emoji='🛑'/>
    </>
  );
}

export default Main;
