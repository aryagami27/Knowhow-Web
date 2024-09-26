import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Hero/Hero.jsx'
import Layout from './Layout.jsx'
import Domains from './pages/Domains/Domains.jsx'
import Members from './pages/Members/Members.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path='/' element= {<Layout />}>
        <Route path='' element ={<Home/>}/>
        <Route path='domains' element={<Domains />}/>
        <Route path='team' element={<Members />}/>
      </Route>
    ]
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>
)
