import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Competitions from './pages/Competitions';
import Registration from './pages/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Workshops from './pages/Workshops';
import CompetitionDetails from './pages/CompetitionDetails';
import WorkshopDetails from './pages/WorkshopDetails';
import SecureCheckout from './pages/SecureCheckout';
import SwaralayaCompetitions from './pages/SwaralayaCompetitions';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/competition-details" element={<CompetitionDetails />} />
        <Route path="/workshop-details" element={<WorkshopDetails />} />
        <Route path="/checkout" element={<SecureCheckout />} />
        <Route path="/swaralaya-competitions" element={<SwaralayaCompetitions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
