import React from "react";
import './pizza.css'
const anime = [
  {
    name: "aizen",
    animeName:'bleach',
    identity: "son of destruction",
    price: 10,
    photoName: "Aizen.png",
    soldOut: false,
  },
  {
    name: "ichigo",
    identity: "soul king",
    animeName:'bleach',
    price: 14,
    photoName: "ichicgo.png",
    soldOut: true,
  },
  {
    name: "Levi",
    identity: "symbol of power",
    animeName:'attack on titen',
    price: 20,
    photoName: "levi.png",
    soldOut: true,
  },
  {
    name: "sakura",
    animeName:'i want to eat your pancreas',
    identity: "symbol of love",
    price: 35,
    photoName: "sakura.png",
    soldOut: false,
  },
];

function Pizza() {
  return (
    <>
      <h2>anime character </h2>
      <p>anime name</p>
      <img
        src="imgs/Aizen.png"
        alt="aizen"
      />
      <br />
    </>
  );
}

function Header() {
  
  return <h1>anime characters co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>our charater</h2>
      <Pizza />
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour>=openHour && hour <=closeHour) alert(`we're currrently open!!:)`)
  //   else alert(`we're currently closed`)

  return (
    <footer>{new Date().toLocaleTimeString()} we're currently open</footer>
  );
  // return React.createElement("footer",null,`we're currently open`)
}

export { Header, Footer, Menu, Pizza };
