

import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (

        <header id="header">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#header">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#skills">Skills</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            {
                // <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>

            }
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">

              <h1 className="responsive-headline">I'm Jasman Singh Sahi</h1>
              <h3>
              I am a 4th year Computer engineering student at the University of Waterloo
              with a strong drive and love of challenges.
              {
                  /*

                  I am a 4th year Computer engineering student at the University of Waterloo.
                  I am someone that loves challenges and working hard.

                  I have a passion for learning and applying my knowledge to solve complex problems.

                  Majority of my experience is in C/C++, Java, Python and JavaScript.
                  --
                  I'm a Computer engineering student at the University of Waterloo.
                  I am someone that loves challenges and working hard.
                  */
              }

              </h3>
              <h3>
              Scroll down to learn more
              </h3>
              <hr />
              <ul className="social">
              <li><a href="https://github.com/Jas1999"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/jasman-sahi-649018154/"><i className="fa fa-linkedin" /></a></li>
                {
                    /*
                    <li><a href="https://www.instagram.com/jasmansinghsahi/?hl=en"><i class="fa fa-instagram"></i></a></li>
                    */
                }
                <br/>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
    );
  }
}
