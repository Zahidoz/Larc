import "./style.scss";
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import aboutImg from '../../assets/about/boutique2.jpg'

const AboutPage = () => {

  return (
    <div className='aboutPage-s'>
      <Nav />
      <div className="container">
        <img src={aboutImg} alt="" />
        <div className="txt">
          <div className="txt-desc">
            <p>
              We have a more interesting life if you wear impressive clothes.
              Sometimes the simplest things are the most profound. Attention to
              detail is of utmost importance when you want to look good.
            </p>
            <p>
              Design and style should work toward making you look good and feel
              good without a lot of effort so you can get on with the things
              that matter. War taught me that not everything is glamorous.
            </p>
          </div>
          <div className="date">
            <ul>
              <li className='gray'>Monday – Friday</li>
              <li className='gray'>Saturday</li>
              <li className='gray'>Sunday</li>
            </ul>
            <ul>
              <li>9:30</li>
              <li> 11:00</li>
              <li> Closed </li>
            </ul>
            <ul>
              <li>20:00</li>
              <li>18:00</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage