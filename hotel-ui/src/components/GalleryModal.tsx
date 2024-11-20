import React from "react";

export default function GalleryModal() {
    return(
        <div className="container flex">
            <div id="galleryModal" className="gallery-modal">
              <div className="gallery-content">
                <div className="row">
                  <div className="col-xl-12">
                    {/* Close/Dismiss Button */}
                    <button id="closeModal" className="close" aria-label="Close Modal">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
                {/* Image Display */}
                <div className="row">
                  <img
                    id="galleryImage"
                    src="https://placehold.co/600x400"
                    alt="Gallery Image"
                  />
                </div>
                {/* Navigation Buttons Below the Image */}
                <div className="nav-buttons">
                  <button className="prev" id="prevBtn" aria-label="Previous Image">
                    <i className="fa-solid fa-circle-chevron-left" />
                  </button>
                  <button className="next" id="nextBtn" aria-label="Next Image">
                    <i className="fa-solid fa-circle-chevron-right" />
                  </button>
                </div>
                {/* Caption and Image Count Below the Buttons */}
                <div className="row">
                  <div className="caption-text">
                    Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs
                    Required
                  </div>
                  <div id="galleryCount" className="image-count">
                    1 / 5
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}