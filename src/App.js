import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
       <Route exact path="/" element={<Home />} />
 
       <Route exact path="/Projects" element={<Projects />} />
       <Route exact path="/about" element={<About />} />

       </Routes>
      </BrowserRouter>
  );
}

export default App;
