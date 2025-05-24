
import { Link } from 'react-router';
import React, {useContext, useState } from "react";
import products from "./../../Products.json";
import {WishlistContext} from './../WishlistContextProvider'
import { CartContext } from '../CartContextProvider';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function Shop() {
    
    const {addToWishlist} = useContext(WishlistContext);
    const {addToCart} = useContext(CartContext);
    const [selectedProduct, setSelectProduct] = useState(null);
    const [visibleCount, setVisibleCount] =useState(12);
    const initialCount = 12;
  
    const handelProductClick = (product) => {
      setSelectProduct(product);
      const modal = new window.bootstrap.Modal(
        document.getElementById("productModal")
      );
      modal.show();
    };

      const [quantity, setQuantity] = useState(1);
    
      const handelDecrease = () => {
        if (quantity > 1) {
          setQuantity((count) => count - 1);
        }
      };
      const handelIncrease = () => {
        setQuantity((count) => count + 1);
      };

  return (
    <>
      <div className="page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link>/Shop
        </p>
        <h2 className="fw-bold">Shop</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-head d-flex align-items-center justify-content-center">
              <div className="total-product">
                <p>
                  Showing All <strong>Product</strong> For you!
                </p>
              </div>
            </div>

            <div className="sort-by-product">
              <div className="short-by-cover d-flex gap-3">
                <div className="sort-by-product-wrap position-relative">
                  <div className="sort-by">
                    <span className="toggleDropdown">
                      <i className="ri-apps-line"></i> Show: 50
                    </span>
                  </div>
                </div>
                <div className="sort-by-product-wrap position-relative">
                  <div className="sort-by">
                    <span className="toggleDropdown">
                      <i className="ri-apps-line"></i> Sort by: Featured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* all product */}
          <div className="row mt-5">
            {products.slice(0, visibleCount).map((product) => (
              <div className="col-lg-3 col-md-6 mb-4 product-card text-center rounded">
                <div className="position-relative product-img-container">
                  <img
                    src={product.image}
                    className="img-fluid product-img main-img"
                    alt={product.name}
                  />
                  <img
                    src={product.secondImage}
                    className="img-fluid product-img hover-img"
                    alt={product.name}
                  />
                  <div className="product-option position-absolute">
                    <i
                      className="bi bi-heart"
                      role="button"
                      onClick={() => {
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          inStock: true,
                        });
                        toast.success(`Added to Wishlist`);
                      }}
                    ></i>
                  </div>
                  <button className="btn add-cart-btn position-absolute"
                  onClick={()=>{
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          quantity:1,
                        });
                        toast.success(`Added to Cart Successfully`)
                      }}
                  >
                    ADD TO CART
                  </button>
                </div>
                <div
                  className="product-info mt-1 p-3"
                  onClick={() => handelProductClick(product)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="mt-3">{product.name}</h5>
                  <div className="text-warning mb-2 stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <div className="product-price mb-1">
                    <span className="text-muted text-decoration-line-through">
                      ${product.offerPrice}
                    </span>
                    <span className="text-success fw-bold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="modal fade"
            id="productModal"
            tabIndex="-1"
            aria-labelledby="ProductModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content p-3">
                {selectedProduct && (
                  <>
                    <div className="modal-body d-flex flex-column flex-md-row gap-1">
                      <div className="col-md-6">
                        <img
                          src={selectedProduct.image}
                          className="img-fluid rounded border"
                          alt={selectedProduct.name}
                        />
                      </div>
                      <button
                        type="btn"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                      <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="modal-header p-0 border-0">
                          <h5
                            className="modal-title product-title"
                            id="productModalLabel"
                          >
                            {selectedProduct.name}
                          </h5>
                        </div>
                        <div className="d-flex gap-1 text-warning mb-2">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                        </div>
                        <p className="text-muted small">
                          {selectedProduct.description}
                        </p>
                        <h4 className="text-success fw-bold">
                          ${selectedProduct.price}{" "}
                          <span className="text-muted text-decoration-line-through fs-6 fw-normal">
                            ${selectedProduct.offerPrice}
                          </span>
                        </h4>
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="d-flex border rounded align-items-center"
                            style={{ width: "100px", height: "40px" }}
                          >
                            <span
                              className="px-2"
                              style={{ cursor: "pointer" }}
                              onClick={handelDecrease}
                            >
                              -
                            </span>
                            <span className="flex-grow-1 text-center border-start border-end">
                              {quantity}
                            </span>
                            <span
                              className="px-2"
                              style={{ cursor: "pointer" }}
                              onClick={handelIncrease}
                            >
                              +
                            </span>
                          </div>
                          <button className="btn btn-sucess d-flex align-items-center gap-2 custom-z"
                           onClick={()=>{
                        addToCart({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.image,
                          quantity:1,
                        });
                        toast.success(`Added to Cart Successfully`)
                      }}
                          >
                            <i className="bi bi-basket"></i>Add to Cart
                          </button>
                        </div>
                        <p className="mt-4 product-des">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Aspernatur tempore at culpa natus inventore
                          officiis rem ea nobis vitae id.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center py-5">
              {visibleCount < products.length ? (
                <button
                  className="btn load-more-product"
                  onClick={() => setVisibleCount(products.length)}
                >
                  LOAD MORE
                </button>
              ) : (
                <button
                  className="btn load-more-product"
                  onClick={() => setVisibleCount(initialCount)}
                >
                  LOAD LESS
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop