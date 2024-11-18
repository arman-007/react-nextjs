import Gallery from "./gallery";
import GalleryModal from "./galleryModal";

interface ImagesProp {
  images: string[];
}

export default function NavWithGallery({images} : ImagesProp) {
    return (
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
          <Gallery images={images} />
          {/* Gallery Modal */}
          <GalleryModal />
        </div>
    )
}