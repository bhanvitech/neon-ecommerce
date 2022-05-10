import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/global.scss';
import './styles/style.scss';
import App from './App';

let root = createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoinlogo192