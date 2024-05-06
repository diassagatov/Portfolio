import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectFull from './pages/ProjectFull'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:name" element={<ProjectFull/>} />
          <Route path="*" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;