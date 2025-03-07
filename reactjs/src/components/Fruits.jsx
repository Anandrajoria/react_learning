//! rendering array elements one by one

import Fruit from "./Fruit";

/**
function Fruits() {
  const fruits = ["apple", "mango", "banana", "orange", "pineapple"];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
export default Fruits;
 */

function Fruits() {
  const fruits = [
    { name: "apple", price: 12, emoji: "🍎", soldOut: false },
    { name: "mango", price: 28, emoji: "🥭", soldOut: true },
    { name: "banana", price: 52, emoji: "🍌", soldOut: true },
    { name: "orange", price: 72, emoji: "🟠", soldOut: false },
    { name: "pineapple", price: 6, emoji: "🍍", soldOut: true },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          /* <li key={fruit.name}>{fruit.emoji} {fruit.name} = ${fruit.prize}</li> */

          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </>
  );
}
export default Fruits;
