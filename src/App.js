import React, { useEffect, useState } from "react"
import './App.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import VideoCard from './Components/VideoCard/VideoCard';
import { instance } from "./Api/instance"
import Search from "./Pages/Search/Search";
function App() {
  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    instance.get("/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US")
      .then(response => setVideoData(response.data.contents))
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="mainBody">
        <Sidebar />


        <div class="videos">
          <div class="videos__container">

          <Search/>

            {
              videoData.map(item => {
                return <VideoCard items={item.video}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
