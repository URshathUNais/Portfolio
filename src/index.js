import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutMePage from './Pages/AboutMePage';
import ClientPage from './Pages/ClientPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/about',
    element: <AboutMePage/>,
  },
  {
    path: '/client',
    element: <ClientPage/>,
  },
  {
    path: '/skills',
    element: <SkillsPage/>,
  },
  {
    path: '/contact',
    element: <ContactPage/>,
  },
  {
    path: '/projects',
    element: <ProjectsPage/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container-fluid'>
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
