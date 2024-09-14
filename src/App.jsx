import React from 'react';
import AppRoutes from './components/rooter/AppRoutes';
import Navbar from './components/organisms/navbar/Navbar';
import Footer from './components/organisms/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css'


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop/>
      <AppRoutes />
      <Footer/>
    </div>
  );
}
export default App;