import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HotelInfo from "../components/hotelInfo";

const mockHotel = {
  id: "1",
  title: "Juneau Vacation Home: Stunning View + Beach Access",
  slug: "juneau-vacation-home",
  description: "A beautiful home with stunning views and beach access.",
  images: ["image1.jpg", "image2.jpg"],
  guestCount: 4,
  bedroomCount: 2,
  bathroomCount: 1,
  amenities: ["WiFi", "Parking", "Pool"],
  hostInfo: {},
  address: "123 Beachside Ave, Juneau, AK",
  latitude: 58.3019,
  longitude: -134.4197,
  rooms: [],
};

describe("HotelInfo Component", () => {
  it("renders the hotel title", () => {
    render(<HotelInfo hotel={mockHotel} />);
    expect(
      screen.getByRole("heading", { name: /Juneau Vacation Home/i })
    ).toBeInTheDocument();
  });

  it("displays the correct number of bedrooms and bathrooms", () => {
    render(<HotelInfo hotel={mockHotel} />);
    expect(screen.getByText("2 bedrooms")).toBeInTheDocument();
    expect(screen.getByText("1 bathroom")).toBeInTheDocument();
  });

  it("renders popular amenities", () => {
    render(<HotelInfo hotel={mockHotel} />);
    expect(screen.getByText("Popular amenities")).toBeInTheDocument();
    mockHotel.amenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });
  });

  it("toggles the traveler modal visibility", () => {
    render(<HotelInfo hotel={mockHotel} />);
    const travelerBox = screen.getByLabelText("Travelers");
    fireEvent.click(travelerBox);
    expect(screen.getByText("Traveler Selection Box")).toBeVisible(); // Adjust based on actual content of TravelerModal.
    fireEvent.click(travelerBox);
    expect(screen.queryByText("Traveler Selection Box")).not.toBeVisible();
  });

  it("displays the map iframe", () => {
    render(<HotelInfo hotel={mockHotel} />);
    const iframe = screen.getByTitle(/google map/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      expect.stringContaining("maps.google.com")
    );
  });

  it("displays pricing and booking information", () => {
    render(<HotelInfo hotel={mockHotel} />);
    expect(screen.getByText("$134 per night")).toBeInTheDocument();
    expect(screen.getByText("Book now")).toBeInTheDocument();
    expect(screen.getByText("Free cancellation")).toBeInTheDocument();
  });
});
