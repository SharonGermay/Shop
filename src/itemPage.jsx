import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./item";
import { ProgressBar } from "react-bootstrap";

export default function ItemPage(props) {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  let addItemToStorage = () => {
    let newCart = localStorage.getItem("cart");
    // newCart.push(1);
    // localStorage.setItem("cart", newCart);
    console.log(newCart)
  };

  let { id } = useParams();

  useEffect(() => {
    const abortCont = new AbortController();
    fetch("https://fakestoreapi.com/products/" + id, {
      signal: abortCont.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(
        (err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        },
        [data]
      );

    return () => abortCont.abort();
  });

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="progressBar">
          <ProgressBar animated now={100} />
        </div>
      )}

      {data && (
        <Item
          itemData={data}
          displayData={"fullItemDetails"}
          onAdd={addItemToStorage}
        />
      )}
    </div>
  );
}
