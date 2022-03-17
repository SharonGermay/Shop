export default function Cart(props) {
  let { cartItems } = props;

  return (
    <div>
      <h1>Cart Items</h1>

      {!cartItems && <p> Cart Is Empty </p>}

      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id} className="itemInCart">
            <img src={item.image} alt="" />
            <div className="desc">
              <p>
                <strong>{item.description}</strong>
              </p>
            </div>
            <div className="price">
              <p>
                <strong>Price:</strong> {item.price}$
              </p>
            </div>

            {/* <div className="amount">
              <p>
                <strong>Amount:</strong> 
              </p>
            </div> */}
          </div>
        ))}
    </div>
  );
}
