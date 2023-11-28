import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase';
import AuthVectorImage from '../../assets/AuthVector.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-slate-50'>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img src={AuthVectorImage} alt="Auth Vector" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Welcome back to KindaHub</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              type="submit"
              className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            >
              Login to KindaHub
            </button>
            <Link to="/forgot-password" className="text-blue-500 mt-4 md:mt-0 md:ml-4">Forgot Password?</Link>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        <p className="mt-4 text-center md:text-left">
          Don't have an account? <Link to="/register" className="text-blue-500">Create a KindaHub Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
