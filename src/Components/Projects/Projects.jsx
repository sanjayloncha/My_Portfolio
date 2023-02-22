import React from "react";
import domino from "./Project_pic/Domino.JPG";
import cloth from "./Project_pic/Bawakoof.JPG";
import tic from "./Project_pic/Tic-Toc-Toe.JPG";
import movie from "./Project_pic/Movie.JPG";
import "./Project.css";

export default function Projects() {
  return (
    <div id="project_component">
      <div className="container mx-auto text-center my-5">
        <div className="row mx-auto text-center">
          <div
            className="display-5 mx-auto text-center mt-2 mb-4 "
            id="project_main_heading"
          >
            Projects
          </div>
          <div data-aos="fade-right" data-aos-duration="500"  data-aos-easing="ease-in-out" className="col-10 col-lg-6 my-2 mx-auto text-center">
            <div class="card ">
              <img
                src={domino}
                class="card-img-top img-fluid mx-auto text-center "
                alt="Domino"
              />
              <div class="card-body">
                <h5 class="card-title">Domino Clone</h5>
                <p class="card-text lead">
                  This is food order and delivery app. User can search for different types of pizza he/she want and put them into cart for placing order. This was group project build in a week.
                  Following are the tech stack we have used to build this app: <br /> 
                  <span>HTML, CSS, JavaScript, React, Redux, ChakraUI, github. </span>
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  {" "}
                  <a href="https://github.com/sanjayloncha/Domino-s_Clone" target="_blank" class="btn btn-dark mx-2">
                    <i class="fa-brands fa-github mx-2 "></i>Github
                  </a>
                  <a href="https://startling-kitsune-fc132d.netlify.app/" target="_blank" class="btn btn-dark ">
                    <i class="fa-solid fa-code me-3"></i>Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="500"  data-aos-easing="ease-in-out" className="col-10 col-lg-6 my-2 mx-auto text-center">
            <div class="card ">
              <img
                src={movie}
                class="card-img-top img-fluid mx-auto text-center"
                alt="movie"
              />
              <div class="card-body">
                <h5 class="card-title">Movie Search App</h5>
                <p class="card-text lead">
                  This is movie search site, user can search for any movie and also add them to favourite. This was a solo project build in 2 days. 
                  These are the tech stack I have used to build this site : HTML, CSS, JS, ReactJS, Redux, Chakra UI .
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  {" "}
                  <a href="https://github.com/sanjayloncha/myMovieApp" target="_blank" class="btn btn-dark mx-2">
                    <i class="fa-brands fa-github mx-2 "></i>Github
                  </a>
                  <a href="https://mymovie-search-app.netlify.app/" target="_blank" class="btn btn-dark ">
                    <i class="fa-solid fa-code me-3"></i>Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="500"  data-aos-easing="ease-in-out" className="col-10 col-lg-6 my-2 mx-auto text-center">
            <div class="card ">
              <img
                src={tic}
                class="card-img-top img-fluid mx-auto text-center "
                alt="tic"
              />
              <div class="card-body">
                <h5 class="card-title">Tic Tac Toe</h5>
                <p class="card-text lead">
                  This is a simple tic-tac-toe game which everyone might have played in thier childhood.
                  two user can play this game off-line and enjoy in thier free time.
                  I have build this game using plane JavaScript (vanillaJS).
                  Following are the tech-stack I have used in this : HTML,CSS and JavaScript.
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  {" "}
                  <a href="https://github.com/sanjayloncha/tic-tac-toe" target="_blank" class="btn btn-dark mx-2">
                    <i class="fa-brands fa-github mx-2 "></i>Github
                  </a>
                  <a href="https://sanjaytictactoe.netlify.app/" target="_blank" class="btn btn-dark ">
                    <i class="fa-solid fa-code me-3"></i>Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="500"  data-aos-easing="ease-in-out" className="col-10 col-lg-6 my-2 mx-auto text-center">
            <div class="card ">
              <img
                src={cloth}
                class="card-img-top img-fluid mx-auto text-center"
                alt="Cloth"
              />
              <div class="card-body">
                <h5 class="card-title">E-comm Shopping App</h5>
                <p class="card-text lead">
                  This is e-comm shopping site. This was a group project build in a week. From this site user can look for different men and women clothes and order them accordingly. These are the tech-stack we have used in this site : HTML, CSS, Javascript, React, Redux, Chakra UI, Github, Netlify.
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  {" "}
                  <a href="https://github.com/sanjayloncha/Bewakoof_Clone" target="_blank" class="btn btn-dark mx-2">
                    <i class="fa-brands fa-github mx-2 "></i>Github
                  </a>
                  <a href="https://bewakoof-clone6.netlify.app/" target="_blank" class="btn btn-dark ">
                  <i class="fa-solid fa-code me-3"></i>Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
