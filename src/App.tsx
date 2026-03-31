import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar"; // Add your Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Execom from "./pages/Execom";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Magzine from "./pages/Magzine";
import Contact from "./pages/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />  {/* ← Add Navbar so you can navigate */}
        <main>  {/* Space for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/execom" element={<Execom />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/magazine" element={<Magzine />} />
             <Route path="/contact" element={<Contact />} />
            {/* Add catch-all route for 404 */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
