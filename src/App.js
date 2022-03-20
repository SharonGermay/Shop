import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemsList from "./Components/itemsList";
import Menu from "./Components/menu";
import ItemPage from "./Components/itemPage";
import Cart from "./Components/cart";
import { createStore } from "redux";

export const addToCartAction = (item) => {
  return { type: "ADD", data: item };
};

export const removeFromCartAction = (item) => {
  return { type: "REMOVE", data: item };
};

//Reducer
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      let exist = state.find((item) => item.id === Number(action.data.id));

      if (exist) {
        return [...state, { ...action.data, qty: action.data.qty + 1 }];
      } else {
        return [...state, { ...action.data, qty: 1 }];
      }
    case "REMOVE":
      return state.filter(item => item.id !== action.data.id);
    default:
      return state;
  }
};

export const store = createStore(cartReducer);

function App() {
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
          <Route
            path="/"
            element={<ItemsList allItems={data} title={"Item Catalog"} />}
          />
          <Route path="/items" element={<ItemsList allItems={data} />} />
          <Route path="/items/:id" element={<ItemPage allItems={data} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
