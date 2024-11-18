import React from "react";
import Gallery from "./gallery";
import GalleryModal from "./galleryModal";
import ShareModal from "./shareModal";

interface ImagesProp {
  images: string[];
}

export default function NavWithGallery({images} : ImagesProp) {
  const [showGalleryModal, setShowGalleryModal] = React.useState(false);
  const handleGalleryModal = () => {
    setShowGalleryModal((prev) => !prev);
    };
    const handleShareModal = () => {
      setShowGalleryModal((prev) => !prev);
    };
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
                <button id="shareBtn" className="share-btn pill-btn" onClick={handleGalleryModal}>
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
            <ShareModal isOpen={showGalleryModal} onClose={handleGalleryModal} />
          </div>
          {/* Gallery */}
          <Gallery images={images} />
          {/* Gallery Modal */}
          <GalleryModal />
        </div>
    )
}