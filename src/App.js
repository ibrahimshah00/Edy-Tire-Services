
import './App.css';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Contact from './Component/Contact';
import Appointment from './Component/Appointment';
import AboutUs from './Component/AboutUs';
import MapLocation from './Component/MapLocation';
import Gallery from './Component/Gallery';
import Statistics from './Component/Statistics';
import CarBrands from './Component/CarBrands';

function App() {
  return (
    <>
     <Router>
    <Navbar />
   
    <Routes>
    <Route path="/" element={<><Hero /><MapLocation /><Services /><Statistics /><CarBrands /><Testimonials /></>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
