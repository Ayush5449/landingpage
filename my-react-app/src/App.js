import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import CourseSection from './components/CourseSection';
import ContactSection from './components/ContactSection';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutSection />
      <CourseSection />
      <ContactSection />
    </div>
  );
};

export default App;