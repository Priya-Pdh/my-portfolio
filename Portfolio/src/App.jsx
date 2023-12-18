// import Home from "./Pages/Home/Home";

// const App = () => {

//   return (
//     <>
//       <h1>Hello</h1>
//       <Home />
//       <p>a</p>
//       <p>hey hey</p>
//     </>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/NavBar/NavBar';
// import About from './Pages/About/About';
// import Projects from './Pages/Projects/Projects';
// import Skills from './Pages/Skills/Skills';
// import Contact from './Pages/Contact/Contact';

const App = () => {
  console.log("hellp")
  return (

    <BrowserRouter>
          <Navbar />
      <div>
        {/* Move the Navbar outside of Routes */}
       
        <Routes>
          <Route path="/" element={<Home />} />
         {/* <Route path="/about" element={<About />} /> 
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
