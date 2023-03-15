import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useNavigate, RouterProvider } from "react-router-dom"
import router from './config/router.js';
import './App.css'



function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;

// export default CollapsibleExample;