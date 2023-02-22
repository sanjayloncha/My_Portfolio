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
        <p className="lead text-center mb-4 fs-4 ">
          Want to talk about a project collaboration, or want to get in touch or
          just say hi, I'd love to hear from you.
        </p>
        <hr />
        <div className="row  mx-auto text-center ">
          <div className="col-11 mx-auto text-center  col-md-6 my-2 col-lg-2">
            <span>
              <a
                href="https://github.com/sanjayloncha"
                target="_blank"
                class="btn btn-outline-light "
              >
                <i class="fa-brands fa-github mx-2 "></i>Github
              </a>
            </span>
          </div>
          <div className=" col-11 mx-auto text-center col-md-6 my-2 col-lg-3">
            <span>
              <a
                href="https://www.linkedin.com/in/sanjay-loncha/"
                target="_blank"
                class="btn btn-outline-light mx-2"
              >
                <i class="fa-brands fa-linkedin-in mx-2 "></i>Linked-In
              </a>
            </span>
          </div>
          <div className="col-11 mx-auto text-center col-md-6 my-2 col-lg-3">
            <span>
              <a
                href="tel:+919773103282"
                rel="noreferrer"
                target="_blank"
                class="btn btn-outline-light mx-2"
              >
                <i class="fa-solid fa-phone mx-2 "></i>+91 977 310 3282
              </a>
            </span>
          </div>
          <div className="col-12 mx-auto text-center col-md-6 my-2 col-lg-4">
            <span>
              <a
                href="mailto:sanjayloncha3101@gmail.com"
                rel="noreferrer"
                target="_blank"
                class="btn btn-outline-light mx-1"
              >
                <i class="fa-solid fa-envelope mx-1 "></i>sanjayloncha3101@gmail
              </a>
            </span>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}
