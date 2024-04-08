import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import Github from './components/github/Github'

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/github",
    element: <Github />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
