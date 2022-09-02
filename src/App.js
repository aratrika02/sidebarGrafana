import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Greet from './components/Greet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <>
      <Router>
         {/* <Greet/> 
         <Home/>
         <Reports/> */}
         <Navbar /> 
         <Routes>
          <Route path='/'>
          </Route>
          <Route path='/home' element={<Home/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes> 
     </Router>
    </>
  );
}

export default App;
