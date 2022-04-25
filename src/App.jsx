import React from 'react';

import './App.scss';

const App = () => {
  return (
    <div className="app-header">
      <p>App component works!</p>
      <p>{process.env.TEST_ENV_VARIABLE}</p>
    </div>
  );
};

export default App;
