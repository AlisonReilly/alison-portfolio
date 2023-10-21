import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import ErrorPage from './Components/ErrorPage';
import { HeroSection } from './Containers/HeroSection';
import { About } from './Containers/About';
import { Projects } from './Containers/Projects';

const firebaseConfig = {

  apiKey: "AIzaSyAtgN1KMPZALqbqDERLZhy4O46g5-F-Ooc",

  authDomain: "alison-portfolio-site.firebaseapp.com",

  projectId: "alison-portfolio-site",

  storageBucket: "alison-portfolio-site.appspot.com",

  messagingSenderId: "969752895738",

  appId: "1:969752895738:web:cb53efac3424b0fcb82943",

  measurementId: "G-Y489XN9GDK"

};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  },
  // as example to note while working - this will just take you to a new page and not reflect a persisting component like a header or nav
  // {
  //   path: "/home",
  //   element: <HeroSection />
  // }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
