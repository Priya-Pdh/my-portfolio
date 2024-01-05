import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import Education from './Pages/Education/Education';

const App = () => {
  return (

    <BrowserRouter>
          <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/education" element={<Education />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
