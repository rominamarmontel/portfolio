import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Layout from './components/Layout.jsx'
import Muun from './pages/Muun/Muun.jsx'
import Impermanence from './pages/Impermanence/Impermanence.jsx'
import Kanraku from './pages/Kanraku/Kanraku.jsx'
import Project1 from './pages/Project1/Project1.jsx'
import Project2 from './pages/Project2/Project2.jsx'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/muun" element={<Muun />} />
          <Route path="/impermanence" element={<Impermanence />} />
          <Route path="/kanraku" element={<Kanraku />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project1" element={<Project1 />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
