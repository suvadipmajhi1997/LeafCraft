import React, { useContext } from 'react';
import { CartContext } from '../CartContextProvider';
import { Link } from 'react-router';

function Carts() {
  const {cartItem, addToCart, removeFromCart, updateQuantity, total} = useContext(CartContext);
  return (
    <>
      <div className="page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link>/Cart
        </p>
        <h2 className="fw-bold">Carts</h2>
      </div>

      <section className="container mb-4">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb-4">Shopping Cart</h2>
            {cartItem.length === 0 ? (
              <div className="alert alert-danger">Your Cart is empty</div>
            ) : (
              <div className="table-responsive product-cart-wrap">
                <table className="table align-middle text-center">
                  <thead className="table-light w-100">
                    <tr>
                      <th className="product-name wl-text fw-normal">Product</th>
                      <th className="product-name wl-text fw-normal">Price</th>
                      <th className="product-name wl-text fw-normal">Quantity</th>
                      <th className="product-name wl-text fw-normal hide-element">Subtotal</th>
                      <th className="product-name wl-text fw-normal ">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item)=>(
                  <tr key={item.id}>
                    <td className="d-flex align-items-center gap-3 text-start">
                      <img src={item.image} 
                      alt={item.image}
                      width={80}
                      height={80}
                      className="border rounded"
                       />
                       <p className="product-name wl-name m-0">{item.name}</p>
                       {/* <p className="mb-0 text-muted wl-name" style={{fontSize:'14px'}}>
                        {product.description || 'short description here'}
                        </p> */}
                    </td>
                    <td className="product-name fs-6">${item.price}</td>
                    <td className="text-center quantity-input">
                      <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e)=>updateQuantity(item.id,e.target.value)}
                      />
                    </td>
                    <td className="text-end">
                      <span>${(item.price*item.quantity).toFixed(2)}</span>
                    </td>
                    <td className="center">
                      <button className="remove-cart-btn"
                      onClick={()=>removeFromCart(item.id)}><i className="ri-delete-bin-line"></i>
                      </button>
                    </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="card p-4 total-product-price-wrap shadow-sm">
                <h4 className="mb-3 fw-semibold">Cart Totals</h4>
                <table>
                  <tr>
                    <td>Cart Subtotals</td>
                    <td className="text-end text-success cart-subtotal">${total.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td className="text-end">Free Shipping</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Total</td>
                    <td className="text-end text-success cart-subtotal">${total.toFixed(2)}</td>
                  </tr>
                </table>
                <Link to='' className='btn checkout-btn d-inline-block mt-3'>
                <i className="ri-bank-card-line me-2"></i>Procced To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carts