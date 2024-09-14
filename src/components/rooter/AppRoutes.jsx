import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import ConceptScreen from '../pages/concept/ConceptScreen';
import MenuScreen from '../pages/menu/MenuScreen';
import ContactScreen from '../pages/contact/ContactScreen';
import Error from '../pages/error/Error';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/notre-concept" element={<ConceptScreen />} />
      <Route path="/notre-carte" element={<MenuScreen />} />
      <Route path="/nous-rencontrer" element={<ContactScreen />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;