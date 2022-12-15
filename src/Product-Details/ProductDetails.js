import React, { useState } from 'react';
import './ProductDeails.css';
// import Extras from './extras';
// import Location from './location';
// import Duration from './Duration';
// import Itinerary from './Itinerary';
import Button from "react-bootstrap/Button"


function ProductDetils() {
    const[select,setselect]= useState('/img/images (3).jpg')
    const[value,setValue]= useState(60000)
    return (
    <div style={{height:"70vh"}}>
        <div className="container-lg">
  <div className="row" style={{heidht:"54vh"}}>
    {/* left part */}
    <div className="col-xl-6 col-md-7  d-flex flex-column flex-sm-row align-items-center imagediv">

        <div className='bigimg mx-4 my-4'>
            <img src={select}  alt='selected' className='selected img-fluid'/>
        </div>
        <div className='imgcontainer  d-flex flex-row   flex-sm-column mx-1' style={{gap:"10px"}}>
        <img src='/img/download.jpg'  alt='' onClick={()=>(setselect('/img/download.jpg'))}  className='selected my-1'/>
        <img src='/img/images (1).jpg' alt='' onClick={()=>(setselect('/img/images (1).jpg'))}className='selected my-1'/>
        <img src='/img/images (2).jpg' alt='' onClick={()=>(setselect('/img/images (2).jpg'))} className='selected my-1'/>
        </div>
    </div>
    {/* right part */}
    <div className="col-xl-6 col-md-5  textdiv" >
        <div >
        <h4 className='top-heading mx-1'><b>Nike Good Quality Shoes</b></h4>
       <p className='paratext mx-1 '>shop Name:Memon shoes Center</p>
       <p className='discription mx-1'>Good Product Good Product Good Product Good Product Good Product Good Product Good Product</p>

        </div>

       <div   className="inputGroup mx-auto"> 
        <span className="increment">
            <i className="fa-solid fa-plus" onClick={()=>(setValue(value+5000))}></i>
        </span>
        <span className="coins ms-2 me-2">
        <i className="fa-solid fa-coins"></i>
        </span>
        
        <input style={{maxWidth:"120px" ,fontWeight:"bold"}} type="number"  value={`${value}`}   onChange={(e)=>(setValue(+(e.target.value)))} />
        <span style={{maxWidth:"120px" ,fontWeight:"bold",color:"#565553"}} className="pkr me-2 ms-1" >
        pkr    
        </span>
        <span className='decrement ms-3'>
            <i className="fa-solid fa-minus" onClick={()=>(setValue(value-5000))}></i>
        </span>
    </div>
    <div className='bit'>
    {/* <button className=" bitbtn my-3">Bid</button> */}
    <Button className="btn text-white my-3" style={{color:"#058b80"}}>
                    <a class="navbar-brand text-white" href="#" >
                        Add To Cart
                    </a>
                </Button>
    </div>
    </div>
  </div>
 
  </div>
  </div>
    
   
  )
}

export default ProductDetils