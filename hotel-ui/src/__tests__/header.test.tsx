// import { render, screen } from "@testing-library/react";
// import Header from "../components/header";
// import TopNav from "../components/topNav";  // Mock the TopNav component if needed

// // Mock TopNav component if it does not contain complex logic
// jest.mock("../components/topNav", () => {
//   return () => <div>TopNav Component</div>;
// });

// describe("Header Component", () => {
//   it("renders the header with TopNav", () => {
//     render(<Header />);

//     // Check if the TopNav component is rendered inside the header
//     expect(screen.getByText(/TopNav Component/i)).toBeInTheDocument();
//   });

//   it("has a top-bar class on the header", () => {
//     render(<Header />);

//     // Check if the header element has the class 'top-bar'
//     const headerElement = screen.getByRole("banner");
//     expect(headerElement).toHaveClass("top-bar");
//   });
// });
