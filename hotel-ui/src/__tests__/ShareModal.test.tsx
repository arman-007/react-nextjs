// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import ShareModal from "../components/ShareModal";

// describe("ShareModal Component", () => {
//   const mockOnClose = jest.fn();

//   beforeEach(() => {
//     mockOnClose.mockClear();
//     // Clear clipboard mock
//     Object.assign(navigator, {
//       clipboard: {
//         writeText: jest.fn(),
//       },
//     });
//   });

//   it("renders nothing when `isOpen` is false", () => {
//     render(<ShareModal isOpen={false} onClose={mockOnClose} />);

//     expect(screen.queryByText(/Share/i)).toBeNull();
//   });

//   it("renders modal content when `isOpen` is true", () => {
//     render(<ShareModal isOpen={true} onClose={mockOnClose} />);

//     expect(screen.getByText(/Share/i)).toBeInTheDocument();
//     expect(screen.getByText(/Juneau Vacation Home: Stunning View \+ Beach Access/i)).toBeInTheDocument();
//     expect(screen.getByAltText(/Property Image/i)).toBeInTheDocument();
//   });

//   it("calls `onClose` when the close button is clicked", () => {
//     render(<ShareModal isOpen={true} onClose={mockOnClose} />);

//     const closeButton = screen.getByRole("button", { name: /close/i });
//     fireEvent.click(closeButton);

//     expect(mockOnClose).toHaveBeenCalledTimes(1);
//   });

//   it("copies the link to clipboard and calls `onClose` when 'Copy link' button is clicked", async () => {
//     render(<ShareModal isOpen={true} onClose={mockOnClose} />);

//     const copyLinkButton = screen.getByText(/Copy link/i).closest("button");
//     fireEvent.click(copyLinkButton);

//     expect(navigator.clipboard.writeText).toHaveBeenCalledWith(window.location.href);
//     expect(mockOnClose).toHaveBeenCalledTimes(1);
//   });

//   it("renders social media sharing buttons", () => {
//     render(<ShareModal isOpen={true} onClose={mockOnClose} />);

//     const buttons = screen.getAllByRole("button");
//     const socialPlatforms = ["X", "WhatsApp", "Facebook", "Messenger", "Telegram", "Copy link"];

//     socialPlatforms.forEach((platform) => {
//       expect(screen.getByText(new RegExp(platform, "i"))).toBeInTheDocument();
//     });

//     expect(buttons).toHaveLength(6); // Verify total social buttons count
//   });
// });
