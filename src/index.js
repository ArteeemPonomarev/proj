import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/assets/fonts/kiss/Kis BT Roman.ttf';
import '../src/assets/fonts/roboto/Roboto-Light.ttf';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);