import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Movie from './components/Movie';
import Signup from './components/Signup';

function App() {
 return (
    <Routes>
      <Route path='/' element={ <Layout />} >
        <Route path='movies' index element={<Movie />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;