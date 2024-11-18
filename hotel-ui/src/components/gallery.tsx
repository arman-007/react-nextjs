interface Images {
    images: string[];
}

export default function Gallery({images} : Images) {
    return(
        <div className="gallery-image-container">
            <div className="row desktop-gallery">
              <div className="col-xl-6 col-sm-12">
                <img
                  className="image-fluid"
                  src={`http://localhost:3000/${images[0]}`}
                  alt="placeholder"
                />
              </div>
              <div className="col-xl-6 col-sm-12">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="image-fluid"
                      src={`http://localhost:3000/${images[0]}`}
                      alt="placeholder"
                    />
                  </div>
                  <div className="col-xl-6">
                    <img
                      className="image-fluid"
                      src={`http://localhost:3000/${images[0]}`}
                      alt="placeholder"
                    />
                  </div>
                  <div className="col-xl-6">
                    <img
                      className="image-fluid"
                      src={`http://localhost:3000/${images[0]}`}
                      alt="placeholder"
                    />
                  </div>
                  <div className="col-xl-6">
                    <img
                      className="image-fluid"
                      src={`http://localhost:3000/${images[0]}`}
                      alt="placeholder"
                    />
                    <div className="view-all-button-wrapper">
                      <button className="view-all-button" id="openGalleryBtn">
                        <i className="fa-solid fa-photo-film" />
                        30+
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile Gallery  */}
            <div className="carousel-container mobile-carousel">
              <div className="row">
                <div className="overlay-actions">
                  <div className="col-sm-6">
                    <a className="no-link text-3" href="#">
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
                <img
                  className="carousel-image"
                  src={`http://localhost:3000/${images[0]}`}
                  alt="Gallery Image 1"
                />
                <img
                  className="carousel-image"
                  src={`http://localhost:3000/${images[0]}`}
                  alt="Gallery Image 2"
                />
                <img
                  className="carousel-image"
                  src={`http://localhost:3000/${images[0]}`}
                  alt="Gallery Image 3"
                />
                <img
                  className="carousel-image"
                  src={`http://localhost:3000/${images[0]}`}
                  alt="Gallery Image 4"
                />
                <img
                  className="carousel-image"
                  src={`http://localhost:3000/${images[0]}`}
                  alt="Gallery Image 5"
                />
              </div>
              {/* Optional dots for navigation */}
              <div className="carousel-dots">
                <span className="dot active" data-index={0} />
                <span className="dot" data-index={1} />
                <span className="dot" data-index={2} />
                <span className="dot" data-index={3} />
                <span className="dot" data-index={4} />
              </div>
            </div>
          </div>
    )
}