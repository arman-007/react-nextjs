import React from 'react';

interface TravelerModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const TravelerModal: React.FC<TravelerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
      <div id="travelerModal" className={`traveler-modal ${isOpen ? 'show-class' : 'hide-class'}`}>
        <div className="traveler-options">
          <div className="option">
            <p>Adults</p>
            <div className="controls">
              <button className="decrement" id="decrementAdults">
                <i className="fa-solid fa-minus" />
              </button>
              <span id="adultCount">2</span>
              <button className="increment" id="incrementAdults">
                <i className="fa-solid fa-plus" />
              </button>
            </div>
          </div>
          <div className="option">
            <p>
              Children <span>(Ages 0 to 17)</span>
            </p>
            <div className="controls">
              <button className="decrement" id="decrementChildren" disabled>
                <i className="fa-solid fa-minus" />
              </button>
              <span id="childCount">0</span>
              <button className="increment" id="incrementChildren">
                <i className="fa-solid fa-plus" />
              </button>
            </div>
          </div>
        </div>
        <button id="saveTravelers" className="save-btn">
          Save
        </button>
      </div>
  );
};

export default TravelerModal;
