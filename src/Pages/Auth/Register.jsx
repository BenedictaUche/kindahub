import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import AuthVectorImage from '../../assets/AuthVector.png';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { fullName, email, password, city } = formData;

      // Create user with additional data
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: fullName, cityCountry: city });

      navigate('/home');
    } catch (signUpError) {
      console.error('Firebase Authentication Error:', signUpError);
      setError(signUpError.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img src={AuthVectorImage} alt="Auth Vector" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Welcome to KindaHub</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="fullName"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>

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
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City/Country
            </label>
            <input
              type="city"
              name="city"
              id="city"
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

          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Create account
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="mt-4 text-center md:text-left">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
