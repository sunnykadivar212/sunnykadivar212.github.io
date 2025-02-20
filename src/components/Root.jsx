import React, { useState } from 'react';
import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Certifications from './certification/Certification';
import Github from './github/Github';

function Root() {
  const [view, setView] = useState('about');

  const renderView = () => {
    switch (view) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'certification':
        return <Certifications />;
      case 'github':
        return <Github />;
      default:
        return <About />;
    }
  };

  return (
      <>
        <Header setView={setView} currentView={view} />
        {renderView()}
      </>
  );
}

export default Root;