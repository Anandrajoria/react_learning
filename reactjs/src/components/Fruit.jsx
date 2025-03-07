const Fruit = ({ name, price, emoji, soldOut }) => {
  // 'name' is missing in props validation !!! this error comes because == props validation is Required (if not provided, a warning appears in the console)

  return (
    <>
      {/* <li>{emoji} {name} {price}</li> */}

      {/*  conditinal rendering 
         {price > 28 ? (
          <li>
            {emoji} {name} {price}
          </li>
        ) : (
          ""
        )} */}

      <li>
        {emoji} {name} {price} {soldOut ? "sold out" : ""}
      </li>
    </>
  );
};

export default Fruit;
