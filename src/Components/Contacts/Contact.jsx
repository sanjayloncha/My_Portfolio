import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div
        className="container-fluid p-5 bg-dark text-light"
        id="contact_container"
      >
        <h3 className="display-5 text-center  py-2">Contact Me</h3>
        <p className="lead text_just mb-4 fs-4 footer_para">
          Want to talk about a project collaboration, or want to get in touch or
          just say hi, I'd love to hear from you.
        </p>
        <hr />
        <div className="row  mx-auto text-center ">
          <div className="col-3 mx-auto text-center  col-md-6 my-2 col-lg-3">
            <span>
              <a
                href="https://github.com/sanjayloncha"
                target="_blank"
                className="btn btn-outline-light "
              >
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </span>
          </div>
          <div className=" col-3 mx-auto text-center col-md-6 my-2 col-lg-3">
            <span>
              <a
                href="https://www.linkedin.com/in/sanjay-loncha/"
                target="_blank"
                className="btn btn-outline-light"
              >
                <i className="fa-brands fa-linkedin-in fa-2x "></i>
              </a>
            </span>
          </div>
          <div className="col-3 mx-auto text-center col-md-6 my-2 col-lg-3">
            <span>
              <a
                href="tel:+919773103282"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline-light "
              >
                <i className="fa-solid fa-phone fa-2x "></i>
              </a>
            </span>
          </div>
          <div className="col-3 border-0 mx-auto text-center col-md-6 my-2 col-lg-3">
            <span>
              <a
                href="mailto:sanjayloncha3101@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline-light "
              >
                <i className="fa-solid fa-envelope fa-2x "></i>
              </a>
            </span>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}
