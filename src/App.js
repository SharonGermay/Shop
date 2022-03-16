import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsList from "./itemsList";
import Menu from "./menu";
import ItemPage from "./itemPage";
import Cart from "./cart";
import { useState, useEffect } from "react";

function App() {
  let [cart, setCart] = useState([]);

  let [data, setData] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch("https://fakestoreapi.com/products", { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        }
      });
    return () => abortCont.abort();
  }, [data]);

  let addToCart = (id) => {
    let newCart = [...cart];
    newCart.push(id);
    setCart(newCart);
    console.log(cart);
  };

  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<ItemsList allItems={data} />} />
          <Route path="/items" element={<ItemsList />} />
          <Route path="/items/:id" element={<ItemPage onAdd={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} allItems={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
