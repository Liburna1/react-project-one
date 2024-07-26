import '../CSS/Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="overlay"></div>
        <div className="inner-footer">
          <div className="card">
            <h3>About Us</h3>
            <ul>
              <li><a href="https://www.pradagroup.com/en.html">Prada Group</a></li>
              <li><a href="https://www.pradagroup.com/en/sustainability/prada-impact/impact.html">Sustainability</a></li>
              <li><a href="https://www.fondazioneprada.org/">Fondazione Prada</a></li>
              <li><a href="https://jobs.pradagroup.com/">Work with Us</a></li>
            </ul>
          </div>
          <div className="card">
            <h3>Legal Terms And Conditions</h3>
            <ul>
              <li><a href="#">Legal Notice</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div className="card">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Ready to Wear</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Eyewear</a></li>
            </ul>
          </div>
          <div className="card">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube" className="social-icon"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="Instagram" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <i className="fas fa-copyright"></i> Prada 2005-2024
        </div>
      </footer>
    </div>
  )
}

export default Footer;
