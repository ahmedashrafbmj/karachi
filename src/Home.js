import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Areas';
import Navbar1 from './Navbar1';
import Slider from './Slider';
import Footer1 from './Footer';
import Products from "./Product"
import Button from "react-bootstrap/Button"

function Home() {
    return (
        <div className="App">
            <nav class="navbar navbar-black bg-black " style={{ color: "white" }}>
                <Button className="btn btn-light">
                    <a class="navbar-brand" href="#" >
                        As Seller
                    </a>
                </Button>
                <Button className="btn btn-light " >
                    <a class="navbar-brand" href="#"  >
                        As User
                    </a>
                </Button>
            </nav>
            <Navbar1 />
            <Slider />
            <br />
            <br />
            <br />
            <br />
            <marquee direction="left" scrollamount="10" style={{ backgroundColor: "black", color: "white" }}>Ab karachi ki koi bhi market kisi bhi time ghomain ghar bathay wo bhi apnay phone sa </marquee>
            <h1>All Areas</h1>
            <BasicExample />
            <br />
            <br />

            <h1>Products For You </h1>
            <Products />
            <Footer1 />
            {/* <SignIn/> */}
        </div>
    );
}

export default Home;
