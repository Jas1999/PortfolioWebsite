import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <section id="about">

          <div className="row">
            <div className="three columns">
              <img class="round-pic" src="images/methinking.jpeg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a Computer engineering student at the University of Waterloo, graduating in 2022.
                I would describe myself as someone that enjoys a challenge.
                 From both project and work experiences I have noticed that the harder the task
                the more I enjoy working on it and thinking it through.
                That being said I am someone that likes to be efficient by reducing the amount of work I
                have to do.



                <br />
                <br />

              </p>
              {
                  /*
                  I have a passion for learning  and applying my knowledge to solve complex problems.
                  Since

                  I am someone
                  */
              }

              <h3>Other Interests </h3>
              <p style={{textAlign:"left"}}>
              Other than Coding I have various interests such as video games, cars, watches and movies/shows:
              <br/>
              For example I am currently plaing God of War and Red Dead Redemption 2 <br/>
              My current dream car is either a F8 Tributo or a 911 GT3 RS <br/>
              Favorite Movies at the moment: Inglorious Bastards and The Departed <br/>
              Favorite Shows at the moment: Dragon Ball Z and The Mandalorin


              </p>


              <div className="row">

                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>Jasman Singh Sahi</span><br />
                        <span>jasman.singh.sahi@gmail.com</span>
                    </p>
                </div>

                <div className="columns download">
                  <p>
                    <a href="ResumedataVer.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>

      </section>
    );
  }
}

/*

<div className="columns contact-details">
  <h2>Contact Details</h2>
  <p className="address">
    <span>Jasman Singh Sahi</span><br />
    <span>jasman.singh.sahi@gmail.com</span>
  </p>
</div>
*/
