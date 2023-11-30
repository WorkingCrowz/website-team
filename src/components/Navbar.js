import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          <a className="navbar-brand mr-4 font-weight-bold d-none d-md-block" href="/#/" >
            <img src="logo.png" height="50" alt="logo" className="mr-3"/>
            </a>
            <a className="navbar-brand mr-4 font-weight-bold d-block d-md-none " href="/#/">
              <img src="logo.png" height="50" alt="mdb logo" className="mr-3"/>
            </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav ml-auto textsemibold">
                  <li className="nav-item click-eff" id="home">
                    <a type="submit" className="nav-link  px-4" href="/#/" id="nav-btn1">
                      Home
                    </a>
                  </li>
                  <li className="nav-item click-eff" id="team">
                    <a className="nav-link px-4 " href="/#/team" id="nav-btn2">Our Team</a>
                  </li>
                  <li className="nav-item click-eff" id="proj">
                    <a className="nav-link px-4" href="/#/project" id="nav-btn3">Projects</a>
                  </li>
                  <li className="nav-item click-eff" id="gall">
                    <a className="nav-link px-4" href="/#/gallery" id="nav-btn4">Gallery</a>
                  </li>
                  <li className="nav-item click-eff" id="blog">
                    <a className="nav-link px-4" href="/#/blogs" id="nav-btn4">Blog</a>
                  </li>
                  <li className="nav-item click-eff" id="reqproj">
                    <a className="nav-link px-4" href="/#/" id="nav-btn5" data-toggle="modal" data-target="#modalRequestProject">Request
                      a
                      Project</a>
                  </li>
                </ul>
              </div>
        </div>
    </nav>
    )
  }
}
