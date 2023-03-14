import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.scss';

import Home from "./Pages/Home/Home";
import Like from "./Pages/Like/Like";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/singlevideo/:videoId" element={<SingleVideo/>}/>
      </Routes>
    </div>
  );
}

export default App;
