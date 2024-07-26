import '../CSS/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img17 from '../assets/IMG/17.jpg';
import img22 from '../assets/IMG/22.jpg';
import img9 from '../assets/IMG/9.jpg';
import img10 from '../assets/IMG/10.jpg';
import img19 from '../assets/IMG/19.jpg';
import img8 from '../assets/IMG/8.jpg';
import img11 from '../assets/IMG/11.jpg';
import img18 from '../assets/IMG/18.jpg';
import img12 from '../assets/IMG/12.jpg';
import img13 from '../assets/IMG/13.jpg';
import img14 from '../assets/IMG/14.jpg';
import img15 from '../assets/IMG/15.jpg';
import img24 from '../assets/IMG/24.jpg';
import img25 from '../assets/IMG/25.jpg';
import img28 from '../assets/IMG/28.jpg';
import img3 from '../assets/IMG/3.jpg';
import img29 from '../assets/IMG/29.jpg';
import img30 from '../assets/IMG/30.jpg';
import img5 from '../assets/IMG/5.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="main">
      {/* Section One */}
      <section className="section-one">
        <div className="first">
          <h3>New Collection 2024</h3>
          <p>See our new collection for this spring 2024</p>
          <Link to="#">Show all</Link>
        </div>
        <div className="first">
          <img src={img17} alt="New Collection" />
        </div>
      </section>
      <br />
      <p className="p1">Shoes</p>

      {/* Section Two */}
      <section className="section-two">
        <div className="second">f
          <div className="second2 big">
            <Link to="#">Show all</Link>
            <img src={img22} alt="Shoes" />
          </div>
          <h3>SS24 Shoes</h3>
        </div>
        <div className="second-one">
          <div className="second-group">
            <div className="second2 top">
              <img src={img9} alt="Shoe 1" />
            </div>
            <div className="second2 top">
              <img src={img10} alt="Shoe 2" />
            </div>
            <div className="second2 top">
              <img src={img19} alt="Shoe 3" />
            </div>
          </div>
          <div className="second-group">
            <div className="second2 bottom">
              <img src={img8} alt="Shoe 4" />
            </div>
            <div className="second2 bottom">
              <img src={img11} alt="Shoe 5" />
            </div>
            <div className="second2 bottom">
              <img src={img18} alt="Shoe 6" />
            </div>
          </div>
        </div>
      </section>
      <br />
      <p className="p1">Bags</p>

      {/* Section Three */}
      <section className="section-three">
        <div className="three-one">
          <div className="three-group">
            <div className="three2 top1">
              <img src={img12} alt="Bag 1" />
            </div>
            <div className="three2 top1">
              <img src={img13} alt="Bag 2" />
            </div>
            <div className="three2 top1">
              <img src={img14} alt="Bag 3" />
            </div>
          </div>
          <div className="three-group">
            <div className="three2 bottom1">
              <img src={img15} alt="Bag 4" />
            </div>
            <div className="three2 bottom1">
              <img src={img24} alt="Bag 5" />
            </div>
            <div className="three2 bottom1">
              <img src={img25} alt="Bag 6" />
            </div>
          </div>
        </div>
        <div className="three">
          <div className="three2 big1">
            <img src={img28} alt="Bags" />
            <Link to="#">Show all</Link>
          </div>
          <h3>SS24 Bags</h3>
        </div>
      </section>
      <br />

      {/* Miu Miu Club Section */}
      <section>
        <p className="p2">Miu Miu Club</p>
        <div className="container">
          <div className="box">
            <img src={img3} alt="Club 1" />
            <Link to="#">Discover</Link>
          </div>
          <div className="box">
            <img src={img29} alt="Club 2" />
            <Link to="#">Discover</Link>
          </div>
          <div className="box">
            <img src={img30} alt="Club 3" />
            <Link to="#">Discover</Link>
          </div>
          <div className="box">
            <img src={img5} alt="Club 4" />
            <Link to="#">Discover</Link>
          </div>
        </div>
      </section>
      <br /><br />
    </div>
  );
}

export default HomePage;
