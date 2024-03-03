import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard, Login } from './pages';
import { Task } from './components';

export const App = () => {
  const routes = (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/task/:taskId' element={<Task />} />
    </Routes>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};
