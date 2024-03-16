import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to Mr. Arun's Journalism Course</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#course">Course</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;