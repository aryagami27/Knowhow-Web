import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Form } from 'react-router-dom'
import Home from './pages/Hero.jsx'
import Layout from './Layout.jsx'
import Domains from './pages/Domains.jsx'
import Members from './pages/Members.jsx'
import Events from './pages/Events.jsx'
import RSVPForm from './components/Form.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path='/' element= {<Layout />}>
        <Route path='' element ={<Home/>}/>
        <Route path='/domains' element={<Domains />}/>
        <Route path='/team' element={<Members />}/>
        <Route path='/form' element={<RSVPForm />}/>
      </Route>
    ]
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/> 
  {/* <RSVPForm /> */}
</React.StrictMode>
)
