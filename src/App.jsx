import React, { useState } from 'react';
import Welcome from './components/Welcome';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="max-w-2xl bg-yellow-400 mx-auto border-violet-500 border-4">
      <Welcome />
    </div>
  );
};

export default App;
