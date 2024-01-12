import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import HomePage from './components/Home.jsx'
import Shopping from './components/Shopping.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "shopping",
    element: <Shopping />,
    //maybe have children here? like for filters to more specific sets of items
  },
  {
    path: "cart",
    element: <Cart />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
