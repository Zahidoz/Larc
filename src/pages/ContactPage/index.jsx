import './style.scss'
import React from 'react'
import Footer from '../../components/Footer';
import Nav from '../../components/Nav'


const ContactPage = () => {
  return (
    <div className="contactPage">
      <Nav />
      <div className="container">
        <div className="map-s">
          <div className="map-desc">
            <h1>
              Flame Towers <br /> Alov qüllələri
            </h1>
            <p>
              We extend you a very warm welcome and trust your stay with us will
              be both enjoyable and comfortable.{" "}
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8039974093717!2d49.828584812915956!3d40.36113800634264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dd2a51bb717%3A0x206018b2765a243e!2sFlame%20Towers!5e0!3m2!1sen!2saz!4v1685603343042!5m2!1sen!2saz"
            width="700"
            height="450"
            
          />
        </div>
        <div className="adress-s">
          <div className="card">
            <h1>Customer Service</h1>
            <h2>Via Pasquale Scura 73, <br /> 20121, Milano, Italy</h2>
            <p>+39 02 7600 3234</p>
            <span>customers@kaliumtheme.com</span>
          </div>
          <div className="card">
            <h1>International</h1>
            <h2>
              Isetan, 3 Chome-14-1 Shinjuku, Shinjuku-ku, Tokyoto 160-0022,
              Japan
            </h2>
            <p>+81 3-5413-6291</p>
            <span>hello@kaliumtheme.com</span>
          </div>
          <div className="card">
            <h1>Press</h1>
            <h2>Via Egnatia 112, <br /> Palermo, Italy</h2>
            <p>+39 02 7600 3234</p>
            <span>press@kalium.com</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage