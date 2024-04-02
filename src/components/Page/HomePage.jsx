// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'

function HomePage({ isAuthenticated }) {
  
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className='container'>
      <header>
        <h1>Tracker</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Track Your Locations with Ease</h2>
          <p>Never lose track of your important locations again. Sign up now to get started!</p>
          <button className='btn-home'><Link to="/signup">Sign Up Now</Link></button>
        </section>
        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Real-time Tracking</li>
            <li>Geofencing</li>
            <li>Location History</li>
          </ul>
        </section>
      </main>
      <footer>
        <ul>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
        </ul>
        <p>&copy; 2024 Tracker</p>
      </footer>
    </div>
  );
}

export default HomePage;
