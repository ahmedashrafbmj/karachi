import logo from './logo.svg';
import './App.css';
// import Navbar from "./Slider"
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
// import BasicExample from './Areas';
// import Slider from './Navbar1';
// import Footer1 from './Footer';
// import Products from "./Product"
// import Button from "react-bootstrap/Button"
import OrdersTable from './Order';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ProductDetils from './Product-Details/ProductDetails';
import Navbar1 from './Home/Navbar1';
import SignIn from './Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <>
     {/* <FloatingWhatsApp chatMessage="welcome to 13karachi"   phoneNumber="03358211100" avatar="/img/logo.png" accountName="13karachi" />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/My-Orders" element={< OrdersTable/>} />
        <Route path="/My-Profile" element={< Profile/>} />
        <Route path="/Product-Details" element={< ProductDetils/>} />
      </Routes>
    </Router> */}
    <Navbar1/>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}
    <ProductDetils/>
    </>
   

  );
}

export default App;
