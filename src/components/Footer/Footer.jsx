import React from 'react'
import { Link } from 'react-router'

import payment from "./../../assets/payment.png"

const Footer = () => {
  return (
    <div className="footer text-light py-5 footer-bg">
  <div className="container">
    <div className="row gy-4">
      {/* Contact Info */}
      <div className="col-12 col-lg-3 text-center text-lg-start">
        <h5 className="fw-bold">Contact Us</h5>
        <p><i className="ri-map-pin-2-fill me-2"></i>123 Main Street, Springfield, USA</p>
        <p><i className="ri-phone-fill me-2"></i>(+91) 9876543210</p>
        <p><i className="ri-mail-fill me-2"></i>Example@info.com</p>
      </div>

      {/* Logo + About + Social + Links */}
      <div className="col-12 col-lg-6 text-center">
        <div className="logo navbar-brand footer-logo mb-2">
          <Link to="/" className="text-decoration-none">Leaf<span>Craft</span></Link>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos.</p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 my-3 footer-social flex-wrap">
          <i className="ri-facebook-fill"></i>
          <i className="ri-twitter-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-youtube-fill"></i>
        </div>

        {/* Footer Navigation Links */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a href="#" className="text-decoration-none text-white">Information</a>
          <a href="#" className="text-decoration-none text-white">Contact Us</a>
          <a href="#" className="text-decoration-none text-white">Privacy Policy</a>
          <a href="#" className="text-decoration-none text-white">About Us</a>
          <a href="#" className="text-decoration-none text-white">FAQs</a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="col-12 col-lg-3 text-center text-lg-start">
        <h5 className="fw-bold">OUR NEWSLETTER</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="input-group mt-3">
          <input type="email" className="form-control position-relative rounded" placeholder="Email" />
          <i className="ri-mail-ai-line position-absolute send-mail-icon"></i>
        </div>
      </div>
    </div>

    {/* Footer Bottom Row */}
    <div className="row mt-5 pt-3 footer-bottom align-items-center text-center text-lg-start">
      <div className="col-12 col-lg-6 mb-3 mb-lg-0">
        <p className="mb-0">
          © copyright 2025. All rights reserved By <a href="#" className="text-white">Suvadip Majhi</a>
        </p>
      </div>
      <div className="col-12 col-lg-6 text-center text-lg-end">
        <img src={payment} className="img-fluid" style={{ maxHeight: '40px' }} alt="Payment Methods" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer