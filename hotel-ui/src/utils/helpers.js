// JavaScript to control the modal behavior
document.addEventListener("DOMContentLoaded", () => {
    // Get the modal, open button, and close button
    const modal = document.getElementById("regionModal");
    const openModalBtn = document.querySelector(".nav a[href='#']"); // Assuming the nav link is used to open the modal
    const closeModalBtn = document.querySelector(".close-btn");
    const saveBtn = document.getElementById("saveRegion");
    const regionSelect = document.getElementById("region");
    const currencyInput = document.getElementById("currency");
    const regionLink = document.getElementById("regionLink"); // Get the region link in the nav bar
  
    // Load region from localStorage (if it exists)
    const savedRegion = localStorage.getItem("selectedRegion");
    if (savedRegion) {
      regionLink.innerHTML = `<i class="fa-solid fa-globe"></i> ${savedRegion}`;
      regionSelect.value = getRegionCode(savedRegion);
      updateCurrencyField(regionSelect.value);
    }
  
    // Open modal when "United States" link is clicked
    openModalBtn.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "block";
    });
  
    // Close modal when close button is clicked
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when user clicks outside of the modal content
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  
    // Update currency based on region selection
    regionSelect.addEventListener("change", () => {
      const region = regionSelect.value;
      updateCurrencyField(region);
    });
  
    // Save button event listener to update the region link, localStorage, and close modal
    saveBtn.addEventListener("click", () => {
      const selectedRegion =
        regionSelect.options[regionSelect.selectedIndex].text;
  
      // Update the navigation link
      regionLink.innerHTML = `<i class="fa-solid fa-globe"></i> ${selectedRegion}`;
  
      // Save the selected region to localStorage
      localStorage.setItem("selectedRegion", selectedRegion);
  
      // Update the currency field
      updateCurrencyField(regionSelect.value);
  
      // Close the modal
      modal.style.display = "none";
  
      console.log("Region updated to:", selectedRegion);
    });
  
    // Function to update the currency field based on region selection
    function updateCurrencyField(region) {
      let currency = "";
  
      switch (region) {
        case "US":
          currency = "USD";
          break;
        case "PT":
          currency = "EUR";
          break;
        case "UK":
          currency = "GBP";
          break;
        case "CA":
          currency = "CAD";
          break;
        default:
          currency = "";
      }
  
      currencyInput.value = currency; // Update the input field
    }
  
    // Helper function to get region code from region name
    function getRegionCode(regionName) {
      switch (regionName) {
        case "United States":
          return "US";
        case "Portugal":
          return "PT";
        case "United Kingdom":
          return "UK";
        case "Canada":
          return "CA";
        default:
          return "US"; // Default to United States
      }
    }
  });
  
  // Traveler Modal
  document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const travelerBox = document.getElementById("travelerBox");
    const travelerModal = document.getElementById("travelerModal");
    const incrementAdults = document.getElementById("incrementAdults");
    const decrementAdults = document.getElementById("decrementAdults");
    const incrementChildren = document.getElementById("incrementChildren");
    const decrementChildren = document.getElementById("decrementChildren");
    const adultCountSpan = document.getElementById("adultCount");
    const childCountSpan = document.getElementById("childCount");
    const saveTravelers = document.getElementById("saveTravelers");
  
    // Initial counts
    let adultCount = 2;
    let childCount = 0;
  
    // Open traveler selection modal when clicked
    travelerBox.addEventListener("click", () => {
      travelerModal.style.display = "block";
    });
  
    // Increment or decrement adults count
    incrementAdults.addEventListener("click", () => {
      adultCount++;
      adultCountSpan.textContent = adultCount;
      decrementAdults.disabled = adultCount <= 1; // Re-enable the button if adult count > 1
      updateTravelerBoxText();
    });
  
    decrementAdults.addEventListener("click", () => {
      if (adultCount > 1) {
        adultCount--;
        adultCountSpan.textContent = adultCount;
        decrementAdults.disabled = adultCount <= 1; // Disable if adult count reaches 1
        updateTravelerBoxText();
      }
    });
  
    // Increment or decrement children count
    incrementChildren.addEventListener("click", () => {
      childCount++;
      childCountSpan.textContent = childCount;
      decrementChildren.disabled = false; // Enable decrement button for children
      updateTravelerBoxText();
    });
  
    decrementChildren.addEventListener("click", () => {
      if (childCount > 0) {
        childCount--;
        childCountSpan.textContent = childCount;
        if (childCount === 0) {
          decrementChildren.disabled = true; // Disable if children count reaches zero
        }
        updateTravelerBoxText();
      }
    });
  
    // Save button to close modal
    saveTravelers.addEventListener("click", () => {
      travelerModal.style.display = "None";
    });
  
    // Update traveler count display in the box
    function updateTravelerBoxText() {
      const totalTravelers = adultCount + childCount;
      travelerBox.textContent = `${totalTravelers} traveler${
        totalTravelers > 1 ? "s" : ""
      }`;
    }
  
    // Function to close the modal if clicking outside
    document.addEventListener("click", (event) => {
      // Check if the click is outside the modal and not on the travelerBox
      if (
        !travelerModal.contains(event.target) &&
        !travelerBox.contains(event.target)
      ) {
        travelerModal.style.display = "None";
      }
    });
  });
  
  // Gallery Modal
  // JavaScript for Modal
  document.addEventListener("DOMContentLoaded", function () {
    const galleryModal = document.getElementById("galleryModal");
    const openGalleryBtn = document.getElementById("openGalleryBtn");
    const closeModal = document.getElementById("closeModal");
    const galleryImage = document.getElementById("galleryImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const galleryCount = document.getElementById("galleryCount");
  
    // Images Array
    const images = [
      "images/gallery-image1.jpg",
      "images/gallery-image2.jpg",
      "images/gallery-image3.jpg",
      "images/gallery-image4.jpg",
      "images/gallery-image5.jpg",
    ];
  
    let currentIndex = 0;
  
    // Function to Open Modal
    openGalleryBtn.addEventListener("click", function () {
      galleryModal.style.display = "block";
      updateGallery(currentIndex);
    });
  
    // Function to Close Modal
    closeModal.addEventListener("click", function () {
      galleryModal.style.display = "none";
    });
  
    // Function for Next Button
    nextBtn.addEventListener("click", function () {
      currentIndex++;
      updateGallery(currentIndex);
    });
  
    // Function for Previous Button
    prevBtn.addEventListener("click", function () {
      currentIndex--;
      updateGallery(currentIndex);
    });
  
    // Update the Gallery View
    function updateGallery(index) {
      galleryImage.src = images[index];
      galleryCount.textContent = `${index + 1} / ${images.length}`;
  
      // Disable/enable buttons based on index
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === images.length - 1;
    }
  
    // Click outside of the modal to close
    window.addEventListener("click", function (event) {
      if (event.target == galleryModal) {
        galleryModal.style.display = "none";
      }
    });
  
    // Gallery modal for mobile
    let startX;
  
    galleryImage.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });
  
    galleryImage.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) {
        // Swipe left (next image)
        if (currentIndex < images.length - 1) {
          currentIndex++;
          updateGallery(currentIndex);
        }
      } else if (startX < endX - 50) {
        // Swipe right (previous image)
        if (currentIndex > 0) {
          currentIndex--;
          updateGallery(currentIndex);
        }
      }
    });
  });
  
  // share modal
  document.addEventListener("DOMContentLoaded", function () {
    const shareBtn = document.getElementById("shareBtn");
    const shareModal = document.getElementById("shareModal");
    const dismissShareModal = document.getElementById("dismissShareModal");
    const copyLinkBtn = document.getElementById("copyLinkBtn");
  
    // Open Share Modal
    shareBtn.addEventListener("click", function () {
      shareModal.style.display = "block";
    });
  
    // Close Share Modal
    dismissShareModal.addEventListener("click", function () {
      shareModal.style.display = "none";
    });
  
    // Copy Link to Clipboard
    copyLinkBtn.addEventListener("click", function () {
      const link = window.location.href; // Get current page URL
      navigator.clipboard
        .writeText(link)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
  
    // Close modal if clicked outside the content
    window.addEventListener("click", function (event) {
      if (event.target === shareModal) {
        shareModal.style.display = "none";
      }
    });
  });
  
  // Save Event
  document.addEventListener("DOMContentLoaded", function () {
    const saveBtn = document.getElementById("saveBtn");
    const heartIcon = document.getElementById("heartIcon");
  
    // Check saved state in local storage on page load
    if (localStorage.getItem("isHeartSaved") === "true") {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
    }
  
    // Toggle the heart icon state on button click
    saveBtn.addEventListener("click", function () {
      if (heartIcon.classList.contains("fa-regular")) {
        // Change to solid heart and save state
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        localStorage.setItem("isHeartSaved", "true");
      } else {
        // Change to regular heart and save state
        heartIcon.classList.remove("fa-solid");
        heartIcon.classList.add("fa-regular");
        localStorage.setItem("isHeartSaved", "false");
      }
    });
  });
  
  
  // mobile Gallery Carousal
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel-image");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let startX = 0;
  
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
  
    // Swipe functionality for touch devices
    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });
  
    carousel.addEventListener("touchmove", (e) => {
      // Prevent default to avoid unintended behaviors like scrolling
      e.preventDefault();
    });
  
    carousel.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX > endX + 50 && currentIndex < images.length - 1) {
        currentIndex++;
      } else if (startX < endX - 50 && currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    });
  
    // Dot navigation for carousel
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  });
  
  