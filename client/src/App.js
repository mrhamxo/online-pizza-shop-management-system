import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Policy from './components/Policy';
import TopBar from './components/TopBar';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar /> 
      <Routes>
        {/* <Route path='/' element={< />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
