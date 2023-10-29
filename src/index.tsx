import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyAtgN1KMPZALqbqDERLZhy4O46g5-F-Ooc",

  authDomain: "alison-portfolio-site.firebaseapp.com",

  projectId: "alison-portfolio-site",

  storageBucket: "alison-portfolio-site.appspot.com",

  messagingSenderId: "969752895738",

  appId: "1:969752895738:web:cb53efac3424b0fcb82943",

  measurementId: "G-Y489XN9GDK"

};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // strict mode causes phaser scene to render twice so leaving off for now
  // <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
