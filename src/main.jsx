import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Linkdin from './components/Linkdin.jsx'
import { getloader } from './components/Linkdin.jsx'


const router=createBrowserRouter(createRoutesFromElements(
  <Route  path='/' element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='/home' element={<Home />} />
  <Route path='about' element={<About />} />
  <Route path='contact' element={<Contact />} />
  <Route path='user/:userid' element={<User/>}/>
  <Route 
  loader={getloader}
  path='/linkdin' element={<Linkdin/>}/>

  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
