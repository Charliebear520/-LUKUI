import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import './App.css';
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import MyPlan from './pages/MyPlan';
import Product from './pages/Product';
import Process from './pages/Process';
import Nearby from './pages/Nearby';
import Review from './pages/Review'
import Suggest from './pages/Suggest';
import Rank from './pages/Rank';
import Recent from './pages/Recent';

function App() {
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/plan" element={<MyPlan />} />
          <Route path="products">
            <Route path="id/:productId" element={<Product />} />
          </Route>
          <Route path="processes">
            <Route path="id/:processId" element={<Process />} />
          </Route>
          <Route path="nearbys">
            <Route path="id/:nearbyId" element={<Nearby />} />
          </Route>
          <Route path="reviews">
            <Route path="id/:reviewId" element={<Review />} />
          </Route>
          <Route path="suggests">
            <Route path="id/:suggestId" element={<Suggest />} />
          </Route>
          <Route path="ranks">
            <Route path="id/:rankId" element={<Rank />} />
          </Route>
          <Route path="recents">
            <Route path="id/:recentId" element={<Recent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
