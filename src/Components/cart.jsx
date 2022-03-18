export default function Cart(props) {
  let { cartItems } = props;

  // let increseQty = () => {

  // };

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
                  <strong>Price:</strong> {item.price * item.qty}$
                </p>
              </div>
              <div className="quantity">
                <p>
                  <strong>quantity:</strong> {item.qty}
                </p>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    item.qty += 1;
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(evt) => {
                    if (item.qty === 1) {
                      item.qty = 1;
                    } else {
                      item.qty -= 1;
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
}
