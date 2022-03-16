import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div>
      {props.displayData === "partDetailed" && (
        <div className="listItem">
          <img src={props.itemData.image} alt="" />
          <Link to={`/items/${props.itemData.id}`}>
            <p>{props.itemData.title}</p>
          </Link>
        </div>
      )}

      {props.displayData === "fullItemDetails" && (
        <div className="singleItem">
          <div className="desc">
            <p> {props.itemData.description}</p>
          </div>
          <div className="price">
            <p>
              <strong>Price:</strong> {props.itemData.price}$
            </p>
          </div>
          <img src={props.itemData.image} alt="" />
        </div>
      )}
    </div>
  );
}
