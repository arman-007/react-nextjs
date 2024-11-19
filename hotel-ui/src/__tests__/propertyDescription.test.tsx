import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyDescription from "../components/propertyDescription";
import PopularAmenities from "../components/PopularAmenities";

// Mock the PopularAmenities component to isolate testing
jest.mock("./PopularAmenities", () => {
  return jest.fn(() => <div data-testid="popular-amenities">Mocked PopularAmenities</div>);
});

const mockDescription =
  "Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental!";
const mockAmenities = ["Barbecue Grill", "Outdoor Space", "Kitchen", "Washer", "Parking Available"];

describe("PropertyDescription Component", () => {
  beforeEach(() => {
    render(<PropertyDescription description={mockDescription} amenities={mockAmenities} />);
  });

  it("renders the property description section", () => {
    expect(screen.getByText("About this property")).toBeInTheDocument();
    expect(screen.getByText("Juneau Vacation Home: Stunning View + Beach Access")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental!"
      )
    ).toBeInTheDocument();
  });

  it("renders 'The Property' details", () => {
    expect(screen.getByText("--THE PROPERTY--")).toBeInTheDocument();
    expect(screen.getByText("CBJ1000104 | 1,115 Sq Ft | 2 Private Decks I Lena Cove & Mountain Views | 2 Bicycles Provided")).toBeInTheDocument();
    expect(screen.getByText("Bedroom 1: Queen Bed, Full Floor Mattress I Bedroom 2: Extra Long Twin Bed")).toBeInTheDocument();
  });

  it("renders 'The Location' details", () => {
    expect(screen.getByText("--THE LOCATION--")).toBeInTheDocument();
    expect(screen.getByText("GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles), Glacier Gardens Rainforest Adventure (10 miles), Mendenhall Glacier (10 miles), Twin Lakes (13 miles)")).toBeInTheDocument();
  });

  it("renders 'Policies' details", () => {
    expect(screen.getByText("--POLICIES--")).toBeInTheDocument();
    expect(screen.getByText("-No smoking")).toBeInTheDocument();
    expect(screen.getByText("-No pets allowed")).toBeInTheDocument();
    expect(screen.getByText("-No events, parties, or large gatherings")).toBeInTheDocument();
  });

  it("renders the property manager details", () => {
    expect(screen.getByText("Property Manager")).toBeInTheDocument();
    expect(screen.getByText("Evolve")).toBeInTheDocument();
  });

  it("renders the available languages", () => {
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("English, French, German, Spanish")).toBeInTheDocument();
  });

  it("renders the PopularAmenities component", () => {
    expect(screen.getByTestId("popular-amenities")).toBeInTheDocument();
    expect(PopularAmenities).toHaveBeenCalledWith({ amenities: mockAmenities }, {});
  });
});
