import React from 'react';
import Navbar from './Component/Navbar';
import Slideshow from './Component/Slideshow';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
  
      {/* The rest of your components */}
      
      <Footer />
    </div>
  );
}

export default App;
