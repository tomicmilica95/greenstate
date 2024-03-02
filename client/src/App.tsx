import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard, Login } from './pages';

export const App = () => {
  const routes = (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};
