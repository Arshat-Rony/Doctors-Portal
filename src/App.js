import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Shared/Login/Login/Login';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Signup from './Pages/Shared/Login/Signup/Signup';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myappointment from './Pages/Dashboard/Myappointment';
import Review from './Pages/Dashboard/Review';
import Allusers from './Pages/Dashboard/Allusers';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<Myappointment />}></Route>
          <Route path='myappointments' element={<Myappointment />}></Route>
          <Route path='review' element={<Review></Review>} />
          <Route path='allusers' element={<RequireAdmin>
            <Allusers />
          </RequireAdmin>} />
          <Route path='addoctor' element={<RequireAdmin>
            <AddDoctor />
          </RequireAdmin>} />
          <Route path='managedoctor' element={<RequireAdmin>
            <ManageDoctors />
          </RequireAdmin>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
