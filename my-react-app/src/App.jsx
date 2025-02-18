import React from "react";

const PizzaData=[
  {
    name:'forcassio',
    ingridents:'bread with italian olive oil',
    price:10,
    photoName:'pizzas/forcassico.zip',
    soldOut:false
  },
  {
    name:'marrgrita',
    ingridents:'bread with italian olive oil',
    price:10,
    photoName:'pizzas/forcassico.zip',
    soldOut:false
  },
  {
    name:'vaggeis',
    ingridents:'bread with italian olive oil',
    price:10,
    photoName:'pizzas/forcassico.zip',
    soldOut:false
  },
  {
    name:'paneer pizza',
    ingridents:'bread with italian olive oil',
    price:10,
    photoName:'pizzas/forcassico.zip',
    soldOut:false
  },
]
function Pizza(){
  return <h1>Pizza species</h1>
}

function App() {
  return (
    <>
      <h1>hellow world</h1>
      <Pizza/>
    </>
  );
}
export default App;
