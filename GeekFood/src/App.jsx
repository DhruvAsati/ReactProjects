import React, { useState } from 'react';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Quote from './Components/quote/Quote';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'quote':
        return <Quote />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div>
        <NavBar setCurrentPage={setCurrentPage} />
        {renderContent()}
        <Footer />
      </div>
    </>
  );
};

export default App;
