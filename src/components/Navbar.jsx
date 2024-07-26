import '../CSS/Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="home.html" className="logo">
          <img src={} alt="" />
        </a>
        <nav className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="AboutUs">About Us</Link></li>
        <li><Link to="">Contact Us</Link></li>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
