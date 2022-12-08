import logo from './logo.svg';
import './App.css';
import Navbar from "./Slider"
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Areas';
import Slider from './Navbar1';
import Footer1 from './Footer';
import Products from "./Product"
import Button from "react-bootstrap/Button"
import SignIn from './Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    // <FeedbackProvider>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      {/* <TabsDisplay /> */}
      {/* <Footer /> */}
    </Router>
    // <ToastContainer />
  // </FeedbackProvider>

  );
}

export default App;
