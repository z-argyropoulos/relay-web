import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Counter from './components/Counter';
import AlternativeCounter from './components/AlternativeCounter';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('app')!);

root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <AlternativeCounter />
  </React.StrictMode>
);
