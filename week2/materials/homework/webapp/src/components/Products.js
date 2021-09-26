import useProducts from "../hooks/useProducts";
import useNotifications from "../hooks/useNotification";
import { useState } from "react";

function Products() {
  const [show, setShow] = useState(false);
  const { products, cart, addProduct, removeProduct, calculateSum } =
    useProducts();
  const { notifications, text, createNotification } = useNotifications();

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  const handleClose = () => setShow(show);

  return (
    <div>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="card col-md-4" key={product.id}>
              <div className="text-center">
                <img
                  style={{ width: "400px" }}
                  src={product.imageURL}
                  alt="img"
                />
              </div>
              <div className="card-body">
                <h2>{product.name}</h2>

                <p className="card-text">{product.description}</p>
                <p>
                  <strong className="text-warning">
                    price: {product.price} {product.currency}
                  </strong>
                </p>
                {isInCart(product) && (
                  <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary"
                  >
                    Select
                  </button>
                )}
                {!isInCart(product) && (
                  <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <form>
        <div className="form-group mt-4 col-md-4">
          <p className="mt-4">
            <span className="card card-body mt-3">
              You will be charged:
              <strong className="text-warning">{calculateSum} DKK</strong>
            </span>
          </p>

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        {notifications && (
          <div className="mt-3 pb-2 d-flex">
            <strong className="bg-success px-5 text-white rounded d-flex align-items-center">
              {text}
            </strong>
            <button
              className="btn btn-success bg-success text-white ml-10"
              onClick={handleClose}
            >
              &#x2715;
            </button>
          </div>
        )}
        <button
          onClick={createNotification}
          type="submit"
          className="btn btn-primary mb-2"
        >
          Buy now
        </button>
      </form>
    </div>
  );
}

export default Products;
