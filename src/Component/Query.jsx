import React, { useState } from 'react';
import PopUpForm from './PopUpForm'; // Make sure PopUpForm is correctly imported from its file
import './Query.css';

const Query = React.memo(() => {
  const [isFormOpen, setIsFormOpen] = useState(false); // Define and initialize isFormOpen state

  const openForm = () => {
    setIsFormOpen(true); // Define the openForm function
  };

  const closeForm = () => {
    setIsFormOpen(false); // Define the closeForm function
  };

  return (
    <div className="query-component">
      <div>
        <button className="now1" onClick={() => { isFormOpen ? closeForm() : openForm(); }}>
          {isFormOpen ? 'Close Form' : 'Query NOW'}
        </button>
        {isFormOpen && <PopUpForm onClose={closeForm} />} {/* Render the PopUpForm when isFormOpen is true */}
      </div>
    </div>
  );
});

export default Query;
