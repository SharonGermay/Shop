import { useState, useEffect } from "react";
import Item from "./item";
import { ProgressBar } from "react-bootstrap";

export default function ItemsList() {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

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
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [data]);

  return (
    <div className="row">
      {error && <div>{error}</div>}
      {isPending && (
        <div className="progressBar">
          <ProgressBar animated now={100} />
        </div>
      )}

      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className="col-3 item border">
              <Item itemData={item} displayData={"partDetailed"} />
            </div>
          );
        })}
    </div>
  );
}
