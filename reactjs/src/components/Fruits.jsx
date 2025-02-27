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
    { name: "apple", price: 12, emoji: "🍎" },
    { name: "mango", price: 28, emoji: "🥭" },
    { name: "banana", price: 52, emoji: "🍌" },
    { name: "orange", price: 72, emoji: "🟠" },
    { name: "pineapple", price: 6, emoji: "🍍" },
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
          />
        ))}
      </ul>
    </>
  );
}
export default Fruits;
