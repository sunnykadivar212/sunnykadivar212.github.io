import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Certifications from './certification/Certification';
import Github from './github/Github';
import NotFound from './notfound/NotFound';

function Root() {
    const location = useLocation();
    const [view, setView] = useState('about');

    useEffect(() => {
        const path = location.pathname.substring(1);
        if (path === '') {
            setView('about');
        } else if (['about', 'resume', 'projects', 'certification', 'github'].includes(path)) {
            setView(path);
        } else {
            setView('notfound');
        }
    }, [location]);

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
        case 'notfound':
            return <NotFound />;
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