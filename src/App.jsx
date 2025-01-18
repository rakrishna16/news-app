import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import NotFound from './Pages/NotFound';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotificationPush from './Components/notificationPush';

const App = () => {
  const [token ,setToken] = useState('');

  return (
    <div>
      <div>
        <ToastContainer/>
      </div>
      <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setToken={setToken}/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/notfound' element={<NotFound/>} />
        <Route path='/notificationpush' element={<NotificationPush/>} />
      </Routes>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;