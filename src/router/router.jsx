import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage';
import Product from '../pages/Product';
import Pricing from '../pages/Pricing';
import Login from '../components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default router;
