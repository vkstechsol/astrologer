import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
<div className="container-fluid">
        <div className="row bg-dark">
            <div className="col-12 mb-0 text-center text-primary ">
              <marquee><img src="img/horoscope1.jpg" width="60px" alt="" className=" rounded-circle border border-dark" /></marquee><h4>AstroPalmist Amit, Astrologer in Manish Nagar, Open today until 18:00</h4>
              </div>

              <nav className="navbar navbar-expand-lg bg-warning">
             <div className="container-fluid">
             <a className="navbar-brand" href="#">
              
             </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
               </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <h5> <ul className="navbar-nav border me-auto mb-1 mb-lg-0 ">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Contact"} className="nav-link active" >Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Services"} className="nav-link active" >Services</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Aboutus"} className="nav-link active" >About Us</Link>
              </li>
              {/* <li className="nav-item">
                <Link to={"/Getdirections"} className="nav-link active" >Get Directions</Link>
              </li> */}
              <li className="nav-item dropdown ">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Astro-Palmist-Amit
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to={"/"} className="dropdown-item" >Home</Link></li>
                  <li><Link to={"/Contact"} className="dropdown-item" >Contact</Link></li>
                   <li><Link to={"/Services"} className="dropdown-item">Services</Link></li>
                  <li><Link to={"/Aboutus"} className="dropdown-item">About Us</Link></li>
                   <li><hr className="dropdown-divider" /></li> 
                  <li><Link to={"/Getdirections"} className="dropdown-item">Get Directions</Link></li>
                </ul>
              </li>
             </ul> </h5></div>

             <b className="text-center text-danger ">
             <b className="text-primary">astropalmistamit@gmail.com,--             
                  <i className="bi bi-telephone-forward" /> +91 9156639210 </b></b>
                <a style={{margin: '10px', padding: '2px', textDecoration: 'none', color: 'blue', fontSize: 'xx-large'}} href="https://www.facebook.com/Peas-and-Pods-Techsol-105574828784393">
                  <ion-icon name="logo-facebook" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'red', fontSize: 'xx-large'}} href="https://www.instagram.com/pnptechsol/">
                  <ion-icon name="logo-instagram" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'blue', fontSize: 'xx-large'}} href="https://twitter.com/pnptechsol1">
                  <ion-icon name="logo-twitter" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'red', fontSize: 'xx-large'}} href="https://www.youtube.com/channel/UC8MbnMeszG91mZMZVZ-H6Nw">
                  <ion-icon name="logo-youtube" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'black', fontSize: 'xx-large'}} href="https://www.linkedin.com/company/peas-and-pods-techsol">
                  <ion-icon name="logo-linkedin" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'rgb(19, 180, 19)', fontSize: 'xx-large'}} href="https://api.whatsapp.com/send?phone=919019922045">
                  <ion-icon name="logo-whatsapp" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'blue', fontSize: 'xx-large'}} href="https://telegram.me/peasandpods">
                  <i className="bi bi-telegram" />
                </a>
                <a style={{margin: '5px', padding: '2px', textDecoration: 'none', color: 'rgb(19, 180, 19)', fontSize: 'xx-large'}} href="https://in.pinterest.com/italksolutions/_saved/">
                  <ion-icon name="logo-pinterest" />
                    </a>       
             
             



             </div>       
             
             </nav>




            </div>
                   
      </div>










  )
}
