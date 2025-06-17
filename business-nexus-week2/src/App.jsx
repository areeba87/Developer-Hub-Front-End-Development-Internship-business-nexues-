import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvestorDashboard from './pages/dashboard/InvestorDashboard';
import EntrepreneurDashboard from './pages/dashboard/EntrepreneurDashboard';
import InvestorProfile from './pages/profile/InvestorProfile';
import EntrepreneurProfile from './pages/profile/EntrepreneurProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
        <Route path="/profile/investor/:id" element={<InvestorProfile />} />
        <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
      </Routes>
    </Router>
  );
}

export default App;