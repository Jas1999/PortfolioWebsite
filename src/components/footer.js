import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id="footer">


              <footer>
                <div className="row">
                  <div className="twelve columns">
                    <ul className="social-links">
                      <li><a href="#"><i className="fa fa-github" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>

                  </div>
                  <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#header"><i className="icon-up-open" /></a></div>
                </div>
              </footer> {/* Footer End*/}

      </section>
    );
  }
}
