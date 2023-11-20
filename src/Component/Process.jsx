import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Process.css';
import nammImage from './TIMEIMAGE/nam1.jpg';

const Process = () => {
  const [showLeftPopup, setShowLeftPopup] = useState(false);
  // Define a state variable to control the right popup
  const [showRightPopup, setShowRightPopup] = useState(false);

  const toggleLeftPopup = () => {
    setShowLeftPopup(!showLeftPopup);
    setShowRightPopup(false); // Close the right popup
  };

  return (
    <div className='namm' style={{ backgroundImage: `url(${nammImage})` }}>
      <div className="corporate-containerb">
        <div className="left-sideb" onClick={toggleLeftPopup}>
          <div className="left-boxb">
            Package with all Solutions
          </div>
          {showLeftPopup && (
            <div className="popup animalb">
              <ul>
                <li>Social Media Handling</li>
                <li>Digital Marketing</li>
                <li>Recruitment </li>
                <li>Chat Support</li>
                <li>Digital Content Creation</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Link to="/">
        <button className='backb'>Back</button>
      </Link>
    </div>
  );
};

export default Process;
