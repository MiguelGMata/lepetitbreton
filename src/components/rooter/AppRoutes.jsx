import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import ConceptScreen from '../pages/concept/ConceptScreen';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/notre-concept" element={<ConceptScreen />} />
    </Routes>
  );
};

export default AppRoutes;