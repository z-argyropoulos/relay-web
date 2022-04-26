import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Counter from './components/Counter';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);
