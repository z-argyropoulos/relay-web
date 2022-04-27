import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Counter from './components/Counter';
import AlternativeCounter from './components/AlternativeCounter';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <AlternativeCounter />
  </React.StrictMode>
);
