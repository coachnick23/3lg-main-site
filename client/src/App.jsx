import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeServices from './pages/HomeServices';
import RealEstate from './pages/RealEstate';
import BlackOwnedBusinesses from './pages/BlackOwnedBusinesses';
import Ecommerce from './pages/Ecommerce';
import FoodWater from './pages/FoodWater';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/black-owned" element={<BlackOwnedBusinesses />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/food-water" element={<FoodWater />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
