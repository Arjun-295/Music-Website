import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Competitions from './pages/Competitions';
import Registration from './pages/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Workshops from './pages/Workshops';
import CompetitionDetails from './pages/CompetitionDetails';
import SecureCheckout from './pages/SecureCheckout';
import SwaralayaCompetitions from './pages/SwaralayaCompetitions';
import Activities from './pages/Activities';

import Header from './components/Header';

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
        <Route path="/checkout" element={<SecureCheckout />} />
        <Route path="/swaralaya-competitions" element={<SwaralayaCompetitions />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </Router>
  );
}

export default App;
