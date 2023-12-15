import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Design from './Design.jsx'
import WebDevelopment from './WebDevelop.jsx'
import AppDevelopment from './DevelopApp.jsx'
import ErrorPage from "./error-page"

import Works from './WorksOur.jsx'
import Blog from './Blog.jsx'
import Contacts from './Contacts.jsx'

import './assets/css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
   
  },
  {
    path: "design/",
    element: <Design />,
  },
  {
    path: "web-development/",
    element: <WebDevelopment />,
  },
  {
    path: "application-development/",
    element: <AppDevelopment />,
  },
  {
    path: "works/",
    element: <Works />,
  },
  {
    path: "blog/",
    element: <Blog />,
  },
  {
    path: "contacts/",
    element: <Contacts />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);