import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={<Admin/>}/>

      </Routes>
    </>
  );
}

export default App;
