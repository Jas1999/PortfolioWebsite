import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
        <section id="contact">
            <div className="row contact">

            <h1> Contact Me :)</h1>
                {
                    /*
                    <h1><span>Contact</span></h1>

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

            <p className="lead">
            It is possible to get in touch with me with the following methods
            </p>
            <div className="twelve columns main-col">

                <div className="row item">

                    <div class="column large-12 medium-6 tab-12">
                        <h1> Email </h1>
                        <h2> <a href="mailto:jasman.singh.sahi@gmail.com"> jasman.singh.sahi@gmail.com </a> </h2>
                    </div>

                    <div class="column large-12 medium-6 tab-12">
                        <h1> Phone </h1>
                        <h2> <a href="tel:6477732477">  647-773-2477 </a> </h2>
                    </div>

                </div>
            </div>
                {
                    /*
                    <aside className="footer-widgets">
                      <div className="widget widget_contact">

                      </div>
                    </aside>
                    */
                }

            </div>
        </section>
    );
  }
}
