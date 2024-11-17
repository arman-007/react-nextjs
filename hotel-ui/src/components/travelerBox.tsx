export default function travelerBox(){
    return (
        <div className="col-xl-12 card travelers">
  <label>Travelers</label>
  <div id="travelerBox" className="date-box">
    2 travelers
  </div>
  {/* Traveler Selection Box (Hidden initially) */}
  <div id="travelerModal" className="traveler-modal">
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
          <button className="decrement" id="decrementChildren" disabled="">
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
</div>

    );
}