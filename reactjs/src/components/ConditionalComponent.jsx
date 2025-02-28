import Code from "./Code";
import Welcome from "./Welcome";

//! this is conditionalaly render components and it is not a good practice where a function return a another function
// ? as a function should only return a value not either multiple values or functions

function ConditionalComponent() {
  /*const display = true;

  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
    */

  //! components variable or element variable == element variable are something that allow you to store html elements or components into them
  // let messageOne=<h1>this is message one</h1>
  // let messageTwo=<h1>this is message two</h1>


  const display = true; 
  /*let message;

  if(display){
    message=<Code/>
  }else{
    message=<Welcome/>
  }
  return message  //! here we only have one return statement 
*/

  //!now we will use ternary oerator to simplify more
  {
    return display ? <Code /> : <Welcome />;
  }
  
}

export default ConditionalComponent;
