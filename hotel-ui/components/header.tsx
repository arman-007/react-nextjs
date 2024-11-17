export default function Header() {
  return (
    <header className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="nav text-3">
              <a href="#" id="regionLink">
                <i className="fa-solid fa-globe" /> United States
              </a>
              <a href="#">Trip Boards</a>
              <a href="#">List your property</a>
              <a href="#">Help</a>
              <a href="#">My trips</a>
              <a href="#">Sign in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row margin-top margin-bottom">
          <div className="col-sm-12 user-icon">
            <i className="fa-solid fa-circle-user" />
          </div>
          <div className="col-xl-6 back-link">
            <a className="no-link text-3" href="#">
              <i className="fa-solid fa-arrow-left" />
              See all properties
            </a>
          </div>
          <div className="col-xl-6">
            <div className="action-buttons">
              <button id="shareBtn" className="share-btn pill-btn">
                <span className="icon margin-right">
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </span>
                Share
              </button>
              <button id="saveBtn" className="pill-btn">
                <span className="icon margin-right">
                  <i id="heartIcon" className="fa-regular fa-heart" />
                </span>
                Save
              </button>
            </div>
          </div>
          {/* Share Modal */}
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div id="shareModal" className="share-modal">
                  <div className="share-modal-content">
                    <span
                      id="dismissShareModal"
                      className="close regular-x-close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </span>
                    <h3>Share</h3>
                    <div className="container">
                      <div className="row property-info">
                        <div className="col-xl-4">
                          <img
                            src="/assets/images/gallery-image1.jpg"
                            alt="Property Image"
                          />
                        </div>
                        <div className="col-xl-8">
                          <p className="bold">
                            Juneau Vacation Home: Stunning View + Beach Access
                          </p>
                          <p>United States of America</p>
                          <p>9.8/10</p>
                        </div>
                      </div>
                    </div>
                    {/* social share options */}
                    <div className="share-options">
                      <div className="row">
                        <div className="col-xl-4">
                          <button className="social-btn">
                            <i className="fa-brands fa-x-twitter" />
                            <p className="text-4 bold">X</p>
                          </button>
                        </div>
                        <div className="col-xl-4">
                          <button className="social-btn">
                            <i className="fa-brands fa-whatsapp" />
                            <p className="text-4 bold">WhatsApp</p>
                          </button>
                        </div>
                        <div className="col-xl-4">
                          <button className="social-btn">
                            <i className="fa-brands fa-facebook" />
                            <p className="text-4 bold">Facebook</p>
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4">
                          <button className="social-btn">
                            <i className="fa-brands fa-facebook-messenger" />
                            <p className="text-4 bold">Messenger</p>
                          </button>
                        </div>
                        <div className="col-xl-4">
                          <button className="social-btn">
                            <i className="fa-brands fa-telegram" />
                            <p className="text-4 bold">Telegram</p>
                          </button>
                        </div>
                        <div className="col-xl-4">
                          <button id="copyLinkBtn" className="social-btn">
                            <i className="fa-solid fa-clipboard-list" />
                            <p className="text-4 bold">Copy link</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="gallery-image-container">
          <div className="row desktop-gallery">
            <div className="col-xl-6 col-sm-12">
              <img
                className="image-fluid"
                src="/assets/images/gallery-image1.jpg"
                alt="placeholder"
              />
            </div>
            <div className="col-xl-6 col-sm-12">
              <div className="row">
                <div className="col-xl-6">
                  <img
                    className="image-fluid"
                    src="/assets/images/gallery-image2.jpg"
                    alt="placeholder"
                  />
                </div>
                <div className="col-xl-6">
                  <img
                    className="image-fluid"
                    src="/assets/images/gallery-image3.jpg"
                    alt="placeholder"
                  />
                </div>
                <div className="col-xl-6">
                  <img
                    className="image-fluid"
                    src="/assets/images/gallery-image5.jpg"
                    alt="placeholder"
                  />
                </div>
                <div className="col-xl-6">
                  <img
                    className="image-fluid"
                    src="/assets/images/gallery-image4.jpg"
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
                src="/assets/images/gallery-image1.jpg"
                alt="Gallery Image 1"
              />
              <img
                className="carousel-image"
                src="/assets/images/gallery-image2.jpg"
                alt="Gallery Image 2"
              />
              <img
                className="carousel-image"
                src="/assets/images/gallery-image3.jpg"
                alt="Gallery Image 3"
              />
              <img
                className="carousel-image"
                src="/assets/images/gallery-image4.jpg"
                alt="Gallery Image 4"
              />
              <img
                className="carousel-image"
                src="/assets/images/gallery-image5.jpg"
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
        {/* Gallery Modal */}
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
                  src="/assets/images/gallery-image1.jpg"
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
      </div>
    </header>
  );
}
