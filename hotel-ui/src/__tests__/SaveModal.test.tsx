import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SaveModal from "../components/SaveModal";

describe("SaveModal Component", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("renders the button with default state", () => {
    render(<SaveModal />);

    const button = screen.getByRole("button", { name: /save/i });
    const icon = screen.getByTestId("heartIcon");

    expect(button).toBeInTheDocument();
    expect(icon).toHaveClass("fa-regular");
  });

  it("toggles the heart icon and updates local storage when clicked", () => {
    render(<SaveModal />);

    const button = screen.getByRole("button", { name: /save/i });
    const icon = screen.getByTestId("heartIcon");

    // Initial state
    expect(icon).toHaveClass("fa-regular");
    expect(localStorage.getItem("isHeartSaved")).toBeNull();

    // Click to save
    fireEvent.click(button);

    expect(icon).toHaveClass("fa-solid");
    expect(localStorage.getItem("isHeartSaved")).toBe("true");

    // Click to unsave
    fireEvent.click(button);

    expect(icon).toHaveClass("fa-regular");
    expect(localStorage.getItem("isHeartSaved")).toBe("false");
  });

  it("maintains the saved state from local storage", () => {
    // Simulate saved state in localStorage
    localStorage.setItem("isHeartSaved", "true");

    render(<SaveModal />);

    const icon = screen.getByTestId("heartIcon");

    expect(icon).toHaveClass("fa-solid");
  });

  it("renders the button with the correct text", () => {
    render(<SaveModal />);

    const button = screen.getByRole("button", { name: /save/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Save");
  });
});
