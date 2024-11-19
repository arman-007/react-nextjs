export default function GalleryModal() {
    return(
        <div className="container flex">
            <div id="galleryModal" className="gallery-modal">
              <div className="gallery-content">
                <div className="row">
                  <div className="col-xl-12">
                    {/* Close/Dismiss Button */}
                    <span id="closeModal" className="close">
                      <i className="fa-solid fa-xmark" />
                    </span>
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
                  <button className="prev" id="prevBtn">
                    <i className="fa-solid fa-circle-chevron-left" />
                  </button>
                  <button className="next" id="nextBtn">
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