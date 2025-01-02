import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cosmos from './Cosmos';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cosmos' element={<Cosmos />} />
   </Routes>
  );
}

export default App;
