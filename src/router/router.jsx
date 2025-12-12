import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Product from '../pages/Product';
import Pricing from '../pages/Pricing';
import Login from '../components/Login';
import AppLayout from '../pages/AppLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Cities from '../components/AppComponents/Cities';
import Countries from '../components/AppComponents/Countries';
import Form from '../components/AppComponents/Form';
import CityDetails from '../components/AppComponents/CityDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Cities />} />
        <Route path="cities" element={<Cities />} />
        <Route path="cities/:id" element={<CityDetails />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Route>
  )
);

export default router;
