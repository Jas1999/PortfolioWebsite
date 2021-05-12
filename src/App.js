import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Skills from './components/Skills';
import Testimonials from  './components/testimonials';
import ContactUs from './components/contactus';
import Footer from './components/footer';
/*

<Resume />
<Portfolio />
<Testimonials />
<ContactUs />
<Footer />
*/
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <ContactUs />
      <Footer />

      </div>
    );
  }
}
export default App;
