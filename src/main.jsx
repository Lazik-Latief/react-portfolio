import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path="/" element ={<MainLayout/>}>
        <Route path ="" element ={<Home/>}/>
        <Route path ="about" element ={<About/>}/>
        <Route path ="projects" element ={<Projects/>}/>
        <Route path ="contact" element ={<Contact/>}/>
      </Route>
    ]
  ),
   {
    basename: "/react-portfolio",
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
