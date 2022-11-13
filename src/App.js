import './App.css';
import Login from './components/Login/Login';
import MapContainer from "./components/Map/MapContainer";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div >
      {/* <MapContainer /> */}
      <Routes>

        <Route path='/' element={<MapContainer />} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
