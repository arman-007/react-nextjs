import React from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={`share-modal ${isOpen ? 'show-class' : 'hide-class'}`}>
      <div className="share-modal-content">
        <span onClick={onClose} className="close regular-x-close">
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
  );
};

export default ShareModal;