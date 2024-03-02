import { useTranslation } from 'react-i18next';
import Login from './pages/Login';

export const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Login />
    </div>
  );
};
