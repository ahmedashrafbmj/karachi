import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
// import AiFillFacebook
import { AiFillFacebook } from 'react-icons/fa';

const { Header, Content, Footer } = Layout;
export default function Footer1() {
  return (
   <div class="row" style={{background:"#CCFF33", color:"black",fontWeight:"bold",textAlign:"center"}}>
    <br/>
    <div class="col-lg-4 col-md-6">
      <img src="/img/logo.png" width="330px"/>
    <h6>you can visit the any shop of any market at 13karachi you can visit the any <br/>
    you can visit the any shop of any market at 13karachi
    you can <br/>
    you can visit the any shop of any market at 13karachi you can visit the any <br/>  you can visit the any shop of any market at 13karachi    you can visit the any </h6>   
    </div>
    <div class="col-lg-4 col-md-6">
     <h1>UseFul Links</h1>
     <p>Home</p>
     <p>sign up</p>
     <p>Login</p>
     <p>About us</p>
    </div>
    <div class="col-lg-4 col-md-6">
<h1>Contact Us</h1>
<p>Facebook icon</p>
<p>whatsApp icon</p>
<p>Instagram icon</p>
<p>Play store icon</p>
    </div>
  
    {/* <Layout>
      
    <Footer style={{ textAlign: 'center' ,background:"black", color:"white" }}>  <div class="col-9" style={{ textAlign: 'left' ,background:"black", color:"white" }}> <h1>13 karachi</h1>
    <h6>you can visit the any shop of any market at 13karachi you can visit the any <br/>
    you can visit the any shop of any market at 13karachi
    you can <br/>
    you can visit the any shop of any market at 13karachi you can visit the any <br/>  you can visit the any shop of any market at 13karachi    you can visit the any </h6>   
            
            </div>
            
            www.13karachi.com ©2022 Created by Ahmed Ashraf</Footer>

    </Layout> */}
   </div>
  );
}