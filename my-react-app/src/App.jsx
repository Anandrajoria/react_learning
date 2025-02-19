import React from "react";

const PizzaData = [
  {
    name: "forcassio",
    ingridents: "bread with italian olive oil",
    price: 10,
    photoName: "pizzas/forcassico.zip",
    soldOut: false,
  },
  {
    name: "marrgrita",
    ingridents: "bread with italian olive oil",
    price: 10,
    photoName: "pizzas/forcassico.zip",
    soldOut: false,
  },
  {
    name: "vaggeis",
    ingridents: "bread with italian olive oil",
    price: 10,
    photoName: "pizzas/forcassico.zip",
    soldOut: false,
  },
  {
    name: "paneer pizza",
    ingridents: "bread with italian olive oil",
    price: 10,
    photoName: "pizzas/forcassico.zip",
    soldOut: false,
  },
];

function Pizza() {
  return (
    <>
      <h1>Pizza species </h1>
      <p>bread with italian olive oil</p>
      <br />
    </>
  );
}

function App() {
  return (
    <>
      <Header/>
      <Pizza />
      <Pizza />
    </>
  );
}
export default App;


function Header(){
  return <h1>fast react pizza co.</h1>
}
function Menu(){}
function Footer(){
  
}