import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
    <div id='navBar'>
      <nav class="navbar navbar-expand-lg bg-danger fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="/">
            I am <span className='navBar_span' > Developer </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light " href="#home">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light " href="#about">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light " href="#project_component">
                  Projects
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link text-light " href="#contact">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
