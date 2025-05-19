import React from 'react'

import about_banner1 from "./../../assets/about-banner-01.jpg";
import about_banner2 from "./../../assets/about-banner-02.jpg";
import about_banner3 from "./../../assets/about-banner-03.jpg";
import about_banner4 from "./../../assets/about-banner-04.jpg";
import about_banner5 from "./../../assets/about-banner-05.png";

import { Link } from 'react-router';

function About() {
  return (
    <>
      <div className="page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Hom</Link>/About
        </p>
        <h2 className="fw-bold">About</h2>
      </div>

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={about_banner1}
              className="img-fluid w-100 h-100 object-fit-cover"
              alt=""
              style={{ minHeight: "100%" }}
            />
          </div>

          <div className="col-md-6">
            <div className="row mb-3">
              <div className="col-12">
                <img
                  src={about_banner2}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt=""
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img
                  src={about_banner3}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt=""
                  style={{ minHeight: "100%" }}
                />
              </div>
              <div className="col-6">
                <img
                  src={about_banner4}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt=""
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-4 mb-md-0 opportunities-title">
              <h2 className="mb-3">
                INSPIRATION, INNOVATION, <br />
                AND OPPORTUNITIES.
              </h2>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Beatae, aut?
              </p>
              {/* Accordion Starts */}
              <div className="accordion" id="businessAccordion">
                {/* Accordion Item 1 */}
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      style={{ backgroundColor: "white", boxShadow: "none" }}
                    >
                      Business's vision
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#businessAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse iusto incidunt sint aperiam enim fugiat officia
                      animi? Quos, sed saepe!
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      style={{ backgroundColor: "white", boxShadow: "none" }}
                    >
                      Our vision
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#businessAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse iusto incidunt sint aperiam enim fugiat officia
                      animi? Quos, sed saepe!
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      style={{ backgroundColor: "white", boxShadow: "none" }}
                    >
                      Our Support
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#businessAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quasi, neque nostrum deserunt eos sint tenetur fuga. Ullam
                      magni nihil laboriosam.
                    </div>
                  </div>
                </div>
              </div>
              {/* Accordion Ends */}
            </div>

            <div className="col-xl-6 text-center">
              <img src={about_banner5} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="about_card card text-center border-0">
              <div className="mb-3">
                <i className="bi bi-check-square fs-1 text-success"></i>
              </div>
              <h5 className="fw-normal">SUBMIT A TASK</h5>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about_card card text-center border-0">
              <div className="mb-3">
                <i className="bi bi-check-square fs-1 text-success"></i>
              </div>
              <h5 className="fw-normal">SEND MESSAGE</h5>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about_card card text-center border-0">
              <div className="mb-3">
                <i className="bi bi-check-square fs-1 text-success"></i>
              </div>
              <h5 className="fw-normal">TRUSTED EXPERIENCE</h5>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats_section text-white text-center py-5 my-3">
        <div className="container my-5 py-3">
          <div className="row justify-content-center">
            <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
              <h2>18+</h2>
              <p>Years</p>
            </div>
            <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
              <h2>200+</h2>
              <p>Employee</p>
            </div>
            <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
              <h2>85%</h2>
              <p>Page views</p>
            </div>
            <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
              <h2>27+</h2>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-5 py-5">
        <p className="text-muted mb-2">Contact us</p>
        <h2 className="fw-bold text-uppercase mb-4">About Us Info</h2>
        <p className="text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quisquam odit hic, quaerat laboriosam assumenda natus enim? Sunt
          dignissimos magni adipisci maiores architecto quo necessitatibus,
          accusantium, quisquam unde perspiciatis qui.
        </p>
        <a href="#contact" className="contact_btn px-4 py-2">
          CLICK HERE TO CONTACT US
        </a>
      </div>
    </>
  );
}

export default About