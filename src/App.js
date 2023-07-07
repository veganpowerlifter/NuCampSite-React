//Exports that are not set as the default will require curly braces.
import Footer from './components/Footer';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';

// import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;