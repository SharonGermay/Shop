import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./item";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ItemPage(props) {
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  let { id } = useParams();
  let { allItems } = props;
  let chosenItem = allItems.find((item) => id);

  return (
    <div>
      {/* {error && <div>{error}</div>}
      {isPending && (
        <div className="progressBar">
          <h1>
            <strong>Loading...</strong>
          </h1>
          <ProgressBar animated now={100} />
        </div>
      )} */}

      {chosenItem && (
        <div>
          <Item
            itemData={chosenItem}
            displayData={"fullItemDetails"}
            onAdd={props.onAdd}
          />

          <button
            className="btn btn-success"
            onClick={() => {
              props.onAdd(id);
              alert("Item added successfully !");
            }}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}
