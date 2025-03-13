import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SimplePresent from './pages/SimplePresent';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple-present" element={<SimplePresent />} />
      {/* Add other tense pages here */}
    </Routes>
  );
}

export default App;
