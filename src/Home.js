import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Home/Areas';
import Navbar1 from './Home/Navbar1';
import Slider from './Home/Slider';
import Footer1 from './Home/Footer';
import Products from "./Home/Product"
import Button from "react-bootstrap/Button"
import "./index.css"
function Home() {
    return (
        <div className="App">
            <nav class="navbar " style={{ color: "white",background:"Black" }}>
                <Button className="btn text-white" style={{color:"#058b80"}}>
                    <a class="navbar-brand text-white" href="#" >
                        As Seller
                    </a>
                </Button>
                <Button className="btn text-white">
                    <a class="navbar-brand text-white" href="#" >
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
            <h1 style={{fontWeight:"bold"}}>All Areas</h1>
            <BasicExample />
            <br />
            <br />

            <h1 style={{fontWeight:"bold"}}>Products For You </h1>
            <br/>
            <Products />
            <br/>
            <Footer1 />
            {/* <SignIn/> */}
        </div>
    );
}

export default Home;
