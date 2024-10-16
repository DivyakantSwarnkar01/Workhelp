import React, { useState } from 'react';
import { auth, firestore } from './fbcon';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

const LogSign = () => {
  const [showLogin, setShowLogin] = useState(true); // Start with the Login form
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    password: '',
    userType: 'professional',
  });

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
      localStorage.setItem('token', userCredential.user.accessToken);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      navigate('/ProNavs/Protected');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const credential = await createUserWithEmailAndPassword(auth, signupForm.email, signupForm.password);
      localStorage.setItem('token', credential.user.accessToken);
      localStorage.setItem('user', JSON.stringify(credential.user));
      await addDoc(collection(firestore, 'users'), {
        email: signupForm.email,
        name: signupForm.name,
        country: signupForm.country,
        userType: signupForm.userType,
        phone: signupForm.phone,
        company: signupForm.company,
      });
      navigate('/ProNavs/Protected');
    } catch (error) {
      console.error('Sign up failed:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-lime-400 to-lime-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative overflow-hidden">
        {/* Slider Toggle */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={!showLogin} // Inverted logic
              onChange={() => setShowLogin(!showLogin)} // Toggle between forms
            />
            <label
              htmlFor="toggle"
              className="block bg-lime-300 w-16 h-8 rounded-full cursor-pointer"
            >
              <span
                className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${showLogin ? 'transform translate-x-0' : 'translate-x-8'}`}
              ></span>
            </label>
          </div>
        </div>

        {/* Forms Container */}
        <div className="flex transition-transform duration-500">
          {/* Login Form */}
          <div className={`w-full transition-opacity duration-500 ${showLogin ? 'opacity-100 animate__animated animate__fadeIn' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold mb-4 text-center text-lime-600">
              <i className="fas fa-sign-in-alt mr-2"></i> Welcome Back!
            </h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="relative mb-4">
                <i className="fas fa-envelope absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                />
              </div>
              <div className="relative mb-4">
                <i className="fas fa-lock absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 rounded-lg transition duration-300">
                <i className="fas fa-sign-in-alt mr-2"></i> Login
              </button>
              <p className="mt-4 text-sm text-center text-gray-600">
                Don't have an account? <span className="text-lime-600 cursor-pointer hover:underline" onClick={() => setShowLogin(false)}>Sign Up</span>
              </p>
            </form>
          </div>

          {/* Sign Up Form */}
          <div className={`w-full transition-opacity duration-500 ${!showLogin ? 'opacity-100 animate__animated animate__fadeIn' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold mb-4 text-center text-lime-600">
              <i className="fas fa-user-plus mr-2"></i> Create an Account
            </h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="relative mb-4">
                <i className="fas fa-user absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-lime-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={signupForm.name}
                  onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="relative mb-4">
                <i className="fas fa-envelope absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-lime-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                  required
                />
              </div>
              <div className="relative mb-4">
                <i className="fas fa-phone absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-lime-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={signupForm.phone}
                  onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
                />
              </div>
              <div className="relative mb-4">
                <i className="fas fa-building absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Company"
                  className="border border-lime-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={signupForm.company}
                  onChange={(e) => setSignupForm({ ...signupForm, company: e.target.value })}
                />
              </div>
              <div className="relative mb-4">
                <i className="fas fa-globe absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-lime-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={signupForm.country}
                  onChange={(e) => setSignupForm({ ...signupForm, country: e.target.value })}
                />
              </div>
              <div className="relative mb-4">
                <i className="fas fa-lock absolute left-3 top-3 text-gray-500"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-lime-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 rounded-lg transition duration-300">
                <i className="fas fa-user-plus mr-2"></i> Sign Up
              </button>
              <p className="mt-4 text-sm text-center text-gray-600">
                Already have an account? <span className="text-lime-600 cursor-pointer hover:underline" onClick={() => setShowLogin(true)}>Login</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSign;
