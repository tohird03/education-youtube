import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.scss';
import Create from "./Pages/Auth/Create";

import Home from "./Pages/Home/Home";
import Lesson from "./Pages/Lesson/Lesson";
import Like from "./Pages/Like/Like";
import SearchResult from "./Pages/SearchResult/SearchResult";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";
import User from "./Pages/User/User";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/singlevideo/:videoId" element={<SingleVideo/>}/>
        <Route path="/search/:searchtitle" element={<SearchResult/>}/>
        <Route path="/lesson" element={<Lesson/>}/>
        <Route path="/user-about" element={<User/>}/>
        <Route path="/auth/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
