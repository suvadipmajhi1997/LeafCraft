import React, { useContext } from 'react'
import {WishlistContext} from './../WishlistContextProvider'
import { Link } from "react-router";

const Wishlist = () => {
  const {wishlistItem, removeFromWishlist} = useContext(WishlistContext);

  return (
    <>
    <div className="page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link>/Wishlist
        </p>
        <h2 className="fw-bold">My Wishlist</h2>
      </div>

      <div className="container">
        {wishlistItem.length===0 ? (
          <div className="alert alert-danger text-center">No Item in Wishlist</div>
        ) :(
          <div className="table-responsive">
            <table className="table align-middle text-center">
              <thead className="table-light w-100">
                <tr>
                  <th className="product-name wl-text fw-normal">Product</th>
                  <th className="product-name wl-text fw-normal">Price</th>
                  <th className="product-name wl-text fw-normal hide-element">Stock Status</th>
                  <th className="product-name wl-text fw-normal hide-element">Add To Cart</th>
                  <th className="product-name wl-text fw-normal ">Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItem.map((product)=>(
                  <tr key={product.id}>
                    <td className="d-flex align-items-center gap-3 text-start">
                      <img src={product.image} 
                      alt={product.image}
                      width={80}
                      height={80}
                      className="border rounded"
                       />
                       <p className="product-name wl-name m-0">{product.name}</p>
                       {/* <p className="mb-0 text-muted wl-name" style={{fontSize:'14px'}}>
                        {product.description || 'short description here'}
                        </p> */}
                    </td>
                    <td className="product-name fs-6">${product.price}</td>
                    <td className="text-success hide-element">In Stock</td>
                    <td>
                      <button className="btn btn-success wl-btn">
                        <span className="hide-element">
                          <i className="ri-shopping-cart-line me-2"></i>Add to Cart
                          { <i className="ri-shopping-cart-line me-2 small-screen-icon"></i> }
                        </span>
                      </button>
                    </td>
                    <td>
                      <button className="remove-cart-btn">
                        <i className="ri-delete-bin-line"
                        onClick={()=>removeFromWishlist(product.id)}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default Wishlist