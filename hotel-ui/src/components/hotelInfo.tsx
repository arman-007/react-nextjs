import { useEffect, useState } from "react";
import axios from "axios";

import TravelerModal from "./TravelerModal";
import PopularAmenities from "./PopularAmenities";

interface HotelInfoProps {
  hotel: {
    id: string;
    title: string;
    slug: string;
    description: string;
    images: string[];
    guestCount: number;
    bedroomCount: number;
    bathroomCount: number;
    amenities: string[];
    hostInfo: object;
    address: string;
    latitude: number;
    longitude: number;
    rooms: object[];
  };
}

export default function HotelInfo({ hotel }: HotelInfoProps) {
  const [showTravelerModal, setShowTravelerModal] = useState(false);

  const handleTravelerModal = () => {
    setShowTravelerModal((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-sm-12">
          <p className="text-3">Entire home</p>
          <h1 className="bold">
            {/* Juneau Vacation Home: Stunning View + Beach Access */}
            {hotel.title}
          </h1>
          <div className="row rating">
            <div className="col-xl-4 no-padding col-sm-12">
              <p className="text-2 bold">
                <span>9.8</span> Exceptional
              </p>
              <a className="text-3 bold margin-top" href="#">
                See all 24 reviews <i className="fa-solid fa-chevron-right" />
              </a>
            </div>
          </div>
          {/* Room details  */}
          <div className="row">
            <div className="col-xl-6">
              <div className="property-info">
                <div className="info-item">
                  <i className="fa-solid fa-bed" />
                  <span className="info-text text-3">
                    {hotel.bedroomCount} bedrooms
                  </span>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-users-line" />
                  <span className="info-text">Sleeps 4</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="property-info">
                <div className="info-item">
                  <i className="fa-solid fa-users-line" />
                  <span className="info-text">
                    {hotel.bathroomCount} bathroom
                  </span>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-maximize" />
                  <span className="info-text">1155 sq ft</span>
                </div>
              </div>
            </div>
          </div>
          {/* amenities  */}
          <div className="row">
            <div className="col-xl-12">
              <h3 className="text-2">Popular amenities</h3>
            </div>
          </div>
          <PopularAmenities amenities={hotel.amenities} />
          {/* location and map  */}
          <div className="row">
            <div className="col-xl-12 no-padding">
              <h3 className="text-2 margin-big-y">Explore the AREA</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 no-padding col-sm-12">
              <div className="map-outer">
                <div className="google-map-canvas">
                  <iframe
                    className="google-map-iframe"
                    width="100%"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=380&height=160&hl=en&q=juneau&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />
                  <a href="https://sprunkin.com/">Sprunki Incredibox</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 text-3 col-sm-12">
              <div className="row">
                <div className="col-xl-8">
                  <div className="location-item">
                    <i className="fa-solid fa-location-dot" />
                    <span>Auke Bay</span>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="location-item">
                    <span>6 min Drive</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="location-item">
                    <i className="fa-solid fa-location-dot" />
                    <span>University of Alaska- Southeast</span>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="location-item">
                    <span>10 min Drive</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="location-item">
                    <i className="fa-solid fa-location-dot" />
                    <span>Mendenhall Golf Course</span>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="location-item">
                    <span>14 min Drive</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="location-item">
                    <i className="fa-solid fa-plane" />
                    <span>Juneau, AK (JNU-Juneau Intl.)</span>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="location-item">
                    <span>14 min Drive</span>
                  </div>
                </div>
              </div>
              <p className="view-more">
                <a className="no-link" href="#">
                  See all property amenities →
                </a>
              </p>
            </div>
          </div>
          <div className="col-xl-8 col-sm-12">
            <div className="room-bathroom-info">
              <div className="row">
                <div className="col-xl-12 no-padding">
                  <p className="text-1">Rooms &amp; Beds</p>
                  <p className="text-2 bold">
                    2 Bedrooms <span className="text-3">(sleeps 4)</span>
                  </p>
                </div>
              </div>
              <div className="row text-3 border-bottom padding-bottom">
                <div className="col-xl-6 no-padding">
                  <p className="bold">Bedroom 1</p>
                  <i className="fa-solid fa-bed" />
                  <p>1 queen bed</p>
                </div>
                <div className="col-xl-6">
                  <p className="bold">Bedroom 2</p>
                  <i className="fa-solid fa-bed" />
                  <p>1 twin bed</p>
                </div>
              </div>
            </div>
            <div className="row border-bottom padding-bottom">
              <div className="col-xl-12 no-padding">
                <p className="text-2 bold">1 Bathroom</p>
                <p className="text-3 bold">Full Bathroom</p>
              </div>
            </div>
            <div className="row padding-bottom padding-top">
              <div className="col-xl-12 no-padding col-sm-12">
                <p className="text-1 padding-bottom padding-top">Spaces</p>
                <div className="spaces text-3">
                  <div className="space-item">
                    <i className="fa-solid fa-holly-berry" />
                    <span>Deck or patio</span>
                  </div>
                  <div className="space-item">
                    <i className="fa-solid fa-kitchen-set" />
                    <span>Kitchen</span>
                  </div>
                  <div className="space-item">
                    <i className="fa-regular fa-building" />
                    <span>Balcony</span>
                  </div>
                  <div className="space-item">
                    <i className="fa-solid fa-tree" />
                    <span>Garden</span>
                  </div>
                </div>
                <a className="no-link" href="#">
                  See all rooms and beds details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-12">
          <div className="row right-sidebar">
            <div className="col-xl-12 membership-info">
              <div className="row">
                <div className="col-xl-4">
                  <div className="membership-icon">
                    <i className="fa-solid fa-fan" />
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="membership-content">
                    <p>Members get our best prices when signed in!</p>
                    <button className="sign-in-btn pill-btn">Sign in</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 card">
              <div className="price">
                <h2 className="text-2">
                  $134 <span>per night</span>
                </h2>
              </div>
              <div className="cancellation">
                <p className="cancellation-info">
                  <span>Free cancellation 🛈</span> <br />
                  (Before Mon, Nov 4)
                </p>
                <p className="availability">✅ Your dates are available</p>
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="date-input card">
                    <i className="fa-solid fa-calendar-days" />
                    <div>
                      <label>Start date</label>
                      <div className="date-box">Nov 18</div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="date-input card">
                    <i className="fa-solid fa-calendar-days" />
                    <div>
                      <label>End date</label>
                      <div className="date-box">Nov 20</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Traveler Counter Modal  */}
              <div className="col-xl-12 card travelers">
                <label>Travelers</label>
                <div id="travelerBox" className="date-box">
                  2 travelers
                </div>
                {/* Traveler Selection Box (Hidden initially) */}
                <TravelerModal
                  isOpen={showTravelerModal}
                  onClose={handleTravelerModal}
                />
              </div>
              <div className="flex">
                <div className="col-xl-8">
                  <p className="total-price">
                    <strong>Total: </strong>
                  </p>
                </div>
                <div className="col-xl-4 flex justify-content-end">
                  <p className="total-price">
                    <strong>$500</strong>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="col-xl-8">
                  <p className="total-price">Total includes fees, not tax</p>
                </div>
                <div className="col-xl-4 flex justify-content-end">
                  <p className="total-price">
                    <a href="#">Price details</a>
                  </p>
                </div>
              </div>
              <button className="book-now-btn pill-btn">Book now</button>
              <p className="disclaimer text-3">You will not be charged yet</p>
            </div>
            <div className="col-xl-12 text-3 contact-host">
              <p>Contact host</p>
            </div>
            <div className="col-xl-12 text-4 property-number">
              <p>
                <span className="bold">Property # </span>123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
