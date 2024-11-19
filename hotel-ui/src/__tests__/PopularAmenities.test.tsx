import React from "react";
import { render, screen } from "@testing-library/react";
import PopularAmenities from "../components/PopularAmenities";

const mockAmenities = [
  "Barbecue Grill",
  "Outdoor Space",
  "Kitchen",
  "Washer",
  "Parking Available",
  "Dryer",
  "Ocean View",
];

describe("PopularAmenities Component", () => {
  it("renders all provided amenities correctly", () => {
    render(<PopularAmenities amenities={mockAmenities} />);

    // Check if each amenity is rendered
    mockAmenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });
  });

  it("splits amenities into two columns", () => {
    render(<PopularAmenities amenities={mockAmenities} />);

    // Divide the mock amenities into two halves
    const half = Math.ceil(mockAmenities.length / 2);
    const firstHalf = mockAmenities.slice(0, half);
    const secondHalf = mockAmenities.slice(half);

    // Ensure first column contains the first half of amenities
    firstHalf.forEach((amenity) => {
      expect(screen.getByText(amenity).closest(".col-xl-6")).toBeInTheDocument();
    });

    // Ensure second column contains the second half of amenities
    secondHalf.forEach((amenity) => {
      expect(screen.getByText(amenity).closest(".col-xl-6")).toBeInTheDocument();
    });
  });

  it("renders correct icons for each amenity", () => {
    render(<PopularAmenities amenities={mockAmenities} />);

    // Check if each amenity has the corresponding icon class
    expect(screen.getByText("Barbecue Grill").previousSibling).toHaveClass("fa-fire");
    expect(screen.getByText("Outdoor Space").previousSibling).toHaveClass("fa-campground");
    expect(screen.getByText("Kitchen").previousSibling).toHaveClass("fa-kitchen-set");
    expect(screen.getByText("Washer").previousSibling).toHaveClass("fa-soap");
    expect(screen.getByText("Parking Available").previousSibling).toHaveClass("fa-square-parking");
    expect(screen.getByText("Dryer").previousSibling).toHaveClass("fa-cash-register");
    expect(screen.getByText("Ocean View").previousSibling).toHaveClass("fa-water");
  });

  it("renders the 'See all property amenities' link", () => {
    render(<PopularAmenities amenities={mockAmenities} />);

    // Ensure the link is present
    const link = screen.getByText("See all property amenities →");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });
});
