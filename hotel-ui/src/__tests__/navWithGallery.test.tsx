import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavWithGallery from "../components/navWithGallery";

const mockImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

describe("NavWithGallery Component", () => {
  it("renders correctly with images and elements", () => {
    render(<NavWithGallery images={mockImages} />);

    // Check if the back link is rendered
    expect(screen.getByText("See all properties")).toBeInTheDocument();

    // Check if the user icon is rendered
    expect(screen.getByClass("fa-circle-user")).toBeInTheDocument();

    // Check if the gallery images are rendered
    mockImages.forEach((img) => {
      expect(screen.getByAltText(img)).toBeInTheDocument();
    });

    // Check if the Share button is rendered
    expect(screen.getByText("Share")).toBeInTheDocument();
  });

  it("toggles the Gallery Modal when Share button is clicked", () => {
    render(<NavWithGallery images={mockImages} />);

    // Click on the Share button
    const shareButton = screen.getByText("Share");
    fireEvent.click(shareButton);

    // Check if the Share modal is displayed
    expect(screen.getByRole("dialog", { name: /share/i })).toBeVisible();

    // Close the Share modal
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(screen.queryByRole("dialog", { name: /share/i })).not.toBeVisible();
  });

  it("displays the Gallery with the correct number of images", () => {
    render(<NavWithGallery images={mockImages} />);

    const galleryImages = screen.getAllByRole("img");
    expect(galleryImages).toHaveLength(mockImages.length);
  });
});
