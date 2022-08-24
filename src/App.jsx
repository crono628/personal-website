import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="max-w-screen-md mx-auto bg-orange-300 min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
