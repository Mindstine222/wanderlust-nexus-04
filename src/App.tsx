import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VisasPage } from './pages/VisasPage';
import { FlightsPage } from './pages/FlightsPage';
import { UmrahPage } from './pages/UmrahPage';
import { ToursPage } from './pages/ToursPage';
import { TrackingPage } from './pages/TrackingPage';
import { SignInPage } from './pages/SignInPage';
import { OffersPage } from './pages/OffersPage';
import { CarRentalPage } from './pages/CarRentalPage';
import { MyAccountPage } from './pages/MyAccountPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="relative z-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/visas" element={<VisasPage />} />
            <Route path="/flights" element={<FlightsPage />} />
            <Route path="/umrah" element={<UmrahPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/car-rental" element={<CarRentalPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/account" element={<MyAccountPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
