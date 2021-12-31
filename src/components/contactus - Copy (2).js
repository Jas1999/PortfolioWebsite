import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id="contact">
            <h1>Contact</h1>

                {
                    /*
                    <div className="row section-head">

                    <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                    </div>

    
                      <div className="ten columns">
                      <p className="lead">
                      It is possible to get in touch with me with the follow methods
                      </p>
                      </div>
                    </div>

                    */
                }

                <div className="row">
                {
                    /*
                    <aside className="footer-widgets">
                      <div className="widget widget_contact">

                      </div>
                    </aside>
                    */
                }
                <p className="lead">
                It is possible to get in touch with me with the follow methods
                </p>

                  <p className="address">
                    Jasman Singh Sahi <br />
                    <span> jasman.singh.sahi@gmail.com</span> <br />
                    <span>647-773-2477</span>

                  </p>
                </div>

      </section>
    );
  }
}
