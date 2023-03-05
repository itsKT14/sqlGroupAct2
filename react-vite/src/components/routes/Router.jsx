import React from 'react';
import Home from '../pages/Home';
import Users from '../pages/Users';
import { Route, Routes } from 'react-router-dom';

export default function RouterConvention() {
  return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
        </Routes>   
  )
}