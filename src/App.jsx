import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom"
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