import { useState, useEffect } from "react";
import Item from "./item";
import { ProgressBar } from "react-bootstrap";

export default function ItemsList(props) {
  // let [data, setData] = useState(null);
  let [error] = useState(null);

  let {allItems} = props;


  return (
    <div className="container-sm">
      <div className="row">
        {error && <div>{error}</div>}
        {allItems.length===0 && (
          <div className="progressBar">
            <h1>
              <strong>Loading...</strong>
            </h1>
            <ProgressBar animated now={100} />
          </div>
        )}

        {allItems &&
          allItems.map((item) => {
            return (
              <div key={item.id} className="col-3 item border">
                <Item itemData={item} displayData={"partDetailed"} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
