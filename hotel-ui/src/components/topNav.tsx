'use client';
import React, { useState, useEffect } from "react";
import RegionModal from "./RegionModal";

export default function TopNav() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("United States"); // Default region

  // Load the saved region from localStorage on mount
  useEffect(() => {
    const savedRegion = localStorage.getItem("region") || "United States";
    setSelectedRegion(getRegionName(savedRegion)); // Convert code to name
  }, []);

  const openRegionModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // Function to map region codes to display names
  const getRegionName = (regionCode: string): string => {
    switch (regionCode) {
      case "US":
        return "United States";
      case "PT":
        return "Portugal";
      case "UK":
        return "United Kingdom";
      case "CA":
        return "Canada";
      default:
        return "United States";
    }
  };

  // Update the region when saved in the modal
  const handleRegionUpdate = (regionCode: string) => {
    setSelectedRegion(getRegionName(regionCode)); // Update display name
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="nav text-3">
            <span onClick={openRegionModal} id="regionLink">
              <i className="fa-solid fa-globe" /> {selectedRegion}
            </span>
            <a href="#">Trip Boards</a>
            <a href="#">List your property</a>
            <a href="#">Help</a>
            <a href="#">My trips</a>
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
      <RegionModal
        isOpen={showModal}
        onClose={handleClose}
        onRegionUpdate={handleRegionUpdate} // Pass the callback to RegionModal
      />
    </div>
  );
}
