import './App.css';
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ProjectsDetails from './Pages/ProjectsDetails';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/ProjectsDetails" element={<ProjectsDetails/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
