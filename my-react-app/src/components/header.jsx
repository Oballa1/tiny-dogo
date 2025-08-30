import React from 'react';
import './header.css'; // ✅ Import the CSS file

const Header = () => {
  return (
    <div className="header-container">
      {/* Top Section */}
      <header className="header-top">
  <div className="nav-container">
    <h1 className="logo">TinyDogo</h1>
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#photos">Photos</a></li>
        <li className="nav-item"><a href="#adopt">Adopt</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>

  <p className="header-subtitle">
    Your friendly place for all things dogs 🐶
  </p>
</header>

      {/* Middle Section */}
      <main className="header-middle">
  <h2 className="middle-title">Why Choose TinyDogo?</h2>
  <p className="middle-text">
    We bring together dog lovers, provide expert advice, and connect you
    with the best dog products and services. Whether you’re a new pet
    parent or a seasoned dog owner, TinyDogo is here to help you.
  </p>
</main>

{/* ---------------- PHOTOS SECTION ---------------- */}
<section className="photos-section" id="photos">
  <h2 className="photos-title">Adorable Dog Photos 🐾</h2>
  <div className="photos-grid">
    <img src="https://placedog.net/400/300?id=1" alt="Cute Dog 1" />
    <img src="https://placedog.net/400/300?id=2" alt="Cute Dog 2" />
    <img src="https://placedog.net/400/300?id=3" alt="Cute Dog 3" />
    <img src="https://placedog.net/400/300?id=4" alt="Cute Dog 4" />
  </div>
</section>

      {/* Bottom Section */}
      <footer className="header-bottom">
        <p>&copy; {new Date().getFullYear()} TinyDogo. All rights reserved.</p>
        <p className="footer-links">
          Follow us on <a href="#">Social Media</a>
        </p>
      </footer>
    </div>
  );
};

export default Header;
