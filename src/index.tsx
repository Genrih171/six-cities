import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { StartSettings } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App amountPlaces={StartSettings.amountPlaces}/>
  </React.StrictMode>
);
