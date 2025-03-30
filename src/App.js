import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import GaneshImage from './Images/bg.jpeg'
import w1 from './wedding_images/w1.jpg'
import w2 from './wedding_images/w2.jpg'
import w3 from './wedding_images/w3.jpg'
import w4 from './wedding_images/w4.jpg'
import w5 from './wedding_images/w5.jpg'
import w6 from './wedding_images/w6.jpg'
import w7 from './wedding_images/w7.jpg'
import w8 from './wedding_images/w8.jpeg'
import w9 from './wedding_images/w9.jpg'
import w10 from './wedding_images/w10.jpg'
import { BiSolidOffer } from 'react-icons/bi';
import { FaAddressBook } from "react-icons/fa";
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const weddingDecorations = [
  {
    id: 1,
    name: 'Luxury',
    price: 34999,
    discountedPrice: 29999,
    image: w1, // Image URL for this decoration
  },
  {
    id: 2,
    name: 'Traditional',
    price: 27999,
    discountedPrice: 22999,
    image: w2, // Image URL for this decoration
  },
  {
    id: 3,
    name: 'Premium',
    price: 31999,
    discountedPrice: 27999,
    image: w3, // Image URL for this decoration
  },
  {
    id: 4,
    name: 'Premium',
    price: 43999,
    discountedPrice: 39999,
    image: w4, // Image URL for this decoration
  },
  {
    id: 5,
    name: 'Premium',
    price: 51999,
    discountedPrice: 45999,
    image: w5, // Image URL for this decoration
  },
  {
    id: 6,
    name: 'Premium',
    price: 43999,
    discountedPrice: 37999,
    image: w6, // Image URL for this decoration
  },
  {
    id: 7,
    name: 'Premium',
    price: 33999,
    discountedPrice: 28999,
    image: w7, // Image URL for this decoration
  },
  {
    id: 8,
    name: 'Premium',
    price: 63999,
    discountedPrice: 55999,
    image: w8, // Image URL for this decoration
  },
  {
    id: 9,
    name: 'Premium',
    price: 59999,
    discountedPrice: 53999,
    image: w9, // Image URL for this decoration
  },
  {
    id: 10,
    name: 'Premium',
    price: 25999,
    discountedPrice: 19999,
    image: w10, // Image URL for this decoration
  },
  
];

const engagementDecorations = [
  {
    id: 1,
    name: 'Modern Ganesh',
    price: 29999,
    image: '/images/ganesh_engagement_1.png',
  },
  {
    id: 2,
    name: 'Royal Ganesh',
    price: 34999,
    image: '/images/ganesh_engagement_2.png',
  },
  {
    id: 3,
    name: 'Luxury Ganesh',
    price: 49999,
    image: '/images/ganesh_engagement_3.png',
  },
];

function Wedding() {
  const location = useLocation(); // Use location to get the passed state
  const decorations = location.state?.decorations || [];

  const navigate = useNavigate(); // for programmatic navigation

  const handleEventClick = (event) => {
    if (event === 'home') {
      navigate('/home', {
      });
    } else if (event === 'contactUs') {
      navigate('/contactUs', {
      });
    }
  };

  return (
    <div className="ecommerce-container">
      <h2 className="page-title">Wedding Decorations</h2>
      <div className="top-buttons">
      <button onClick={() => handleEventClick('home')} className='Home-button'><i className="fa-solid fa-house" ></i> Home</button>
      <button onClick={() => navigate('/Offers')} className='Home-button'><BiSolidOffer color="green"/> Offers</button>
      <button onClick={()=> handleEventClick('contactUs')} className='Contact-button'><FaAddressBook /> Contact us</button>
      </div>
      <div className="product-grid">
        {decorations.map((decoration) => (
          <div key={decoration.id} className="product-card">
            <img src={decoration.image} alt={decoration.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{decoration.name}</h3>
              <p className="product-id">ID: {decoration.id}</p>
              <p className="product-price original-price">
                ₹{decoration.price}
              </p>

              {/* Show the discounted price */}
              <p className="product-price discounted-price">
                ₹{decoration.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Engagement() {
  const location = useLocation();
  const decorations = location.state?.decorations || [];

  return (
    <div>
      <h1>Engagement Decorations</h1>
      <ul>
        {decorations.map((decoration) => (
          <li key={decoration.id} className="decoration-item">
            <img src={decoration.image} alt={decoration.name} className="decoration-image" />
            <h3>{decoration.name}</h3>
            <price>Price: ₹{decoration.price}</price>
            <pID>ID: {decoration.id}</pID>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Home(){

  const navigate = useNavigate();
  const handleEventClick = (event) => {
    
  }

}

function Offers(){
  return(
    <div>
      <h1>Offers are coming soon</h1>
    </div>

  );
}

function ContactUs() {
  return (
    <div className="contactUs">
      <h2>
        <i className="fas fa-envelope" style={{ marginRight: "10px", color: "#4CAF50" }}></i>
        GaneshDecorations@gmail.com
      </h2>
      <h2>
        <i className="fas fa-phone-alt" style={{ marginRight: "10px", color: "#4CAF50" }}></i>
        +91 9876543210
      </h2>
      <h2><i className= "fa-solid fa-location-dot"></i> Address : 123, Medipally, Hyderabad, 500039.
      </h2>
    </div>
  );
}



function GaneshDecorations() {
  const navigate = useNavigate(); // for programmatic navigation

  const handleEventClick = (event) => {
    if (event === 'Wedding') {
      navigate('/wedding', {
        state: { decorations: weddingDecorations },
      });
    } else if (event === 'Engagement') {
      navigate('/engagement', {
        state: { decorations: engagementDecorations },
      });
    }
    
  };

  return (
    
    <div className="App">
      <header className="App-header">
        <h1 className="styled-title">Welcome to Ganesh Decorations</h1>

        <div className="decorations">
          <img
            src={GaneshImage}
            alt="Ganesh Decoration"
            className="decoration-img"
          />
        </div>

        <div className="buttons">
          <button onClick={() => handleEventClick('Wedding')}>Wedding</button>
          <button onClick={() => handleEventClick('Engagement')}>Engagement</button>
          <button onClick={() => handleEventClick('Reception')}>Reception</button>
          <button onClick={() => handleEventClick('Haldi')}>Haldi</button>
          <button onClick={() => handleEventClick('Birthday')}>Birthday</button>
          <button onClick={() => handleEventClick('Sangeet')}>Sangeet</button>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GaneshDecorations />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/home" element={<GaneshDecorations/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/offers" element={<Offers/>} />
      </Routes>
    </Router>
  );
}

export default App;