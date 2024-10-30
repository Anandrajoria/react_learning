import React, { createContext } from "react";
import CompB from "./CompB";

const firstName = createContext();
function CompA() {
  return (
    <>
      <firstName.Provider value={"aditya"}>
        <CompB />
      </firstName.Provider>
    </>
  );
}

export default CompA;
export { firstName };
 