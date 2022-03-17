import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemsList from "./Components/itemsList";
import Menu from "./Components/menu";
import ItemPage from "./Components/itemPage";
import Cart from "./Components/cart";

function App() {
  let [cart, setCart] = useState([]);
  let [data, setData] = useState([]);

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw Error("could not fetch the data for that resource");
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     setData(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  let addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };


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
        // setIsPending(false);
        // setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // setIsPending(false);
          // setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [data]);

  return (
    <div className="App">
      <Router>
        <Menu />

        <Routes>
          <Route path="/" element={<ItemsList allItems={data} />} />
          <Route path="/items" element={<ItemsList />} />
          <Route
            path="/items/:id"
            element={<ItemPage onAdd={addToCart} allItems={data} />}
          />
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
