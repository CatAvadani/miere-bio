import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Products from './pages/Products.tsx';

const router = createBrowserRouter(
  createRoutesFromChildren([
    <Route path='/' Component={App}>
      <Route index Component={Home} />
      <Route path='/despre' Component={About} />,
      <Route path='/produse' Component={Products} />,
      <Route path='/contact' Component={Contact} />,
      <Route path='*' Component={NotFound} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
