import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DataContext} from './DataContext';
import Layout from './Layout';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AllUpdates from './components/movies/AllUpdates';
import AllMovies from './components/movies/AllMovies';
import Lover from './components/movies/Lover';
import BookingIndex from './components/bookings/BookingIndex';
import SelectSeats from './components/bookings/SelectSeats';

function App() {
 return (
    <DataContext>
      <Routes>
        <Route path='/' element={ <Layout />} >
          <Route index element={<LandingPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='movies'>
            <Route index element={<AllMovies />} />
            <Route path='lover' element={<Lover />} />
          </Route>
          <Route path='book'>
            <Route index element={<BookingIndex />} />
            <Route path='selectSeat' element={<SelectSeats />} />
          </Route>
          <Route path='updates' element={<AllUpdates />} />
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