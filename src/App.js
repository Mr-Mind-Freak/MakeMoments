import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DataContext} from './DataContext';
import Layout from './Layout';
import Movie from './components/Movie';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
 return (
    <DataContext>
      <Routes>
        <Route path='/' element={ <Layout />} >
          <Route path='movies' index element={<Movie />} />
          <Route path='login'>
            <Route index  element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </DataContext>
  );
}

export default App;