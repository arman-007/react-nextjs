import React, { useEffect, useState } from 'react';

const SaveModal: React.FC = () => {
  const [isHeartSaved, setIsHeartSaved] = useState(false);

  useEffect(() => {
    // Check saved state in local storage on component mount
    const savedState = localStorage.getItem('isHeartSaved') === 'true';
    setIsHeartSaved(savedState);
  }, []);

  const handleSaveClick = () => {
    const newState = !isHeartSaved;
    setIsHeartSaved(newState);
    localStorage.setItem('isHeartSaved', newState.toString());
  };

  return (
    <button id="saveBtn" className="pill-btn" onClick={handleSaveClick}>
      <span className="icon margin-right">
        <i id="heartIcon" className={`fa-heart ${isHeartSaved ? 'fa-solid' : 'fa-regular'}`} data-testid="heartIcon"></i>
      </span>
      Save
    </button>
  );
};

export default SaveModal;