import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Competitions from './pages/Competitions';
import Registration from './pages/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess';
import SignUp from './pages/SignUp';
import Workshops from './pages/Workshops';
import CompetitionDetails from './pages/CompetitionDetails';
import WorkshopDetails from './pages/WorkshopDetails';
import SecureCheckout from './pages/SecureCheckout';
import SwaralayaCompetitions from './pages/SwaralayaCompetitions';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import AdminCompetition from './pages/AdminCompetition';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isAuthPage = ['/login', '/signup', '/register'].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/event-register" element={<Registration />} />
        <Route path="/workshop-register" element={<Registration />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/competition-details" element={<CompetitionDetails />} />
        <Route path="/workshop-details" element={<WorkshopDetails />} />
        <Route path="/workshop-details/:id" element={<WorkshopDetails />} />
        <Route path="/checkout" element={<SecureCheckout />} />
        <Route path="/swaralaya-competitions" element={<SwaralayaCompetitions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<AdminCompetition />} />
        <Route path="/admin/create-competition" element={<AdminCompetition />} />
      </Routes>
      {!isAdmin && !isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

