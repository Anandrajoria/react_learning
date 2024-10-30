import React from "react";
import { firstName } from "./CompA";
function CompD() {
  return (
    <>
      <firstName.Consumer>
        {(fname) => {
          return <h1>my name is {fname}</h1>;
        }}
      </firstName.Consumer>
    </>
  );
}

export default CompD;
