export default function Cart(props) {
  let { cartItems } = props;

  return (
    <div className="container">
      <div className="title">
        <h1 className="display-5">Cart Items</h1>
      </div>

      {cartItems.length === 0 && <p> Cart Is Empty </p>}

      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div key={item.id}>
            <div className="itemInCart">
              <img src={item.image} alt="" />
              <div className="desc">
                <p>{item.description}</p>
              </div>
              <div className="price">
                <p>
                  <strong>Price:</strong> {item.price}$
                </p>
              </div>
              <div className="amount">
                <p>
                  <strong>quantity:</strong> {item.q}
                </p>
                <button className="btn btn-success">+</button>
                <button className="btn btn-danger">-</button>
              </div>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
}
