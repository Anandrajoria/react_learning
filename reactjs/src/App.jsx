// import Hello from "./components/Hello";

// function App() {
//   // const seatNumber = [1, 23, 3,'adas',true,false];
//   /* we can pass the array to the props but that props does not going to console true or falsy values but it will print any other values*/

//   const person = {
//     name: "aditya",
//     message: "hiii there",
//     emoji: "👋🏻",
//     seatNumbers: [1, 2, 3],
//   };

//   return (
//     <>
//        {/* <Hello
//         name="aditya"
//         message="hi there"
//         emoji="😉"
//         seatNumbers={seatNumber}

//       />  */}

//     {/* we can also pass whole object to the components as props , go and see in hello.jsx on 1: */}
//       <Hello person={person} />

//     </>
//   );
// }

// export default App;

// !  above is for passing arrays and objects to props


import ConditionalComponent from "./components/conditionalComponent";
import Fruits from "./components/Fruits";

function App() {
  return (
    <>
     <Fruits />   {/*    //! this is for saparate components */}
      
      {/* <ConditionalComponent/> */}
    </>
  );
}

export default App;
