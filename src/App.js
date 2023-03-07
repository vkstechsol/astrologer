import Header from './Components/Header';

import './App.css';

import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';
import Aboutus from './Components/Aboutus';
import { BrowserRouter as Router, Route, Link, Routes,}
		from "react-router-dom";
import Getdirections from './Components/Getdirections';

function App() {
  return (
<>
  
 

  <Router>
  <Header />


    <Routes>
   
     <Route exact path="/" element={<Home />} />  
     <Route exact path="Contact" element={<Contact />} /> 
      <Route exact path="Services" element={<Services />} /> 
     <Route exact path="Aboutus" element={<Aboutus />} />  
     <Route exact path="Getdirections" element={<Getdirections />} /> 
    

   </Routes>


   

   </Router> <br></br>
    <Footer />  
   </>





    
    
  )
}

export default App;
