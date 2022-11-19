import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import SchedulePage from '../views/schedulePage';
import NewQuery from '../views/newQuery';

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} ></Route>
        <Route path="/schedule" exact  element={<SchedulePage />}></Route>
        <Route path="/hours" exact element={<NewQuery />}></Route>
      </Routes>
    </BrowserRouter>
  )
}