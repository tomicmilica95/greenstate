import { LOG_IN_USER } from '../redux/types/userType';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const payload = { email, password };
      dispatch({ type: LOG_IN_USER, payload });
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-6'> {t('login')}</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            {t('email')}
          </label>
          <input
            type='email'
            id='email'
            className='w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            {t('password')}
          </label>
          <input
            type='password'
            id='password'
            className='w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600'
          onClick={handleLogin}>
          {t('login')}
        </button>
      </div>
    </div>
  );
};
