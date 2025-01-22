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
import Profile from './Pages/Profile';

const App = () => {
  const [token, setToken] = useState('');
  const [profile,setProfile]=useState([]);

  const fetchProfile = async () => {
    await axios
        .get(`https://newsdata.io/api/1/latest?apikey=pub_64768fc0af985457096b71b484051a88e82bc&q=science`)
        .then((res) => setProfile(res.data.results))
        .catch((error) => console.log(error));
    //console.log(data)
};




  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/notificationpush' element={<NotificationPush />} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;