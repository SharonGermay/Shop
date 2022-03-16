import { ProgressBar } from "react-bootstrap";

export default function Cart(props) {
  let itemsInCart = props.cartItems;
  let allItems = props.allItems;
  let itemsInCartToDisplay = allItems.filter((item) =>
    itemsInCart.includes(item.id)
  );

  return (
    <div>
      <h1>Cart Items</h1>
      {!itemsInCartToDisplay && (
        <div className="progressBar">
          <h1>
            <strong>Loading...</strong>
          </h1>
          <ProgressBar animated now={100} />
        </div>
      )}

      {itemsInCartToDisplay &&
        itemsInCartToDisplay.map((i) => (
          <div className="itemInCart">
            <img src={i.image} alt="" />
            <div className="desc">
              <p>
                <strong>{i.description}</strong>{" "}
              </p>
            </div>
            <div className="price">
              <p>
                <strong>Price:</strong> {i.price}$
              </p>
            </div>

            <div className="amount">
              <p>
                <strong>Amount:</strong> " "
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
