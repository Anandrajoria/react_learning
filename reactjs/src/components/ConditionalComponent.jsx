import Code from "./Code";
import Welcome from "./Welcome";


//! this is conditionalaly render components and it is not a good practice where a function return a another function 
// ? as a function should only return a value not either multiple values or functions 

function ConditionalComponent() {
  const display = true;

  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}

export default ConditionalComponent;
