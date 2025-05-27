import React, {useContext, useState} from "react";
import { Link } from "react-router";
import {WishlistContext} from './../WishlistContextProvider'
import { CartContext } from "../CartContextProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import products from "./../../Products.json";



function Nav(){

  const {wishlistItem} = useContext(WishlistContext);
  const wishlistCount = wishlistItem.length;
  const {cartItem} = useContext(CartContext);
  const cartCount = cartItem.length;

 
    return (
      <>
        {/* navbar */}
        <div className="nav w-100 fixed-top top-0 start-0 bg-light shadow-sm">
          <nav className="navbar navbar-expand-lg w-100">
            <div className="container-fluid">
              {/* Logo */}
              <div className="logo navbar-brand">
                <Link to="./" className="text-decoration-none">
                  Leaf<span>Craft</span>
                </Link>
              </div>

              {/* Nav Icons for small screens only */}
              <div className="nav-icons d-flex d-lg-none justify-content-center align-items-center gap-3">
                   
                <a href="#">
                  <i className="bi bi-search"></i>
                </a>
                <a href="#">
                  <i className="bi bi-person"></i>
                </a>
                <Link to='/wishlist' className="position-relative">
                  <i className="bi bi-heart"></i>
                  <span className="wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {wishlistCount}
                  </span>
                </Link>
                <Link to='/cart' className="position-relative">
                  <i className="bi bi-bag"></i>
                  <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2">
                    {cartCount}
                  </span>
                </Link>
              </div>

              {/* Hamburger Menu */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar Links */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto d-flex align-items-lg-center gap-lg-3">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                  {/* Nav Icons for desktop only */}
                  <li className="nav-item ms-4 menu-nav-icon">
                    <div className="nav-icons d-none d-lg-flex justify-content-center align-items-center gap-3">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                      >
                        <i className="bi bi-search"></i>
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                      >
                        <i className="bi bi-person"></i>
                      </a>
                      <Link to='/wishlist'className="position-relative">
                        <i className="bi bi-heart"></i>
                        <span className="wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2">
                          {wishlistCount}
                        </span>
                      </Link>
                      <Link to='/cart' className="position-relative">
                        <i className="bi bi-bag"></i>
                        <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2">
                          {cartCount}
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* sign-up modal */}

        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-header border-0">
                <h5
                  className="modal-title sign-up-title fw-bold"
                  id="signupModalLabel"
                >
                  Sign Up
                </h5>
                <button
                  type="button"
                  className="btn-close close-modal"
                  data-bs-dismiss="modal"
                  aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control border shadow-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control border shadow-sm"
                      placeholder="Enter Email address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control border shadow-sm"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <p className="terms text-muted">
                    By Signup, you agree to our <a href="#">Terms of Service</a>{" "}
                    & <a href="#">Privacy Policy</a>
                  </p>
                  <button
                    type="submit"
                    className="btn text-white btn-signup w-100"
                  >
                    Sign Up
                  </button>
                </form>
                <div className="text-center mt-3">
                  <p className="mb-0 terms">
                    Already have an Account?{" "}
                    <a href="#" className="fw-bold">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* search */}

        <div
          className="modal fade"
          id="searchModal"
          tabIndex="-1"
          aria-labelledby="searchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-header border-0">
                <h5
                  className="modal-title sign-up-title fw-bold"
                  id="signupModalLabel"
                >
                  Search
                </h5>
                <button
                  type="button"
                  className="btn-close close-modal search-close"
                  data-bs-dismiss="modal"
                  aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control border shadow-sm"
                      placeholder="Search for products..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </>
    );
}

export default Nav;