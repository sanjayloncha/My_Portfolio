import React from 'react'
import { useState } from 'react'
import "./Nav.css"

export default function Nav() {
 
  return (
    <div id='navBar'>
      <nav id="navTag" className="navbar navbar-expand-lg bg-dark fixed-top ">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="/">
           <span className='navBar_span' > Sanjay Loncha </span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#home">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#about">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#github">
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#project_component">
                  Projects
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link text-light " href="#contact">
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
