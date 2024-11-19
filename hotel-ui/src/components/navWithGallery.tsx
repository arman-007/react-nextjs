import React from "react";
import Gallery from "./Gallery";
import GalleryModal from "./GalleryModal";
import ShareModal from "./ShareModal";
import SaveModal from "./SaveModal";

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
              <a className="no-link text-3" href="/">
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
                
                <SaveModal />
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