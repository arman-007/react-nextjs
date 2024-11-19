import { render, screen, fireEvent } from "@testing-library/react";
import TravelerModal from "../components/TravelerModal";

describe("TravelerModal Component", () => {
  it("renders when modal is open", () => {
    render(<TravelerModal isOpen={true} onClose={() => {}} />);

    // Check if the modal is rendered
    expect(screen.getByText(/Adults/i)).toBeInTheDocument();
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  });

  it("does not render when modal is closed", () => {
    render(<TravelerModal isOpen={false} onClose={() => {}} />);

    // Check if the modal is not rendered
    expect(screen.queryByText(/Adults/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Children/i)).not.toBeInTheDocument();
  });

  it("increments the adult count correctly", () => {
    render(<TravelerModal isOpen={true} onClose={() => {}} />);

    // Check initial adult count
    expect(screen.getByText("2")).toBeInTheDocument();

    const incrementButton = screen.getByLabelText(/increment adults/i);
    fireEvent.click(incrementButton);

    // Check if the adult count increments
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("decrements the adult count correctly", () => {
    render(<TravelerModal isOpen={true} onClose={() => {}} />);

    // Check initial adult count
    expect(screen.getByText("2")).toBeInTheDocument();

    const decrementButton = screen.getByLabelText(/decrement adults/i);
    fireEvent.click(decrementButton);

    // Check if the adult count decrements
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("does not allow decrementing the children count", () => {
    render(<TravelerModal isOpen={true} onClose={() => {}} />);

    const decrementButton = screen.getByLabelText(/decrement children/i);

    // Check if the decrement button is disabled
    expect(decrementButton).toBeDisabled();
  });

  it("increments the children count correctly", () => {
    render(<TravelerModal isOpen={true} onClose={() => {}} />);

    // Check initial children count
    expect(screen.getByText("0")).toBeInTheDocument();

    const incrementButton = screen.getByLabelText(/increment children/i);
    fireEvent.click(incrementButton);

    // Check if the children count increments
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("calls onClose when Save button is clicked", () => {
    const handleClose = jest.fn();
    render(<TravelerModal isOpen={true} onClose={handleClose} />);

    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);

    // Ensure onClose is called when Save button is clicked
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
