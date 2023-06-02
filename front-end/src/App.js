import './App.css';
import Home from './Pages/Home.js'
import Navbar from './Components/Navbar.js'
import LiveLaunch from './Pages/LiveLaunch.js'

function App() {
  return (
    <div className="App text-white ">
      <Navbar/>
      <Home/>
      <LiveLaunch/>
    </div>
  );
}

export default App;
