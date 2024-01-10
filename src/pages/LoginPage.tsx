import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useAuth } from "../context/AuthContext"
import { Auth } from '../context/AuthContext';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth() as Auth;
    const navigate = useNavigate();
  
    const handleLogin = () => {

      const fixedUsername = 'user';
      const fixedPassword = 'password';
  
      if (username === fixedUsername && password === fixedPassword) {
        login();
        navigate('/users/');
      } else {
        setError('Неверные учетные данные');
      }
    };
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
      <section className='auth h-screen flex items-center justify-center'>
        <form className="p-4 bg-white shadow-md rounded-md w-4/5  sm:w-96">
        <h2 className="text-2xl text-center font-semibold mb-4">Авторизация</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Имя пользователя:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-600">Пароль:</label>
          <div className="flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
            <div
              className="absolute top-1/2 right-0 w-6 flex items-center pr-2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </div>
          </div>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className='flex w-full justify-center'>
          <button
          onClick={handleLogin}
          type='submit'
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >Войти</button></div>
  
      </form>
      </section>

    )
    }
    
    
export default LoginPage;