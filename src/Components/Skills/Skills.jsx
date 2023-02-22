import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="container skill mx-auto my-5"  id="skill">
      {/* <h5 className="text-center skill_main_heading">Skills</h5> */}
      <div className="display-5 mx-auto text-center mt-2 mb-4 ">
            Skills
          </div>
      <div className="my-3 row mx-auto text-center d-flex justify-content-center align-items-center ">
        <div id="skill_card"  data-aos="fade-down" data-aos-duration="500"  data-aos-easing="ease-in-out" className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png"
            className="img-fluid"
            alt="html"
          />
          <div className="card-title img_title">HTML</div>
        </div>{" "}
        <div data-aos="fade-up" data-aos-duration="700"   data-aos-easing="ease-in-out"  className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png"
            className="img-fluid"
            alt="css"
          />
          <div className="card-title img_title ">CSS</div>
        </div>{" "}
        <div  data-aos="fade-down" data-aos-duration="500"   data-aos-easing="ease-in-out"  className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png"
            className="img-fluid"
            alt="JS"
          />
          <div className="card-title img_title ">JS</div>
        </div>{" "}
        <div data-aos="fade-up" data-aos-duration="700"   data-aos-easing="ease-in-out"  className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"
            className="img-fluid"
            alt="React"
          />
          <div className="card-title img_title ">ReactJS</div>
        </div>{" "}
        <div  data-aos="fade-down" data-aos-duration="500"   data-aos-easing="ease-in-out"  className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"
            className="img-fluid"
            alt="Redux"
          />
          <div className="card-title img_title ">Redux</div>
        </div>{" "}
        <div data-aos="fade-up" data-aos-duration="700"   data-aos-easing="ease-in-out" className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"
            className="img-fluid"
            alt="NodeJS"
          />
          <div className="card-title img_title ">Node.js</div>
        </div>{" "}
        <div  data-aos="fade-down" data-aos-duration="500"   data-aos-easing="ease-in-out" className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png"
            className="img-fluid"
            alt="Git"
          />
          <div className="card-title img_title ">Git</div>
        </div>{" "}
        <div data-aos="fade-up" data-aos-duration="700"   data-aos-easing="ease-in-out" className="card  mx-3 my-3" style={{ maxWidth: "100px" }}>
          <img
            src="https://profilinator.rishav.dev/skills-assets/chakraui.png"
            className="img-fluid"
            alt="Chakra-UI"
          />
          <div className="card-title img_title ">Chakra-UI</div>
        </div>{" "}
      </div>
    </div>
  );
}
