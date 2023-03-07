import React from 'react'

export default function Contact() {

  function gotowhatsapp() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;
    
    var url = "https://wa.me/9889350769?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Service: " + service;
    
    window.open(url, '_blank').focus();
    }


  return (

    <div className="container-fluid">
      <div className="row bg-dark">
                        
    <div className="col-sm-12">
    <div className="container mt-1">
    <h1 className="text-warning mb-1 border-bottom">CONTACT US</h1>
     <div className="row text-white mb-1">
    <p className="mx-auto mb-1">
    Do you have any questions? Please do not hesitate to contact. I will come back to you within a matter of hours to
    help you.
    </p>
    <div className="col-sm-9 mb-5">
    <form action>
    <div className="row g-3">
     <div className="col-md-6">
       <label htmlFor="inputName">Your Name</label>
       <input type="text" className="form-control mt-2" id="name" />
     </div>
     <div className="col-md-6">
       <label htmlFor="inputEmail">Your Email *</label>
       <input type="email" className="form-control mt-2" id="email" required />
     </div>
     <div className="col-md-12">
       <label htmlFor="Your Contact Number">Contact Number</label>
       <input type="text" className="form-control mt-2" id="phone" />
     </div>
     <div className="col-md-12 mb-3">
       <label htmlFor="inputTextarea">Your message *</label>
       <textarea className="form-control mt-2" id="service" required defaultValue={""} />
     </div>
    </div>
    <button className="btn btn-primary" onClick={gotowhatsapp} type="submit">Send</button>
    </form> 
    </div>
    <div className="col-sm-3 text-center">
    <ul className="list-unstyled">
   <li>
     <h6 style={{margin: '8px', padding: '1px', textDecoration: 'none', color: 'rgb(19, 253, 19)', fontSize: 'xx-large'}}><i className="bi bi-airplane-engines" /></h6>
     <p>Flat No-109, Shanti-2, Block-2 Manik Park Manish Nagar Nagpur, Maharashtra 440015 ndia</p>
   </li>
   <li>
     <h6 style={{margin: '8px', padding: '1px', textDecoration: 'none', color: 'rgb(19, 253, 19)', fontSize: 'xx-large'}}><i className="bi bi-telephone-outbound-fill" /></h6> <p>+91 9156639210, Monday to Saturday - 10:00 Am – 6:00 Pm</p>
   </li>
   <li>
     <h6 style={{margin: '8px', padding: '1px', textDecoration: 'none', color: 'rgb(19, 253, 19)', fontSize: 'xx-large'}}> <i className="bi bi-envelope-open-fill" /></h6>
     <p> astropalmistamit@gmail.com</p>
   </li>
 </ul>
 
</div>
</div>
</div>
</div>
</div>
</div>




  )
}
