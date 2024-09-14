import React from 'react';
import AppRoutes from './components/rooter/AppRoutes';
import Navbar from './components/organisms/navbar/Navbar';
import Footer from './components/organisms/footer/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;