// LogSign.jsx
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth } from './fbcon';
import {  signInWithEmailAndPassword, createUserWithEmailAndPassword }  from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




const LogSign = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', phone: '', company: '', country: '', userType: 'professional' });

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword( auth, loginForm.email, loginForm.password);
      console.log('Login successful');
      console.log(userCredential);
      const loginUserCredential = userCredential.user;
      localStorage.setItem('token', loginUserCredential.accessToken);
      localStorage.setItem('user', JSON.stringify(loginUserCredential));
      navigate("/ProNavs/Protected")
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const credential = await createUserWithEmailAndPassword( auth, signupForm.email, signupForm.password);
      console.log(credential);
      const user = credential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/ProNavs/Protected");


      // Add additional user data to Firestore
      /*await firebase.firestore().collection('users').doc(credential.user.uid).set({
        email: signupForm.email,
        displayName: signupForm.displayName,
        country: signupForm.country
      });*/

      console.log('Sign up successful');
    } catch (error) {
      console.error('Sign up failed:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-8">
        <div className="bg-green-400 p-10 rounded-lg shadow-md">
          <h2 className="text-3xl mb-8">Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-4">
              <label htmlFor="name">Name*:</label>
              <input type="text" id="name" className="border rounded px-2 py-1 w-full" value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email*:</label>
              <input type="email" id="email" className="border rounded px-2 py-1 w-full" value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" className="border rounded px-2 py-1 w-full" value={signupForm.phone} onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" className="border rounded px-2 py-1 w-full" value={signupForm.company} onChange={(e) => setSignupForm({ ...signupForm, company: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="country">Country*:</label>
              <input type="text" id="country" className="border rounded px-2 py-1 w-full" value={signupForm.country} onChange={(e) => setSignupForm({ ...signupForm, country: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password*:</label>
              <input type="password" id="signuppassword" className="border rounded px-2 py-1 w-full" value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="userType">Type of User*:</label>
              <select id="userType" className="border rounded px-2 py-1 w-full" value={signupForm.userType} onChange={(e) => setSignupForm({ ...signupForm, userType: e.target.value })}>
                <option value="professional">Professional</option>
                <option value="hobbyist">Hobbyist</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded">Sign Up</button>
          </form>
        </div>
        <div className="bg-gray-200 p-10 rounded-lg shadow-md">
          <h2 className="text-3xl mb-8">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="email">email*:</label>
              <input type="text" id="loginemail" className="border rounded px-2 py-1 w-full" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password*:</label>
              <input type="password" id="password" className="border rounded px-2 py-1 w-full" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogSign;
