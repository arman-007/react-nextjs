import React, { useState, useEffect } from "react";

interface RegionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegionUpdate: (regionCode: string) => void; // Callback to update the region
  }
  
  const RegionModal: React.FC<RegionModalProps> = ({
    isOpen,
    onClose,
    onRegionUpdate,
  }) => {
    const [region, setRegion] = useState("");
    const [currency, setCurrency] = useState("");
  
    useEffect(() => {
      const savedRegion = localStorage.getItem("region") || "";
      const savedCurrency = localStorage.getItem("currency") || "";
      setRegion(savedRegion);
      setCurrency(savedCurrency);
    }, [isOpen]);
  
    const updateCurrencyField = (selectedRegion: string) => {
      let newCurrency = "";
      switch (selectedRegion) {
        case "US":
          newCurrency = "USD";
          break;
        case "PT":
          newCurrency = "EUR";
          break;
        case "UK":
          newCurrency = "GBP";
          break;
        case "CA":
          newCurrency = "CAD";
          break;
        default:
          newCurrency = "";
      }
      setCurrency(newCurrency);
    };
  
    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedRegion = e.target.value;
      setRegion(selectedRegion);
      updateCurrencyField(selectedRegion);
    };
  
    const handleSave = () => {
      localStorage.setItem("region", region);
      localStorage.setItem("currency", currency);
      onRegionUpdate(region); // Notify parent about the region change
      alert("Settings saved successfully!");
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div
        id="regionModal"
        className={`modal ${isOpen ? "show-class" : "hide-class"}`}
      >
        <div className="modal-content">
          <span onClick={onClose} className="close-btn">
            <i className="fa-solid fa-xmark" />
          </span>
          <h3 className="text-2">Display Settings</h3>
          <form>
            <label htmlFor="region">Region</label>
            <select
              id="region"
              name="region"
              value={region}
              onChange={handleRegionChange}
            >
              <option value="">Select a region</option>
              <option value="US">United States</option>
              <option value="PT">Portugal</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </select>
            <label htmlFor="currency">Currency</label>
            <input
              className="text-fade"
              type="text"
              id="currency"
              name="currency"
              value={currency}
              readOnly
            />
            <button
              id="saveRegion"
              type="button"
              className="save-btn"
              onClick={handleSave}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegionModal;
  