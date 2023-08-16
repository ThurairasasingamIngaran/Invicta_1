import './App.css';
import Navbar from './Layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sample from './Pages/Sample';


function App() {
  return (
    <Router>
  <Navbar/>
    <Routes>
    <Route exact path="/123" element={<Home/>} />
    <Route exact path="/" element={<Sample/>} />
    </Routes>
    </Router>
  );
}

export default App;
