import React from "react";
import "./Home.css"

export default function Home() {
  return (
    <div id="home" >
      <div className="container mx-auto home__bg d-flex ">
      <div className="row d-flex align-items-center">
        <div className="col-11  col-md-7  mx-auto order-2 ">
          <h1>Hi, I'm <span className='hero_name' > Sanjay Loncha </span></h1>
          <p className="fs-5">
            I am Front-end Web Developer and i have knowledge in HTML, CSS, JS,
            REACT, Redux, Node.js and make user-friendly websites.
          </p>
          <a href="https://drive.google.com/file/d/1PG8ztq2evHMEoK63lGM2NX8ksy8RdMs8/view?usp=sharing" target="blank" className="btn btn-dark fs-5 ">
            Download cv <i class="fa-regular fa-circle-down mx-2 m-0"></i>
          </a>
        </div>
        <div className="col-11  col-md-5  mx-auto my-3 order-1 ">
          <div className="img__container  mx-auto ">
            <img
              src="https://avatars.githubusercontent.com/u/71871677?v=4"
              alt=""
              className=" img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
