import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Page = () => (
  <div>
    <h1>This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

root.render(
  <StrictMode>
    <App />
    <Page />
  </StrictMode>
);
