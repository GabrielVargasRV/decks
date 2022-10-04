import { useState } from 'react'
import './App.css'
import Layout from "./components/Layout";

import Home from "./Pages/Home";

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";



function App() {

  return (
    <Layout>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
