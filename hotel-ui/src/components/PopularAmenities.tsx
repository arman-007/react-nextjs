import React from "react";

interface PopularAmenitiesProps {
  amenities: string[];
}

const PopularAmenities: React.FC<PopularAmenitiesProps> = ({ amenities }) => {
  // Split amenities into two columns
  const half = Math.ceil(amenities.length / 2);
  const firstHalf = amenities.slice(0, half);
  const secondHalf = amenities.slice(half);

  return (
    <div className="popular-amenities">
      <div className="row text-3">
        <div className="col-xl-6">
          <div className="amenities">
            {firstHalf.map((amenity, index) => (
              <div className="amenity-item" key={index}>
                <i className={`fa-solid ${getAmenityIcon(amenity)}`} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-6">
          <div className="amenities">
            {secondHalf.map((amenity, index) => (
              <div className="amenity-item" key={index}>
                <i className={`fa-solid ${getAmenityIcon(amenity)}`} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        <a className="no-link" href="#">
          See all property amenities →
        </a>
      </div>
    </div>
  );
};

// Function to get the appropriate icon class for each amenity
const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case "barbecue grill":
      return "fa-fire";
    case "outdoor space":
      return "fa-campground";
    case "kitchen":
      return "fa-kitchen-set";
    case "washer":
      return "fa-soap";
    case "parking available":
      return "fa-square-parking";
    case "dryer":
      return "fa-cash-register";
    case "outer space":
      return "fa-campground";
    case "ocean view":
      return "fa-water";
    default:
      return "fa-circle";
  }
};

export default PopularAmenities;
