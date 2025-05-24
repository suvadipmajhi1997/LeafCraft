import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import {WishlistContext} from './../WishlistContextProvider'
import { CartContext } from "./../CartContextProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import products from "./../../Products.json";


import service1 from "./../../assets/service-icon1.svg";
import service2 from "./../../assets/service-icon2.svg";
import service3 from "./../../assets/service-icon3.svg";
import service4 from "./../../assets/service-icon4.svg";
import subBanner1 from "./../../assets/sub-banner-1-1.jpg";
import subBanner2 from "./../../assets/sub-banner-2-1.jpg";
import about_hero from "./../../assets/about-img-1.jpg";
import about1 from "./../../assets/about-svg-1.svg";
import about2 from "./../../assets/about-svg-2.svg";
import about3 from "./../../assets/about-svg-3.svg";
import cmsBanner1 from "./../../assets/cms-banner-1.jpg";
import cmsBanner2 from "./../../assets/cms-banner-1.jpg";
import user1 from "./../../assets/user1.jpg";
import user2 from "./../../assets/user2.jpg";
import user3 from "./../../assets/user3.jpg";
import blog1 from "./../../assets/blog-1.jpeg";
import blog2 from "./../../assets/blog-2.jpeg";
import blog3 from "./../../assets/blog-3.jpeg";
import blog4 from "./../../assets/blog-4.jpeg";
import blog5 from "./../../assets/blog-5.jpeg";
import blog6 from "./../../assets/blog-6.jpeg";
import brand1 from "./../../assets/brand-1.png";
import brand2 from "./../../assets/brand-2.png";
import brand3 from "./../../assets/brand-3.png";
import brand4 from "./../../assets/brand-4.png";
import brand5 from "./../../assets/brand-5.png";
import brand6 from "./../../assets/brand-3.png";

// product details
const Index = () => {

  const {addToWishlist} = useContext(WishlistContext);
  const {addToCart} = useContext(CartContext);

  const handelAddToCart =(product)=>{
    const productWithNumber = {
      ...product,
      price: parseFloat(product.price),
      offerPrice:parseFloat(product.offerPrice),
    };
    addToCart(productWithNumber);
  };


  const [selectedProduct, setSelectProduct] = useState(null);

  const handelProductClick = (product) => {
    setSelectProduct(product);
    const modal = new window.bootstrap.Modal(
      document.getElementById("productModal")
    );
    modal.show();
  };

  // count quantity
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
    {/* hero */}
      <div className="hero">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 4000, // Slide will change every 4 seconds
            disableOnInteraction: false, // Keeps autoplay after user interacts
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1 position-relative">
              <div className="hero-content position-absolute">
                <h3>Hot Sale 50% Discount</h3>
                <h1>
                  Green Indoor Plant
                  <br /> For Home Decore
                </h1>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, placeat perferendis.
                </p>
                <a href="#" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2 position-relative">
              <div className="hero-content position-absolute">
                <h3>Hot Sale 50% Discount</h3>
                <h1>
                  Colorful Plant Pots
                  <br /> For Home Decore
                </h1>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, placeat perferendis.
                </p>
                <a href="#" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-button-prev swiper-btn swiper-prev">
          <i className="ri-arrow-left-long-line"></i>
        </div>
        <div className="swiper-button-next swiper-btn swiper-next">
          <i className="ri-arrow-right-long-line"></i>
        </div>
      </div>

      {/* services */}
<div className="services py-5 mt-5 mt-sm-5">
  <div className="container">
    <div className="row">
      <div className="section-title col-12 text-center mb-4">
        <h2 className="">What We Do</h2>
        <h1 className="fw-bold">Our Services</h1>
      </div>
    </div>

    <div className="row g-4">
      {/* Service Item 1 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="service-box d-flex flex-column justify-content-center align-items-center text-center h-100 p-3">
          <div className="service-img mb-3">
            <img src={service1} className="img-fluid" alt="Pick Your Plant" />
          </div>
          <div className="service-box-info">
            <h3 className="h5 fw-bold">Pick Your Plant</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      {/* Service Item 2 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="service-box d-flex flex-column justify-content-center align-items-center text-center h-100 p-3">
          <div className="service-img mb-3">
            <img src={service2} className="img-fluid" alt="Choose A Pot Color" />
          </div>
          <div className="service-box-info">
            <h3 className="h5 fw-bold">Choose A Pot Color</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      {/* Service Item 3 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="service-box d-flex flex-column justify-content-center align-items-center text-center h-100 p-3">
          <div className="service-img mb-3">
            <img src={service3} className="img-fluid" alt="Have It Shipped" />
          </div>
          <div className="service-box-info">
            <h3 className="h5 fw-bold">Have It Shipped</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      {/* Service Item 4 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="service-box d-flex flex-column justify-content-center align-items-center text-center h-100 p-3">
          <div className="service-img mb-3">
            <img src={service4} className="img-fluid" alt="Watch It Grow" />
          </div>
          <div className="service-box-info">
            <h3 className="h5 fw-bold">Watch It Grow</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* banners */}
      <div className="banners py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <img
                src={subBanner1}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content position-absolute">
                <h3>Farm Snake Plant</h3>
                <h1>
                  Greenery Nursery
                  <br />
                  Snake Plant
                </h1>
                <button className="btn banner-btn mt-2">Shop Now</button>
              </div>
            </div>
            <div className="col-lg-6 position-relative banner-mt">
              <img
                src={subBanner2}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content banner-content2 position-absolute">
                <h3>Up to 25% Discount </h3>
                <h1>
                  Buy Zamioculcas
                  <br />
                  Zamiifolia
                </h1>
                <button className="btn banner-btn mt-2">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product slider */}

      <div className="container mt-5 pb-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>New Products</h2>
            <h1>Latest Products</h1>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-4 swiper"
        >
          {products
            .filter((product) => product.id >= 5 && product.id <= 10)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card text-center border rounded">
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
                      <i className="bi bi-heart"
                      role="button"
                      onClick={()=>{
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          inStock: true
                        });
                        toast.success(`Added to Wishlist`)
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
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="swiper-button-prev product-swiper-btn product-swiper-prev swiper-btn">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-button-next product-swiper-btn product-swiper-next swiper-btn">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>

      {/* product popup modal */}

      <div className="modal fade"
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur tempore at culpa natus inventore officiis rem
                      ea nobis vitae id.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/*About  */}
      <div className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={about_hero} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 about-content">
            <div className="section-title about-title">
              <h2>About Plants</h2>
              <h1>WE OFFER LANDSCAPE AND TREE PLANTATION</h1>
            </div>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium vel est laboriosam labore voluptatibus ex!
            </p>
            <div className="row mt-4">
              <div className="col-sm-4 text-center d-flex flex-column align-items-center">
                <div className="about-svg">
                  <img src={about1} className="image-fluid" alt="" />
                </div>
                <h5 className="about-text mt-2 fw-bold">PLANT WATERING</h5>
                <p className="text-muted about-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-sm-4 text-center d-flex flex-column align-items-center">
                <div className="about-svg about-svg2">
                  <img src={about2} className="image-fluid" alt="" />
                </div>
                <h5 className="about-text mt-2 fw-bold">POTTED PLANT</h5>
                <p className="text-muted about-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-sm-4 text-center d-flex flex-column align-items-center">
                <div className="about-svg about-svg3">
                  <img src={about3} className="image-fluid" alt="" />
                </div>
                <h5 className="about-text mt-2 fw-bold">PLANT ECOLOGY</h5>
                <p className="text-muted about-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* parallax banner */}
      <div className="parallax-banner d-flex align-items-center justify-content-center ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column align-items-start">
              <div className="section-title d-flex flex-column align-items-start justify-content-center">
                <h2>Hot Sale 30% Discount</h2>
                <h1>Potted Plant With <br/>
                  Pot Grey 6cm
              </h1>
              </div>
              <p className="my-3 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolor?</p>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* popular product slider */}
      <div className="container mt-5 pb-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>New Products</h2>
            <h1>Popular Products</h1>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-4 swiper"
        >
          {products
            .filter((product) => product.id >= 2 && product.id <= 8)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card text-center border rounded">
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
                      <i className="bi bi-heart"
                      role="button"
                      onClick={()=>{
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          inStock: true
                        });
                        toast.success(`Added to Wishlist`)
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
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="swiper-button-prev product-swiper-btn product-swiper-prev swiper-btn">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-button-next product-swiper-btn product-swiper-next swiper-btn">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>

      {/* banners */}
      <div className="banners py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <img
                src={cmsBanner1}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content position-absolute">
                <h3>Flat 20% Discount</h3>
                <h1>
                  The Elliot Modular
                  <br />
                  Planters
                </h1>
                <button className="btn banner-btn mt-2">Shop Now</button>
              </div>
            </div>
            <div className="col-lg-6 position-relative banner-mt">
              <img
                src={cmsBanner2}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content banner-content2 position-absolute">
                <h3>We're Spring Plant</h3>
                <h1>
                  Cloud Farm Peace
                  <br />
                  Lily Plant
                </h1>
                <button className="btn banner-btn mt-2">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* top rated product slider */}
      <div className="container mt-5 pb-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>Top Rated Products</h2>
            {/* <h1>Popular Products</h1> */}
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-4 swiper"
        >
          {products
            .filter((product) => product.id >= 8 && product.id <= 16)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card text-center border rounded">
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
                      <i className="bi bi-heart"
                      role="button"
                      onClick={()=>{
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          inStock: true
                        });
                        toast.success(`Added to Wishlist`)
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
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="swiper-button-prev product-swiper-btn product-swiper-prev swiper-btn">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-button-next product-swiper-btn product-swiper-next swiper-btn">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>

      {/* testimonials */}

      <div className="testimonial d-flex align-items-center">
        <div className="testimonial-wrap container text-center my-5">
          <div className="text-success mb-3">
            <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
            delay: 4000, // Slide will change every 4 seconds
            disableOnInteraction: false, // Keeps autoplay after user interacts
          }}
            >
              <SwiperSlide>
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde incidunt iure eum cupiditate recusandae.
                   Impedit necessitatibus rerum obcaecati repudiandae culpa architecto alias placeat illum explicabo?
                </p>
                <div className="text-card d-flex justify-content-center my-4">
                  <img src={user1} 
                  roundedCircle
                  width={80}
                  height={80}
                  className="shadow-sm"
                  alt="" />
                </div>
                <h5 className="fw-bold">Jhone Doe</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
              <SwiperSlide>
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde incidunt iure eum cupiditate recusandae.
                   Impedit necessitatibus rerum obcaecati repudiandae culpa architecto alias placeat illum explicabo?
                </p>
                <div className="text-card d-flex justify-content-center my-4">
                  <img src={user2} 
                  roundedCircle
                  width={80}
                  height={80}
                  className="shadow-sm"
                  alt="" />
                </div>
                <h5 className="fw-bold">Jhone Doe</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
              <SwiperSlide>
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde incidunt iure eum cupiditate recusandae.
                   Impedit necessitatibus rerum obcaecati repudiandae culpa architecto alias placeat illum explicabo?
                </p>
                <div className="text-card d-flex justify-content-center my-4">
                  <img src={user3} 
                  roundedCircle
                  width={80}
                  height={80}
                  className="shadow-sm"
                  alt="" />
                </div>
                <h5 className="fw-bold">Jhone Doe</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
              <SwiperSlide>
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde incidunt iure eum cupiditate recusandae.
                   Impedit necessitatibus rerum obcaecati repudiandae culpa architecto alias placeat illum explicabo?
                </p>
                <div className="text-card d-flex justify-content-center my-4">
                  <img src={user1} 
                  roundedCircle
                  width={80}
                  height={80}
                  className="shadow-sm"
                  alt="" />
                </div>
                <h5 className="fw-bold">Jhone Doe</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* blog */}

      <div className="blog py-5 my-5">
        <div className="container">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>From The Blog</h2>
            <h1>Our Latest Blog</h1>
          </div>
          <div className="row mt-5 position-relative">
            <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              nextEl:".blog-button-next",
              prevEl:".blog-button-prev",
            }}
            breakpoints={{
              1399:{slidesPerView: 4},
              991:{slidesPerView: 3},
              767:{slidesPerView: 1},
              0:{slidesPerView: 1},
            }}
            className="blog-swiper"
            >
              {/* blog 1 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog1} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      May 17 ,2025 <span className="dot">•</span> <span>by editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to write a Blog post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laudantium fuga vitae ullam commodi maxime.</p>
                    <a href="#" className="blog-btn">Read More...</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* blog2 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog2} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      May 17 ,2025 <span className="dot">•</span> <span>by editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to write a Blog post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laudantium fuga vitae ullam commodi maxime.</p>
                    <a href="#" className="blog-btn">Read More...</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* blog3 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog3} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      May 17 ,2025 <span className="dot">•</span> <span>by editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to write a Blog post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laudantium fuga vitae ullam commodi maxime.</p>
                    <a href="#" className="blog-btn">Read More...</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* blog4 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog4} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      May 17 ,2025 <span className="dot">•</span> <span>by editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to write a Blog post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laudantium fuga vitae ullam commodi maxime.</p>
                    <a href="#" className="blog-btn">Read More...</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* blog5 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog5} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      May 17 ,2025 <span className="dot">•</span> <span>by editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to write a Blog post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laudantium fuga vitae ullam commodi maxime.</p>
                    <a href="#" className="blog-btn">Read More...</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* blog6 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog6} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      May 17 ,2025 <span className="dot">•</span> <span>by editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to write a Blog post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laudantium fuga vitae ullam commodi maxime.</p>
                    <a href="#" className="blog-btn">Read More...</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev blog-swiper-btn blog-button-prev swiper-btn">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-button-next blog-swiper-btn blog-button-next swiper-btn">
          <i className="ri-arrow-right-s-line"></i>
        </div>
          </div>
        </div>
      </div>

      {/* brands */}
      <div className="brands py-5 my-5">
        <div className="container">
          <div className="row">
            <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
            delay: 4000, // Slide will change every 4 seconds
            disableOnInteraction: false, // Keeps autoplay after user interacts
          }}
            breakpoints={{
              1399:{slidesPerView:5},
              911:{slidesPerView:5},
              767:{slidesPerView:3},
              0:{slidesPerView:2},
            }}
            className="brands-swiper"
            >
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand1} alt="" className="img-flud" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand2} alt="" className="img-flud" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand3} alt="" className="img-flud" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand4} alt="" className="img-flud" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand5} alt="" className="img-flud" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand6} alt="" className="img-flud" />
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>

    </>
  );
};

export default Index;
