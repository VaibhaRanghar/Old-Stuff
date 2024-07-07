import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "src/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <h1>Hello React!!!!</h1>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Pizza({pizzaObj}) {
  console.log();
  return (
    <li className={`pizza ${pizzaObj.soldOut? "sold-out":""}`}>{/*using ternary operator to choose which class to use.*/}
      <img src={pizzaObj.photoName} alt=" " />
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.soldOut? "SOLD OUT":pizzaObj.price}</p>
      <p>{pizzaObj.ingredients}</p>
    </li>
  );
}

const style = {
  color: "red",
  fontSize: "48px",
  textTransform: "uppercase",
};
function Header() {
  return <h1 style={{ color: "blue" }}>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div className="menu">
      <h2 style={style}>Our Menu</h2> 

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj = {pizza} key = {pizza.name} />
        ))}
      </ul>

    </div>
  );
}
function Footer() {
  return <p>We are currently open!</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
