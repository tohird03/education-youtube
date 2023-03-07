import './App.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import VideoCard from './Components/VideoCard/VideoCard';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="mainBody">
        <Sidebar />


        <div class="videos">
          <div class="videos__container">
            <VideoCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
