import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routing'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
