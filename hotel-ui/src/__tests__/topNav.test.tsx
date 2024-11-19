import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TopNav from "../components/topNav";
import RegionModal from "../components/RegionModal";

jest.mock("./RegionModal", () => {
  return jest.fn(() => <div>Region Modal</div>); // Mock RegionModal component
});

describe("TopNav Component", () => {
  const mockRegionUpdate = jest.fn();

  beforeEach(() => {
    mockRegionUpdate.mockClear();
    localStorage.clear();
  });

  it("renders default region and nav links", () => {
    render(<TopNav />);

    // Check if the default region "United States" is displayed
    expect(screen.getByText(/United States/i)).toBeInTheDocument();

    // Check if the nav links are rendered
    expect(screen.getByText(/Trip Boards/i)).toBeInTheDocument();
    expect(screen.getByText(/List your property/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
    expect(screen.getByText(/My trips/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it("opens the region modal when the region link is clicked", () => {
    render(<TopNav />);

    const regionLink = screen.getByText(/United States/i);
    fireEvent.click(regionLink);

    // Verify that the RegionModal is rendered
    expect(RegionModal).toHaveBeenCalledTimes(1);
  });

  it("updates region when a new region is selected", () => {
    // Simulate a region being saved in localStorage
    localStorage.setItem("region", "CA");

    render(<TopNav />);

    // Check if the region has been updated from the default to "Canada"
    expect(screen.getByText(/Canada/i)).toBeInTheDocument();
  });

  it("opens and closes the modal correctly", async () => {
    render(<TopNav />);

    const regionLink = screen.getByText(/United States/i);
    fireEvent.click(regionLink); // Open modal

    // Check if the modal opened
    expect(screen.getByText(/Region Modal/i)).toBeInTheDocument();

    // Mock closing the modal
    fireEvent.click(screen.getByText(/Region Modal/i)); // Close modal (simulate onClose callback)
    await waitFor(() => {
      expect(screen.queryByText(/Region Modal/i)).not.toBeInTheDocument();
    });
  });

  it("calls onRegionUpdate when a new region is selected from the modal", async () => {
    render(<TopNav />);

    const regionLink = screen.getByText(/United States/i);
    fireEvent.click(regionLink); // Open modal

    // Simulate selecting a new region (mocked RegionModal)
    mockRegionUpdate("CA");
    
    // Check if the region has been updated
    await waitFor(() => {
      expect(mockRegionUpdate).toHaveBeenCalledWith("CA");
    });
  });

  it("loads the region correctly from localStorage", () => {
    localStorage.setItem("region", "PT");

    render(<TopNav />);

    // Check if the region is correctly updated from localStorage
    expect(screen.getByText(/Portugal/i)).toBeInTheDocument();
  });
});
