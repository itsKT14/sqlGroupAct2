import React from 'react';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Comments from '../pages/Comments';
import { Route, Routes } from 'react-router-dom';

export default function RouterConvention() {
  return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/comments' element={<Comments/>} />
        </Routes>   
  )
}