import React from 'react'
import { Link } from 'react-router';

function Contact() {
  return (
    <>
      <div className="page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link>/Contact
        </p>
        <h2 className="fw-bold">Contact</h2>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 map">
            <iframe
              title="Google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29640.63325650305!2d87.7292629445163!3d21.777197227479096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0326e5394d8237%3A0x7bb6b4d525857f71!2sContai%2C%20West%20Bengal%20721401!5e0!3m2!1sen!2sin!4v1747922369528!5m2!1sen!2sin"
              height="500px"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-lg-4 bg-light p-4 contact-form">
            <h4 className="fw-bold">GET IN TOUCH WITH US</h4>
            <p className="text-muted">if you wish to directly reach us, please fill out the form bellow -</p>
            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder=""
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-20">Submit</button>
            </form>
          </div>
        </div>

        <div className="row mt-5 p-4 contact-info">
          <div className="col-md-6 col-lg-3 contact-icons">
            <i className="bi bi-geo-alt-fill text-success"></i>
            <p>123 Main Street, Springfield, USA</p>
          </div>

          <div className="col-md-6 col-lg-3 contact-icons">
            <i className="bi bi-telephone-fill text-success"></i>
            <p>
              Call us: <br />
              (+91) 9876543210
            </p>
          </div>

          <div className="col-md-6 col-lg-3 contact-icons">
            <i className="bi bi-envelope-fill text-success"></i>
            <p>
              Mail us: <br />
              Info@example.com
            </p>
          </div>

          <div className="col-md-6 col-lg-3 contact-icons">
            <i className="bi bi-clock-fill text-success"></i>
            <p>
              Open Time: <br />
              10:00AM - 06:00PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact