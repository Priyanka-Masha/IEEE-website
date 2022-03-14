import React from 'react'
import "./App.css";
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './components/Body';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header/>}/>
        <Route exact path="/b" element={<><Header/><Body/></>}/>
      </Routes>
  </Router>

  )
}

export default App