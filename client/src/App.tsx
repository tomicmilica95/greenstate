import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';

export const App = () => {
  const routes = (
    <Routes>
      <Route path='/signup' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};
