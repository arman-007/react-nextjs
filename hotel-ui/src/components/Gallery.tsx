import React from 'react';

interface Images {
  images: string[];
}

export default function Gallery({ images }: Images) {
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="gallery-image-container">
      <div className="row desktop-gallery">
        <div className="col-xl-6 col-sm-12">
          <img
            className="image-fluid"
            src={`http://localhost:5000${images[0]}`}
            alt="Gallery Image 1"
            onError={(e) => {
              console.error('Error loading image:', e.currentTarget.src);
              e.currentTarget.src = 'https://placehold.co/600x400'; // Fallback image
            }}
          />
        </div>
        <div className="col-xl-6 col-sm-12">
          <div className="row">
            {images.slice(1, 5).map((image, index) => (
              <div className="col-xl-6" key={index}>
                <img
                  className="image-fluid"
                  src={`http://localhost:5000${image}`}
                  alt={`Gallery Image ${index + 1}`}
                  onError={(e) => {
                    console.error('Error loading image:', e.currentTarget.src);
                    e.currentTarget.src = 'https://placehold.co/600x400'; // Fallback image
                  }}
                />
              </div>
            ))}
            <div className="view-all-button-wrapper">
              <button className="view-all-button" id="openGalleryBtn">
                <i className="fa-solid fa-photo-film" />
                30+
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Gallery */}
      <div className="carousel-container mobile-carousel">
        <div className="row">
          <div className="overlay-actions">
            <div className="col-sm-6">
              <a className="no-link text-3" href="/">
                <i className="fa-solid fa-arrow-left" /> See all properties
              </a>
            </div>
            <div className="col-sm-6 flex">
              <button id="shareBtn" className="share-btn pill-btn">
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </button>
              <button id="saveBtn" className="pill-btn">
                <i id="heartIcon" className="fa-regular fa-heart" />
              </button>
            </div>
          </div>
        </div>
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              className="carousel-image"
              src={`http://localhost:5000${image}`}
              alt={`Gallery Image ${index + 1}`}
              onError={(e) => {
                console.error('Error loading image:', e.currentTarget.src);
                e.currentTarget.src = 'https://placehold.co/600x400'; // Fallback image
              }}
            />
          ))}
        </div>
        {/* Optional dots for navigation */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span key={index} className={`dot ${index === 0 ? 'active' : ''}`} data-index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
