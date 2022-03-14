import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsList from "./itemsList";
import Menu from "./menu";
import ItemPage from "./itemPage";
import Cart from "./cart";
import Content from './content';

function App() {
  let cart = []
  localStorage.setItem("cart",cart);

  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
        <Route path="/" element={<Content />} />
          <Route path="/items" element={<ItemsList />} />
          <Route path="/items/:id" element={<ItemPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
