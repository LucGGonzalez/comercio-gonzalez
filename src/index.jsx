import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCK6Bw7-_EH1KxsUquZ8n2D0A_FvOeinb8',
  authDomain: 'smith-store-coderhouse.firebaseapp.com',
  projectId: 'smith-store-coderhouse',
  storageBucket: 'smith-store-coderhouse.appspot.com',
  messagingSenderId: '868360360234',
  appId: '1:868360360234:web:a1b89d03273d8417d20e53',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
